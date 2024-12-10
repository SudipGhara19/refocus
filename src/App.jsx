import React from "react";
import Navbar from "./components/Navbar.jsx";
import Work from "./components/Work.jsx";
import Stripes from "./components/Stripes.jsx";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App;