import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Personnel from "./pages/Personnel";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import { BrowserRouter, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
      {/* <Routes> */}
      <Home />
      <Personnel />
      <Contact />
      <NotFound />
      {/* </Routes> */}
    </BrowserRouter>
  );
};

export default App;
