import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Trip from './components/pages/Trip';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trip" element={<Trip />} />
          {/*<Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
