import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./components/slick";
import Footer from "./components/footer";

function App() {
  
  
  return (
    <div className="mt-20 w-full">
      <SimpleSlider />
      <Footer />
    </div>
  );
}

export default App;
