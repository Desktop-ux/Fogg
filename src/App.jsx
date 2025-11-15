import React, { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Lenis from "@studio-freight/lenis";
import Home from './Pages/Home/Home';
import Orb from './Orb';
import GhostCursor from './GhostCursor'
import ClickSpark from './ClickSpark';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (

    <div className='app'>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Your content here */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ClickSpark>

    </div>
  )
}

export default App