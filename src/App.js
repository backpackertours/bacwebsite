import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Trip from './components/pages/Trip';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trip" element={<Trip />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          {/*<Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
