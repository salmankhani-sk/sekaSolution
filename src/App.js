// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/header';
import Home from './pages/home';
import About from './pages/About';
import Services from './pages/services';
import Signin from './pages/signin';
import SignUp from './pages/signup';
import ContactUS from './pages/contactus';

function App() {
  return (
    <Router>
      <div className="">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog" element={<ContactUS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
