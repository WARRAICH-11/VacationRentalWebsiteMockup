import { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function SearchBar() {
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Desktop Search Bar */}
      <div className="hidden lg:flex items-center bg-white rounded-full shadow-lg border border-gray-200 p-2">
        <div className="flex-1 px-6 py-3 border-r border-gray-200">
          <label className="block text-xs font-medium text-gray-900 mb-1">Where</label>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-gray-400 mr-2" />
            <Input
              type="text"
              placeholder="Search destinations"
              className="border-0 p-0 text-sm placeholder-gray-500 focus-visible:ring-0"
              value={searchData.location}
              onChange={(e) => setSearchData(prev => ({ ...prev, location: e.target.value }))}
            />
          </div>
        </div>

        <div className="flex-1 px-6 py-3 border-r border-gray-200">
          <label className="block text-xs font-medium text-gray-900 mb-1">Check in</label>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-gray-400 mr-2" />
            <Input
              type="date"
              className="border-0 p-0 text-sm focus-visible:ring-0"
              value={searchData.checkIn}
              onChange={(e) => setSearchData(prev => ({ ...prev, checkIn: e.target.value }))}
            />
          </div>
        </div>

        <div className="flex-1 px-6 py-3 border-r border-gray-200">
          <label className="block text-xs font-medium text-gray-900 mb-1">Check out</label>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-gray-400 mr-2" />
            <Input
              type="date"
              className="border-0 p-0 text-sm focus-visible:ring-0"
              value={searchData.checkOut}
              onChange={(e) => setSearchData(prev => ({ ...prev, checkOut: e.target.value }))}
            />
          </div>
        </div>

        <div className="flex-1 px-6 py-3">
          <label className="block text-xs font-medium text-gray-900 mb-1">Who</label>
          <div className="flex items-center">
            <Users className="w-4 h-4 text-gray-400 mr-2" />
            <select
              className="border-0 bg-transparent text-sm focus:outline-none"
              value={searchData.guests}
              onChange={(e) => setSearchData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>
                  {num} guest{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button className="bg-gradient-to-r from-coral-500 to-teal-500 hover:from-coral-600 hover:to-teal-600 text-white rounded-full p-4 ml-2">
          <Search className="w-4 h-4" />
        </Button>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden space-y-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Where to?</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search destinations"
                  className="pl-10 border-gray-200 rounded-xl"
                  value={searchData.location}
                  onChange={(e) => setSearchData(prev => ({ ...prev, location: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Check in</label>
                <Input
                  type="date"
                  className="border-gray-200 rounded-xl"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData(prev => ({ ...prev, checkIn: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Check out</label>
                <Input
                  type="date"
                  className="border-gray-200 rounded-xl"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData(prev => ({ ...prev, checkOut: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Guests</label>
              <select className="w-full p-3 border border-gray-200 rounded-xl bg-white">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>
                    {num} guest{num > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            <Button className="w-full bg-gradient-to-r from-coral-500 to-teal-500 hover:from-coral-600 hover:to-teal-600 text-white rounded-xl py-3">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}