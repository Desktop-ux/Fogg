import React, { useEffect, useRef } from 'react'
import './faqitem.css'
import gsap from 'gsap'

const FaqItem = ({question , answer , isOpen , onToggle}) => {
    const answreref = useRef(null);
    const iconref = useRef(null);
   
    useEffect(() => {
        if (isOpen) {
            gsap.to(answreref.current, {height: 'auto', duration: 0.5, ease: 'power2.out', padding: '10px 0'})

            gsap.to(iconref.current, {rotation: 45, duration: 0.5, ease: 'power2.out'})
        }else{
            gsap.to(answreref.current, {height: 0, duration: 0.5, ease: 'power2.in', padding: '0px'})
            gsap.to(iconref.current, {rotation: 0, duration: 0.5, ease: 'power2.out'})
        }
    }, [isOpen])


    return (
        <div className='ques-container'>
            <div className="question" onClick={onToggle}>
                <h3 className='ques'>{question}</h3>
                <i ref={iconref} className="fa-solid fa-plus"></i>
            </div>

            <div className="answer" ref={answreref}>
                <p className='ans'>{answer}</p>
            </div>
        </div>

    )
}

export default FaqItem