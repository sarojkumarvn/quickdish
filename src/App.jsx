import React from "react";
import "./index.css";
import NavBar from "./components/_header/NavBar";
import HeroSection from "./components/_main/HeroSection";
import FoodCategories from "./components/_categories/FoodCategories";
import Restaurants from "./components/_restuarants/Restuarants";
import RestaurantGrid from "./components/_restuarants/RestuarantGrid";
import SpecialOffers from "./components/_offres/SpecialOffers";
import DownloadAppSection from "./components/_downloadsec/AppDownloadSec";
import WhyChooseUs from "./components/_downloadsec/Choose";
import Footer from "./components/_footersection/Footer";

function App() {
  return (
    <>
    <NavBar />
    <HeroSection />
    <FoodCategories />
    <Restaurants />
    <RestaurantGrid />
    <SpecialOffers />
    <WhyChooseUs />
    <DownloadAppSection />
    <Footer />
      
    </>
  );
}

export default App;
