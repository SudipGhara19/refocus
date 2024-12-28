import React from "react";
import Navbar from "./components/Navbar.jsx";
import Work from "./components/Work.jsx";
import Stripes from "./components/Stripes.jsx";
import Products from "./components/Products.jsx";
import Marquees from "./components/Marquees.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-auto bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;