import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Heart, Home, MapPin, Globe, LogIn, UserPlus } from 'lucide-react';
import { Button } from './ui/button';
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handlePopupOpen = (popupName: string) => {
    setActivePopup(popupName);
  };

  const handlePopupClose = () => {
    setActivePopup(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-coral-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900 hidden sm:block">
              Havenly Stays
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Explore
            </Link>
            <Link to="/experiences" className="text-gray-700 hover:text-gray-900 transition-colors">
              Experiences
            </Link>
            <Dialog.Root open={activePopup === 'host'} onOpenChange={(open) => !open && handlePopupClose()}>
              <Dialog.Trigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-gray-900" onClick={() => handlePopupOpen('host')}>
                  Become a Host
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md z-50">
                  <div className="space-y-4">
                    <Dialog.Title className="text-xl font-semibold">Become a Host</Dialog.Title>
                    <p className="text-gray-600">Join our community of hosts and start sharing your space with travelers from around the world.</p>
                    <div className="space-y-3 pt-2">
                      <Button className="w-full bg-gradient-to-r from-coral-500 to-teal-500 hover:opacity-90">
                        List Your Space
                      </Button>
                      <Button variant="outline" className="w-full">
                        Learn About Hosting
                      </Button>
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button variant="ghost" onClick={handlePopupClose}>Close</Button>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>

          {/* Desktop User Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <Dialog.Root open={activePopup === 'wishlist'} onOpenChange={(open) => !open && handlePopupClose()}>
              <Dialog.Trigger asChild>
                <Button variant="ghost" size="icon" onClick={() => handlePopupOpen('wishlist')}>
                  <Heart className="w-5 h-5" />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md z-50">
                  <div className="space-y-4">
                    <Dialog.Title className="text-xl font-semibold">Your Wishlist</Dialog.Title>
                    <div className="text-center py-8">
                      <Heart className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                      <p className="text-gray-600">Save your favorite places to stay and experiences for later.</p>
                      <Button className="mt-4 bg-gradient-to-r from-coral-500 to-teal-500 hover:opacity-90">
                        Sign up to save
                      </Button>
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button variant="ghost" onClick={handlePopupClose}>Close</Button>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            <Dialog.Root open={activePopup === 'profile'} onOpenChange={(open) => !open && handlePopupClose()}>
              <Dialog.Trigger asChild>
                <Button variant="outline" className="flex items-center space-x-2 px-3 py-2 rounded-full border-gray-300" onClick={() => handlePopupOpen('profile')}>
                  <Menu className="w-4 h-4" />
                  <User className="w-5 h-5" />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Dialog.Content className="fixed top-4 right-4 bg-white rounded-lg p-4 w-64 shadow-lg z-50">
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      Sign up
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Log in
                    </Button>
                    <div className="border-t border-gray-100 my-2"></div>
                    <Button variant="ghost" className="w-full justify-start">
                      Host your home
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Help
                    </Button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-gray-900 transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Explore
                </Link>
                <Link
                  to="/experiences"
                  className="block text-gray-700 hover:text-gray-900 transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experiences
                </Link>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-700"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handlePopupOpen('host');
                  }}
                >
                  Become a Host
                </Button>
                <div className="pt-4 border-t border-gray-100 space-y-4">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-700"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handlePopupOpen('signup');
                    }}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign up
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-700"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handlePopupOpen('login');
                    }}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Log in
                  </Button>
                </div>
              </div>
            </div>
          )}
      </div>
    </header>
  );
}