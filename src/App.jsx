import React, { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Lenis from "@studio-freight/lenis";
import Home from './Pages/Home/Home';
import Orb from './Orb';
import GhostCursor from './GhostCursor'
import ClickSpark from './ClickSpark';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import LogIn from "./Pages/LogIn/LogIn"
import Wishlist from './Pages/Wishlist/Wishlist';
import ScrollToTop from "./ScrollToTop";


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
        
         <Navbar />
        <ScrollToTop/>
       
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </ClickSpark>

    </div>
  )
}

export default App