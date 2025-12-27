import React, { useLayoutEffect, useRef } from 'react'
import './Footer.css'
import logo_white from '../../assets/images/logo_white.png'
import twitter from '../../assets/images/social_icons/twitter.png'
import Github from '../../assets/images/social_icons/github.png'
import linkedin from '../../assets/images/social_icons/linkedIn.png'
import instagram from '../../assets/images/social_icons/insta.png'
import gsap from 'gsap'
import { Link } from 'react-router-dom'


 
const Footer = () => {
  const footerref = useRef(null)

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerref.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerref.current,
          start: "top 100%",
          end: "bottom 60%",
          markers: false,
          scrub: 1,
        },
      });
    })
    return () => ctx.revert();
  }, [])

  return (
    <div className='footer' ref={footerref}>
        <div className="fogg_footer">
           <div className="logo_anime">
            FOGG
           </div>
            <p className='fotter_tagline' >Creating exceptional experience with cutting edge <br />
            technology and innovtive design solutions.
            </p>
            <div className="social_media">
               <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={Github} alt="" />
           </div>
        </div>
        <div className="foot_nav">
          <h2>Company</h2>
          <div className="foot_links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Products</Link>
            <Link to="/login">Log In</Link>
          </div>
        </div>
        <div className="foot_support">
          <h2>Support</h2>
          <div className="support_links">
            <p>HelpCenter</p>
            <p>TermsOfService</p>
            <p>PrivacyPolicy</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="foot_perfumes">
          <h2>our Perfumes</h2>
          <div className="perfume_links">
            <p>Aqua Storm</p>
            <p>Emerald Rush</p>
            <p>Amber Blaze</p>
            <p>Crimson Royale</p>
          </div>
        </div>
    </div>
  )
}

export default Footer