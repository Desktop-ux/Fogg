import React, { useRef, useLayoutEffect, useContext } from 'react'
import "./Wishlist.css"
import Footer from '@/Components/Footer/Footer'
import { WishlistContext } from '@/Context/WishlistContext'
import FragnanceCard from '@/Components/FragnanceCard/FragnanceCard'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Wishlist = () => {

  const scrollref = useRef(null)
  const pageRef = useRef(null)
  const cardsRef = useRef([])
  const footerRef = useRef(null)

  cardsRef.current = []

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  const scrollLeft = () => {
    scrollref.current.scrollLeft -= 300
  }

  const scrollRight = () => {
    scrollref.current.scrollLeft += 300
  }

  const { wishlist, clearWishlist } = useContext(WishlistContext)

  /* ---------------- PAGE LOAD ANIMATION ---------------- */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".wishlist_head > *", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".wishlist_actions button", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.4,
      })

    }, pageRef)

    return () => ctx.revert()
  }, [])

  /* ---------------- CARDS ANIMATION ---------------- */

  useLayoutEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        y: 40,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "transform",
        onComplete: () => ScrollTrigger.refresh(),
      }
    )
  }, [wishlist])

  /* ---------------- FOOTER FADE ON SCROLL ---------------- */

  useLayoutEffect(() => {
    if (!footerRef.current) return

    gsap.fromTo(
      footerRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      }
    )
  }, [])

  return (
    <div className='wishlist_container' ref={pageRef}>

      <div className="wishlist_head">
        <button className="exclusive">Your Wishlist</button>
        <h1>Elite <br />Wishlist</h1>
        <div className="lux-line-blue"></div>
        <p>Your personal collection of scents that caught your attention.</p>
      </div>

      <div className="wishlist_actions">
        <button className="to_cart">
          <i className="fa-solid fa-basket-shopping"></i> Add All to Cart
        </button>
        <button
          className="remove_wishlist"
          onClick={() => clearWishlist()}
        >
          <i className="fa-solid fa-ban"></i> Clear Wishlist
        </button>
      </div>

      <div className="your_wishlist">
        <div className="your_wishlist_head">
          <h2>Your Wishlist 💙</h2>
          <div className="lux-line-blue"></div>
        </div>

        <div className="your_wishlist_container" ref={scrollref}>
          {wishlist.length === 0 && <p>No items yet 😢</p>}

          {wishlist.map(item => (
            <div ref={addToCardsRef} key={item.id}>
              <FragnanceCard
                product={item}
                fragImg={item.attar_img || item.roll_img}
                category={item.category}
                name={item.attar_name || item.roll_name}
                descp={item.descp}
                newPrice={item.new_price}
                oldPrice={item.old_price}
                dot_color={item.dot_color}
                car_badge={item.car_badge}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='wish_foot' ref={footerRef}>
        <Footer />
      </div>

    </div>
  )
}

export default Wishlist
