import Navigation from './components/layout/Navigation';
import Banner from './components/layout/Banner';
import UpTrips from './components/ui/UpTrips';
import WeekendTrips from './components/ui/WeekendTrips';
import Testimonials from './components/ui/Testimonials';
import Footer from './components/layout/Footer';
import TripDetails from './components/ui/TripDetails';
import Slider from './components/ui/Slider';

function App() {
  return (
    <div className="App">
      <Navigation expand="md" horizontal="end" />
      {/* Home Page */}
      {/* 
      <Banner />
      <UpTrips />
      <WeekendTrips />
      <Testimonials />
      <Slider /> 
      */}

      {/* Trip Details Page */}
      <TripDetails />
      <Footer />
    </div>
  );
}

export default App;
