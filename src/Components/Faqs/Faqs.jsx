import React from 'react'
import './faqs.css'
import gsap from 'gsap'

import logo_white from '../../Assets/images/logo_white.png'

const Faqs = () => {
  return (
    <div className='faq'>
      <div className="logo_faq">
        <img src={logo_white} alt="" />

      </div>
      <div class="lux-line"></div>

      <p className='faq_head'>Frequently Asked Questions</p>
      <h2 className='faq_main' >Everything you need to know about <br />
        <span>Elite collection</span></h2>
      <p className='faq_text'>Find answers to common questions about our Elite fragnancies, shipping, returns, and more.</p>
    </div>
  )
}

export default Faqs