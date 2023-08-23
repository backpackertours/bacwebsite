import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Trip from './components/pages/Trip';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trip" element={<Trip />} />
          <Route path="aboutus" element={<AboutUs />} />
          {/*<Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
