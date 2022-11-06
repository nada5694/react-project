import React from 'react';
import './App.css';
import Navbar from './Header/Navbar'
import './Header/Header.css'
import Landing from './Header/Landing';
import Maintitle from './Components/Maintitle/Maintitle';
import Articles from './Components/Articles'
import Gallery from './Components/Gallery';
import Features from './Components/Features';
import Testimonials from './Components/Testimonials';
import Skills from './Components/Skills';



function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Landing />
      <Maintitle />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <Skills />
    </div>
    </>
  );
}

export default App;
