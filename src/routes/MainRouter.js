import { Routes, Route } from "react-router-dom";
import About from "../screens/About";
import Home from "../screens/Home";
import Waitlist from "../screens/Waitlist";
import Contact from "../screens/Contact";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/about" element={<About />} />

      <Route path="/waitlist" element={<Waitlist />} />
    </Routes>
  );
};

export default MainRouter;
