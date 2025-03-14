import React from 'react';
import './styles/index.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <Header />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
