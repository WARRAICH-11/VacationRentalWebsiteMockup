import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-coral-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-6xl text-white">404</span>
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Page not found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/" className="block">
            <Button className="w-full bg-gradient-to-r from-coral-500 to-teal-500 hover:from-coral-600 hover:to-teal-600 text-white flex items-center justify-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Go back home</span>
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go back</span>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Need help? Contact our support team
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-coral-500 transition-colors">
              Help Center
            </a>
            <a href="#" className="hover:text-coral-500 transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}