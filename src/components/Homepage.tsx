import { SearchBar } from './SearchBar';
import { CategoryGrid } from './CategoryGrid';
import { PropertyCard } from './PropertyCard';

// Mock property data
const featuredProperties = [
  {
    id: '1',
    title: 'Luxury Beachfront Villa with Private Pool',
    location: 'Malibu, California',
    price: 450,
    rating: 4.9,
    reviewCount: 128,
    images: [
      'https://images.unsplash.com/photo-1729808641871-8d8b5ade6bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwdmlsbGF8ZW58MXx8fHwxNzU2OTg2NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc1NzAwMTQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    isNew: true,
    isSuperhost: true
  },
  {
    id: '2',
    title: 'Cozy Mountain Cabin Retreat',
    location: 'Aspen, Colorado',
    price: 275,
    rating: 4.8,
    reviewCount: 89,
    images: [
      'https://images.unsplash.com/photo-1669299866851-c3b48c7965ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbW91bnRhaW4lMjBjYWJpbnxlbnwxfHx8fDE3NTcwMjY2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    isSuperhost: true
  },
  {
    id: '3',
    title: 'Modern City Apartment with Skyline View',
    location: 'Manhattan, New York',
    price: 320,
    rating: 4.7,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc1NzAzODA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  {
    id: '4',
    title: 'Charming Lakeside Cottage',
    location: 'Lake Tahoe, Nevada',
    price: 195,
    rating: 4.9,
    reviewCount: 73,
    images: [
      'https://images.unsplash.com/photo-1618422955652-ff8e5d922c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlc2lkZSUyMGNvdHRhZ2V8ZW58MXx8fHwxNzU2OTM0MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    isNew: true
  },
  {
    id: '5',
    title: 'Designer Loft with Private Terrace',
    location: 'Venice Beach, California',
    price: 385,
    rating: 4.6,
    reviewCount: 94,
    images: [
      'https://images.unsplash.com/photo-1701092868263-2ed67ac8dfa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHJlbnRhbCUyMGludGVyaW9yfGVufDF8fHx8MTc1NzAzODA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  {
    id: '6',
    title: 'Rustic Farmhouse with Hot Tub',
    location: 'Napa Valley, California',
    price: 285,
    rating: 4.8,
    reviewCount: 67,
    images: [
      'https://images.unsplash.com/photo-1669299866851-c3b48c7965ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbW91bnRhaW4lMjBjYWJpbnxlbnwxfHx8fDE3NTcwMjY2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    isSuperhost: true
  }
];

export function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Find your next stay
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing places to stay, from cozy cabins to luxury villas
            </p>
          </div>
          
          <SearchBar />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 lg:py-16">
        <CategoryGrid />
      </section>

      {/* Featured Properties Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
              Featured stays
            </h2>
            <p className="text-gray-600">
              Handpicked properties from our collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              Your peace of mind is our priority
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every booking is protected by our comprehensive trust and safety features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Verified Hosts</h3>
              <p className="text-gray-600">All hosts are identity-verified and background-checked</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Your payment information is always protected and encrypted</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it, day or night</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}