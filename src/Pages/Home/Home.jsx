import React, { useEffect, useRef } from 'react'
import './Home.css'
import TiltedCard from '../../TiltedCard.jsx'
import mockup from '/src/assets/images/mockup.png'
import Orb from '../../Orb.jsx'
import Experience from '@/Components/Experience/Experience'
import Collection from '@/Components/Collection/Collection'
import Faqs from '@/Components/Faqs/Faqs'
import Footer from '@/Components/Footer/Footer'
import { gsap } from 'gsap'

const Home = () => {
    const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".left > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".tilted-card", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

 



  return (<>
   <div className="hero" ref={heroRef}>
      {/* Left Section */}
      <div className="left">
        <button className="exclusive">Exclusive Collection</button>
        <h1>
          <span>Smell the</span>
          <br /> Luxury
        </h1>
        <p>
          Experience the art of fragrance — crafted to embody sophistication,
          allure, and timeless elegance.
        </p>
        <div className="buttons">
          <button className="collection">Explore Collection</button>
          <button className="story">Watch Story</button>
        </div>
      </div>
      {/* Right Section */}
      <div className="right">
        <div className="card-wrapper">
          

          <TiltedCard
            className="tilted-card"
            imageSrc={mockup}
            captionText="Confidence in Every Drop"
            containerHeight="400px"
            containerWidth="350px"
            imageHeight="400px"
            imageWidth="350px"
            scaleOnHover={1.1}
            rotateAmplitude={12}
          />
        </div>
      </div>
    </div>
    <Experience />
    <Collection /> 
    <Faqs />
    <Footer/>
  </>
   
  )
}

export default Home
