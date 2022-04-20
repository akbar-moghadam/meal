import React from "react";
import App from "./App";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import CatgoryShow from "./components/CatgoryShow";
import CatgoryItem from "./components/CatgoryItem"

function Routess() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="catgory/:id" element={<CatgoryShow/>}/>
        <Route path="catgory/:id/:id" element={<CatgoryItem/>}/>
        
      </Routes>
    </AnimatePresence>
  );
}

export default Routess;
