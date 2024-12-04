import React from "react";
import Navbar from "./components/Navbar.jsx";
import Work from "./components/Work.jsx";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <Navbar />
      <Work />
    </div>
  )
}

export default App;