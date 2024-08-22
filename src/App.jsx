import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Events from "./Pages/Events";
import Venues from "./Pages/Venues";
import Contact from "./Pages/Contact";
import AvailableEvents from "./Pages/AvailableEvents";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/availableEvents" element={<AvailableEvents />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
