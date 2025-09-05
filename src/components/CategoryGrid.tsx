import { Home, Mountain, Waves, Building } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  {
    id: 'beachfront',
    name: 'Beachfront',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1729808641871-8d8b5ade6bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwdmlsbGF8ZW58MXx8fHwxNzU2OTg2NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'cabins',
    name: 'Cabins',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1669299866851-c3b48c7965ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbW91bnRhaW4lMjBjYWJpbnxlbnwxfHx8fDE3NTcwMjY2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'luxury',
    name: 'Luxury',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc1NzAwMTQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'city',
    name: 'City Stays',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1635933036183-d1f250072745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXBhcnRtZW50fGVufDF8fHx8MTc1NzAzODA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function CategoryGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Browse by category</h2>
        <p className="text-gray-600">Find your perfect getaway</p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-square relative">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <Icon className="w-8 h-8 mb-2" />
                  <span className="text-lg font-medium">{category.name}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="group flex-shrink-0 relative overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100"
                style={{ minWidth: '160px' }}
              >
                <div className="aspect-square relative">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Icon className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}