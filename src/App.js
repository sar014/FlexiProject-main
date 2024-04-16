import React from 'react';
import Hero from './Components/Hero'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameOfTheYear from './Components/GameOfTheYear';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { AboutUs } from './Components/AboutUs';
import { News } from './Components/News';
import { Login } from './Components/Login/Login';

function App() {
  return (
    <>
    <Router>
      <div className="app">
        
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/gameoftheyear" element={<GameOfTheYear />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
