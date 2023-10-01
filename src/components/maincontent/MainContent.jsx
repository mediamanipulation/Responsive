import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../home/Home'; // Assume you have a Home component
import Flight from '../flight/Flight'; // and so on for each page...
import City from '../city/City';
import Island from '../island/Island';
import Food from '../food/Food';

const MainContent = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/city" element={<City />} />
      <Route path="/island" element={<Island />} />
      <Route path="/food" element={<Food />} />
  </Routes>
    </div>
  );
}

export default MainContent;
