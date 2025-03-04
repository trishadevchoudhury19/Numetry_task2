// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Services = () => <h1>Services Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
