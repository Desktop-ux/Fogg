import React from 'react'
import './Home.css'
import TiltedCard from '../../TiltedCard.jsx'
import mockup from '/src/assets/images/mockup.png'
import Orb from '../../Orb.jsx'
import Experience from '@/Components/Experience/Experience'
import Collection from '@/Components/Collection/Collection'
import Faqs from '@/Components/Faqs/Faqs'

const Home = () => {
  return (<>
   <div className="hero">
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
  </>
   
  )
}

export default Home
