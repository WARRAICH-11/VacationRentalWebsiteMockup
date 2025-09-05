import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Check, Calendar, Users, CreditCard, Shield, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';

type BookingStep = 'dates' | 'guests' | 'payment' | 'confirmation';

const property = {
  id: '1',
  title: 'Luxury Beachfront Villa with Private Pool',
  location: 'Malibu, California',
  price: 450,
  image: 'https://images.unsplash.com/photo-1729808641871-8d8b5ade6bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwdmlsbGF8ZW58MXx8fHwxNzU2OTg2NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};

export function BookingFlow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<BookingStep>('dates');
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: ''
  });

  const steps = [
    { id: 'dates', title: 'Dates', icon: Calendar },
    { id: 'guests', title: 'Guests', icon: Users },
    { id: 'payment', title: 'Payment', icon: CreditCard },
    { id: 'confirmation', title: 'Confirmation', icon: Check }
  ];

  const calculateTotal = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return { nights: 0, subtotal: 0, serviceFee: 0, taxes: 0, total: 0 };
    const start = new Date(bookingData.checkIn);
    const end = new Date(bookingData.checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const subtotal = nights * property.price;
    const serviceFee = Math.round(subtotal * 0.14);
    const taxes = Math.round(subtotal * 0.08);
    return { nights, subtotal, serviceFee, taxes, total: subtotal + serviceFee + taxes };
  };

  const totals = calculateTotal();

  const handleNext = () => {
    const stepOrder: BookingStep[] = ['dates', 'guests', 'payment', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const stepOrder: BookingStep[] = ['dates', 'guests', 'payment', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    } else {
      navigate(`/property/${id}`);
    }
  };

  const handleConfirmBooking = () => {
    setCurrentStep('confirmation');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'dates':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">When are you traveling?</h2>
              <p className="text-gray-600 mb-6">Select your check-in and check-out dates</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Check in</label>
                <Input
                  type="date"
                  value={bookingData.checkIn}
                  onChange={(e) => setBookingData(prev => ({ ...prev, checkIn: e.target.value }))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Check out</label>
                <Input
                  type="date"
                  value={bookingData.checkOut}
                  onChange={(e) => setBookingData(prev => ({ ...prev, checkOut: e.target.value }))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );

      case 'guests':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">How many guests?</h2>
              <p className="text-gray-600 mb-6">This property can accommodate up to 8 guests</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Number of guests</label>
              <select
                value={bookingData.guests}
                onChange={(e) => setBookingData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
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
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Complete your booking</h2>
              <p className="text-gray-600 mb-6">Please provide your details and payment information</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">First name</label>
                  <Input
                    type="text"
                    value={bookingData.firstName}
                    onChange={(e) => setBookingData(prev => ({ ...prev, firstName: e.target.value }))}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Last name</label>
                  <Input
                    type="text"
                    value={bookingData.lastName}
                    onChange={(e) => setBookingData(prev => ({ ...prev, lastName: e.target.value }))}
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Email</label>
                  <Input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Phone</label>
                  <Input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Payment Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Card number</label>
                <Input
                  type="text"
                  value={bookingData.cardNumber}
                  onChange={(e) => setBookingData(prev => ({ ...prev, cardNumber: e.target.value }))}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Expiry date</label>
                  <Input
                    type="text"
                    value={bookingData.expiryDate}
                    onChange={(e) => setBookingData(prev => ({ ...prev, expiryDate: e.target.value }))}
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">CVV</label>
                  <Input
                    type="text"
                    value={bookingData.cvv}
                    onChange={(e) => setBookingData(prev => ({ ...prev, cvv: e.target.value }))}
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'confirmation':
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Your reservation has been successfully confirmed. You should receive a confirmation email shortly.
              </p>
            </div>

            <Card className="p-6 border border-green-200 bg-green-50">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Booking Details</h3>
                <div className="text-left space-y-2">
                  <p><span className="font-medium">Property:</span> {property.title}</p>
                  <p><span className="font-medium">Check-in:</span> {new Date(bookingData.checkIn).toLocaleDateString()}</p>
                  <p><span className="font-medium">Check-out:</span> {new Date(bookingData.checkOut).toLocaleDateString()}</p>
                  <p><span className="font-medium">Guests:</span> {bookingData.guests}</p>
                  <p><span className="font-medium">Total:</span> ${totals.total}</p>
                </div>
              </div>
            </Card>

            <Button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-coral-500 to-teal-500 hover:from-coral-600 hover:to-teal-600 text-white"
            >
              Return to Home
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  if (currentStep === 'confirmation') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderStepContent()}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-4">
          {steps.slice(0, -1).map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = steps.findIndex(s => s.id === currentStep) > index;
            
            return (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  isCompleted ? 'bg-green-500 border-green-500 text-white' :
                  isActive ? 'bg-coral-500 border-coral-500 text-white' :
                  'border-gray-300 text-gray-400'
                }`}>
                  {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                {index < steps.length - 2 && (
                  <div className={`w-16 h-0.5 mx-2 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Step {steps.findIndex(s => s.id === currentStep) + 1} of {steps.length - 1}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {renderStepContent()}
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-6 border border-gray-200 shadow-lg">
            <div className="flex items-start space-x-4 mb-6">
              <ImageWithFallback
                src={property.image}
                alt={property.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">{property.title}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
              </div>
            </div>

            {totals.nights > 0 && (
              <>
                <Separator className="mb-4" />
                <div className="space-y-3 mb-6">
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
                    <span className="text-gray-900">Total (USD)</span>
                    <span className="text-gray-900">${totals.total}</span>
                  </div>
                </div>
              </>
            )}

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1"
              >
                Back
              </Button>
              <Button
                onClick={currentStep === 'payment' ? handleConfirmBooking : handleNext}
                disabled={currentStep === 'dates' && (!bookingData.checkIn || !bookingData.checkOut)}
                className="flex-1 bg-gradient-to-r from-coral-500 to-teal-500 hover:from-coral-600 hover:to-teal-600 text-white"
              >
                {currentStep === 'payment' ? 'Confirm & Book' : 'Continue'}
              </Button>
            </div>

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