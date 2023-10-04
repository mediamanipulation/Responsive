import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../home/Home';
import Art from '../art/Art';
import City from '../city/City';
import Island from '../island/Island';
import Food from '../food/Food';

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/art" element={<Art />} />
      <Route path="/city" element={<City />} />
      <Route path="/island" element={<Island />} />
      <Route path="/food" element={<Food />} />
    </Routes>
  );
}

export default MainContent;
