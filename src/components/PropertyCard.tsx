import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    rating: number;
    reviewCount: number;
    images: string[];
    isNew?: boolean;
    isSuperhost?: boolean;
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/property/${property.id}`}>
          <ImageWithFallback
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Heart Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-2 z-10"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart 
            className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </Button>

        {/* Image Dots */}
        {property.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {property.images.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {property.isNew && (
            <span className="bg-coral-500 text-white text-xs px-2 py-1 rounded-lg font-medium">
              New
            </span>
          )}
          {property.isSuperhost && (
            <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-lg font-medium">
              Superhost
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <Link to={`/property/${property.id}`} className="block p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-medium text-gray-900 line-clamp-1 flex-1 mr-2">
            {property.title}
          </h3>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Star className="w-4 h-4 fill-current text-gray-900" />
            <span className="text-sm text-gray-900">{property.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-2 line-clamp-1">
          {property.location}
        </p>
        
        <p className="text-gray-600 text-sm mb-1">
          {property.reviewCount} review{property.reviewCount !== 1 ? 's' : ''}
        </p>
        
        <div className="flex items-baseline space-x-1">
          <span className="font-semibold text-gray-900">${property.price}</span>
          <span className="text-sm text-gray-600">night</span>
        </div>
      </Link>
    </div>
  );
}