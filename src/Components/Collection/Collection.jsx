import React, { useLayoutEffect, useRef } from 'react'
import './Collection.css'
import ProductCard from '../ProductCard/ProductCard'
import { gsap } from 'gsap/gsap-core'

const Collection = () => {
  const collectionref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(collectionref.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: collectionref.current,
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
    <div className='collection-section' ref={collectionref} >
      <h1>Fogg Elite Collection</h1>
      <p>Experience our exclusive rangeof luxury fragnances, each crafted with distinctive character and elegance</p>
      <div className="card_container">
        < ProductCard />
      </div>
    </div>
  )
}

export default Collection