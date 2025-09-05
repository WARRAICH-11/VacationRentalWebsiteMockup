import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { PropertyListing } from './components/PropertyListing';
import { BookingFlow } from './components/BookingFlow';
import { Experiences } from './components/Experiences';
import { NotFound } from './components/NotFound';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/property/:id" element={<PropertyListing />} />
            <Route path="/booking/:id" element={<BookingFlow />} />
            {/* Catch all routes including /preview_page.html */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}