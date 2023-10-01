import React from 'react';
import './App.css';
import Header from './components/header/Header';
import MainContent from './components/maincontent/MainContent';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className='app-_main_container'>
    <div className="app-container">
    <Router>
        <Header />
        <MainContent />
        <Footer />
    </Router>
    </div>
    </div>
  );
}

export default App;
