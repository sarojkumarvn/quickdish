import React from "react";
import NavBar from "./components/_header/NavBar";
import HeroSection from "./components/_main/HeroSection";
import FoodCategories from "./components/_categories/FoodCategories";
import RestaurantGrid from "./components/_restuarants/RestuarantGrid";
import SpecialOffers from "./components/_offres/SpecialOffers";
import WhyChooseUs from "./components/_downloadsec/Choose";
import DownloadAppSection from "./components/_downloadsec/AppDownloadSec";
import Footer from "./components/_footersection/Footer";

export const LandingPage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FoodCategories />

      <RestaurantGrid />
      <SpecialOffers />
      <WhyChooseUs />
      <DownloadAppSection />
      <Footer />
    </>
  );
};
