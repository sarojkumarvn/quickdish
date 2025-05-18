import React from "react";
import "./index.css";

import { LandingPage } from "./LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FoodCategories from "./components/_categories/FoodCategories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path= "/orderpage" element = {<FoodCategories />} />
      </Routes>
    </Router>
  );
}

export default App;
