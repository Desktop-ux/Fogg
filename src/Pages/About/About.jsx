import React, { useEffect, useLayoutEffect, useRef } from 'react'
import './About.css'
import Footer from '@/Components/Footer/Footer'
import logo_white from '../../Assets/images/logo_white.png'
import AboutStory from '@/Components/AboutStory/AboutStory'
import Reviews from '@/Components/Reviews/Reviews'
import Visionary from '@/Components/Visionary/Visionary'

import gsap from 'gsap'


const About = () => {
  const aboutHeadref = useRef(null)

   useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about_main", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

 
    }, aboutHeadref);

    return () => ctx.revert();
  }, []);

  return (
    <div className='about_container' ref={aboutHeadref}>
      <div className="about_main" >
        <div className="logo_about">
          <img src={logo_white} alt="" />
        </div>
        <div class="lux-line"></div>

        <p className='about_head'>Collection</p>
        <h2 className='about_main' >Creating Memories Through <br />
          <span>Exquisite Fragnances</span></h2>
        <p className='about_text'>Every Bottle tells a story of passion, artistry, and the relentless pursuit of olfactory <br />perfection</p>
      </div>
      <div className="story_section">
        <AboutStory />
      </div>
      <Visionary />
      <Reviews />
      <Footer />
    </div>
  )
}

export default About