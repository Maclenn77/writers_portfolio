import React from 'react';
import Hero from './components/hero';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import About from './components/about';

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
