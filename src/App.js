import Navigation from './components/layout/Navigation';
import Banner from './components/layout/Banner';
import UpTrips from './components/ui/UpTrips';
import WeekendTrips from './components/ui/WeekendTrips';
import Testimonials from './components/ui/Testimonials';
import TripBanner from './components/ui/TripBanner';
import Footer from './components/layout/Footer';
import Iternary from './components/ui/Iternary';

function App() {
  return (
    <div className="App">
      <Navigation expand="md" horizontal="end" />
      {/* Home Page */}
      <Banner />
      <UpTrips />
      <WeekendTrips />
      <Testimonials />

      {/* Trip Details Page */}
      {
      /* <TripBanner />
      <Iternary /> 
      */}
      <Footer />
    </div>
  );
}

export default App;
