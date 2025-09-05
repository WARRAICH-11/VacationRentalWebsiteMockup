import { SearchBar } from './SearchBar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Clock, Users } from 'lucide-react';
import { Button } from './ui/button';

const experiences = [
  {
    id: '1',
    title: 'Wine Tasting in Napa Valley',
    location: 'Napa Valley, California',
    price: 89,
    duration: '3 hours',
    rating: 4.9,
    reviewCount: 245,
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwdGFzdGluZyUyMG5hcGElMjB2YWxsZXl8ZW58MXx8fHwxNzU3MDM4MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Food & Drink'
  },
  {
    id: '2',
    title: 'Sunset Sailing Adventure',
    location: 'Santa Barbara, California',
    price: 125,
    duration: '2.5 hours',
    rating: 4.8,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWlsaW5nJTIwc3Vuc2V0fGVufDF8fHx8MTc1NzAzODA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sports & Adventure'
  },
  {
    id: '3',
    title: 'Cooking Class with Local Chef',
    location: 'San Francisco, California',
    price: 95,
    duration: '4 hours',
    rating: 4.9,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2xhc3N8ZW58MXx8fHwxNzU3MDM4MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Food & Drink'
  },
  {
    id: '4',
    title: 'Photography Tour of Golden Gate',
    location: 'San Francisco, California',
    price: 75,
    duration: '3 hours',
    rating: 4.7,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBnYXRlJTIwYnJpZGdlfGVufDF8fHx8MTc1NzAzODA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Culture & Arts'
  },
  {
    id: '5',
    title: 'Hiking & Wellness Retreat',
    location: 'Big Sur, California',
    price: 150,
    duration: '6 hours',
    rating: 4.8,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB3ZWxsbmVzcyUyMHJldHJlYXR8ZW58MXx8fHwxNzU3MDM4MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sports & Adventure'
  },
  {
    id: '6',
    title: 'Artisan Market Tour',
    location: 'Los Angeles, California',
    price: 55,
    duration: '2 hours',
    rating: 4.6,
    reviewCount: 203,
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwbWFya2V0fGVufDF8fHx8MTc1NzAzODA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Culture & Arts'
  }
];

const categories = [
  'All Categories',
  'Food & Drink',
  'Sports & Adventure', 
  'Culture & Arts',
  'Nature & Wildlife',
  'Entertainment'
];

export function Experiences() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Discover unique experiences
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Book activities hosted by local experts and create unforgettable memories
            </p>
          </div>
          
          <SearchBar />
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All Categories' ? 'default' : 'outline'}
                className="flex-shrink-0 rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
              Featured experiences
            </h2>
            <p className="text-gray-600">
              Curated activities from verified local hosts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs px-2 py-1 rounded-lg font-medium">
                      {experience.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-900 line-clamp-2 flex-1 mr-2">
                      {experience.title}
                    </h3>
                    <div className="flex items-center space-x-1 flex-shrink-0">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-sm text-gray-900">{experience.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">
                    {experience.location}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{experience.reviewCount} reviews</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-1">
                      <span className="font-semibold text-gray-900">${experience.price}</span>
                      <span className="text-sm text-gray-600">per person</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-coral-500 to-teal-500 hover:from-coral-600 hover:to-teal-600 text-white"
                    >
                      Book now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              Why book experiences with us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We connect you with passionate local hosts who share their expertise and love for their craft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Hosts</h3>
              <p className="text-gray-600">Learn from passionate locals who are experts in their field</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Unique Activities</h3>
              <p className="text-gray-600">Discover one-of-a-kind experiences you won't find anywhere else</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Small Groups</h3>
              <p className="text-gray-600">Intimate experiences with personalized attention and quality interactions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}