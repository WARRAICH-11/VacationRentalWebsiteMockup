import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Star, Heart, Share, Wifi, Car, ChefHat, Tv, AirVent, Shield, Award, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Separator } from './ui/separator';

// Mock property data
const property = {
  id: '1',
  title: 'Luxury Beachfront Villa with Private Pool',
  location: 'Malibu, California',
  price: 450,
  rating: 4.9,
  reviewCount: 128,
  images: [
    'https://images.unsplash.com/photo-1729808641871-8d8b5ade6bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwdmlsbGF8ZW58MXx8fHwxNzU2OTg2NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc1NzAwMTQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1701092868263-2ed67ac8dfa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHJlbnRhbCUyMGludGVyaW9yfGVufDF8fHx8MTc1NzAzODA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ],
  host: {
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    isSuperhost: true,
    responseTime: '1 hour',
    responseRate: '100%'
  },
  details: {
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    beds: 4
  },
  amenities: [
    { icon: Wifi, name: 'WiFi' },
    { icon: Car, name: 'Free parking' },
    { icon: ChefHat, name: 'Kitchen' },
    { icon: Tv, name: '55" HDTV' },
    { icon: AirVent, name: 'Air conditioning' }
  ],
  description: 'Experience luxury living in this stunning beachfront villa featuring panoramic ocean views, a private pool, and direct beach access. Perfect for family gatherings or romantic getaways.',
  reviews: [
    {
      id: 1,
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: 'August 2024',
      comment: 'Absolutely incredible stay! The views are breathtaking and the villa exceeded all expectations.'
    },
    {
      id: 2,
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: 'July 2024',
      comment: 'Perfect location, amazing amenities, and Sarah was an excellent host. Will definitely book again!'
    }
  ]
};

export function PropertyListing() {
  const { id } = useParams();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const subtotal = nights * property.price;
    const serviceFee = Math.round(subtotal * 0.14);
    const taxes = Math.round(subtotal * 0.08);
    return { nights, subtotal, serviceFee, taxes, total: subtotal + serviceFee + taxes };
  };

  const totals = calculateTotal();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
          {property.title}
        </h1>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-current text-gray-900 mr-1" />
              <span className="font-medium">{property.rating}</span>
              <span className="text-gray-600 ml-1">({property.reviewCount} reviews)</span>
            </div>
            <span className="text-gray-600">{property.location}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Save</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-8 rounded-2xl overflow-hidden">
        <div className="aspect-square lg:aspect-[4/3]">
          <ImageWithFallback
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setCurrentImageIndex((currentImageIndex + 1) % property.images.length)}
          />
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-2">
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index} className="aspect-square">
              <ImageWithFallback
                src={image}
                alt={`${property.title} ${index + 2}`}
                className="w-full h-full object-cover cursor-pointer rounded-lg"
                onClick={() => setCurrentImageIndex(index + 1)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Host Info */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-1">
                Hosted by {property.host.name}
              </h2>
              <p className="text-gray-600">
                {property.details.guests} guests • {property.details.bedrooms} bedrooms • {property.details.beds} beds • {property.details.bathrooms} bathrooms
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <ImageWithFallback
                src={property.host.avatar}
                alt={property.host.name}
                className="w-12 h-12 rounded-full"
              />
              {property.host.isSuperhost && (
                <Award className="w-6 h-6 text-coral-500" />
              )}
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          <Separator />

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">What this place offers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <Separator />

          {/* Reviews */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Star className="w-5 h-5 fill-current text-gray-900" />
              <h3 className="text-xl font-medium text-gray-900">
                {property.rating} • {property.reviewCount} reviews
              </h3>
            </div>
            
            <div className="space-y-6">
              {property.reviews.map((review) => (
                <div key={review.id}>
                  <div className="flex items-center space-x-3 mb-3">
                    <ImageWithFallback
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{review.name}</span>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current text-gray-900" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">{review.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-6 border border-gray-200 shadow-lg">
            <div className="mb-6">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-2xl font-semibold text-gray-900">${property.price}</span>
                <span className="text-gray-600">night</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-current text-gray-900" />
                <span className="text-sm font-medium">{property.rating}</span>
                <span className="text-sm text-gray-600">({property.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Check in</label>
                  <Input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Check out</label>
                  <Input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>
                      {num} guest{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {totals.nights > 0 && (
              <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-700">${property.price} × {totals.nights} nights</span>
                  <span className="text-gray-900">${totals.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Service fee</span>
                  <span className="text-gray-900">${totals.serviceFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Taxes</span>
                  <span className="text-gray-900">${totals.taxes}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${totals.total}</span>
                </div>
              </div>
            )}

            <Link to={`/booking/${property.id}`}>
              <Button className="w-full bg-gradient-to-r from-coral-500 to-teal-500 hover:from-coral-600 hover:to-teal-600 text-white py-3 rounded-lg">
                Reserve
              </Button>
            </Link>

            <p className="text-sm text-gray-600 text-center mt-3">
              You won't be charged yet
            </p>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure booking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Verified host</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}