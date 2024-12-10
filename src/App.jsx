import React from "react";
import Navbar from "./components/Navbar.jsx";
import Work from "./components/Work.jsx";
import Stripes from "./components/Stripes.jsx";
import Products from "./components/Products.jsx";

function App() {
  return (
    <div className="w-full h-auto bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
    </div>
  )
}

export default App;