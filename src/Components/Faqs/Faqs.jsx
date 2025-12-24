import React, { useLayoutEffect, useRef, useState } from 'react'
import './faqs.css'
import gsap from 'gsap'

import logo_white from '../../Assets/images/logo_white.png'
import FaqItem from '../FaqItem/FaqItem'

const faqs = [
  {
    id: 1,
    question: "What is FOGG perfume known for?",
    answer:
      "FOGG is known for its long-lasting fragrances, strong projection, and affordable pricing, making it a popular choice among youth and daily users."
  },
  {
    id: 2,
    question: "How long does FOGG perfume usually last?",
    answer:
      "FOGG perfumes generally last between 6 to 10 hours, depending on the variant, weather conditions, and skin type."
  },
  {
    id: 3,
    question: "Is FOGG suitable for daily use?",
    answer:
      "Yes, FOGG perfumes are designed for everyday use and are suitable for office, college, and casual outings."
  },
  {
    id: 4,
    question: "Are FOGG perfumes only for men?",
    answer:
      "FOGG mainly focuses on men’s fragrances, but some variants can also be enjoyed by women depending on personal preference."
  },
  {
    id: 5,
    question: "What makes FOGG different from other perfume brands?",
    answer:
      "FOGG stands out for its no-gas formula, strong fragrance concentration, and value-for-money pricing."
  },
  {
    id: 6,
    question: "Does FOGG contain gas?",
    answer:
      "Most FOGG body sprays follow a no-gas formula, which means you get more fragrance and less propellant."
  },
  {
    id: 7,
    question: "Can FOGG perfumes cause skin irritation?",
    answer:
      "FOGG perfumes are generally safe, but people with sensitive skin should do a patch test before regular use."
  },
  {
    id: 8,
    question: "Which FOGG variant is the most popular?",
    answer:
      "FOGG Marco, FOGG Napoleon, and FOGG Scent Xtremo are among the most popular and widely used variants."
  },
  {
    id: 9,
    question: "Is FOGG a good option for gifting?",
    answer:
      "Yes, FOGG perfumes are a good gifting option due to their appealing packaging, strong fragrance, and reasonable price."
  },
  {
    id: 10,
    question: "How should FOGG perfume be applied for best results?",
    answer:
      "Apply FOGG perfume on pulse points like the neck, wrists, and behind the ears for better projection and longer-lasting scent."
  }
];

const Faqs = () => {
  const faqsref = useRef(null)
  const faqHeadref = useRef(null)
  const enqref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(faqsref.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqsref.current,
          start: "top 100%",
          end: "bottom 60%",
          markers: false,
          scrub: 1,
        },
      });
    })
    return () => ctx.revert();
  }, [])

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(faqHeadref.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqHeadref.current,
          start: "top 100%",
          end: "bottom 60%",
          markers: false,
          scrub: 1,
        },
      });
    })
    return () => ctx.revert();
  }, [])

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(enqref.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: enqref.current,
          start: "top 100%",
          end: "bottom 60%",
          markers: false,
          scrub: 1,
        },
      });
    })
    return () => ctx.revert();
  }, [])

  const [activeId, setActiveId] = useState()
 
  return (
    <div className='faq'>
      <div className="faq_head_container" ref={faqHeadref}>
        <div className="logo_faq">
          <img src={logo_white} alt="" />

        </div>
        <div className="lux-line"></div>

        <p className='faq_head'>Frequently Asked Questions</p>
        <h2 className='faq_main' >Everything you need to know about <br />
          <span>Elite collection</span></h2>
        <p className='faq_text'>Find answers to common questions about our Elite fragnancies, shipping, returns, and more.</p>
      </div>
    

      <div className="questions" ref={faqsref} >
        {
          faqs.map(faq => (
            <FaqItem key={faq.id} isOpen={activeId === faq.id} onToggle={() =>
              setActiveId(activeId === faq.id ? null : faq.id)
            } question={faq.question} answer={faq.answer} />
          ))
        }
      </div>

      <div className="enquiry" ref={enqref}>
        <h2 className="more_ques">Still Have Questions?</h2>
        <p>Our ELite Fragnance experts are here to help you find the perfect <br />
          scent or answer any questions about your collections.</p>
        <button className="contact_support">Contact Support</button>
      </div>
    </div>
  )
}

export default Faqs