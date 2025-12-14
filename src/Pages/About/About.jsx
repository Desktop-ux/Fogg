import React from 'react'
import './About.css'
import Footer from '@/Components/Footer/Footer'
import logo_white from '../../Assets/images/logo_white.png'
import AboutStory from '@/Components/AboutStory/AboutStory'
import Reviews from '@/Components/Reviews/Reviews'

const About = () => {
  return (
    <div className='about_container'>
      <div className="about_main">
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
      <Reviews />
      <Footer />
    </div>
  )
}

export default About