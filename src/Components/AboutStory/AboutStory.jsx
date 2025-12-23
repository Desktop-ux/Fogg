import React, { useLayoutEffect, useRef } from 'react'
import './AboutStory.css'
import story_img from '../../Assets/images/story_img.jpg'
import Counter from '../Counter/Counter'
import gsap from 'gsap'

const AboutStory = () => {
    const aboutStoryref = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(aboutStoryref.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: aboutStoryref.current,
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
        <div className='about_story' ref={aboutStoryref}>
            <div className="story_head">
                <h1>Fragrance That Tells a Story</h1>
                <div class="lux-line-red"></div>
            </div>
            <div className="story_section">
                <div className="story_content">
                    <div className="story_text">
                        <p>Born from a vision to redefine everyday freshness, FOGG was created for those who believe confidence begins with how you feel. From the very start, the brand focused on delivering long-lasting fragrances that make a bold statement without saying a word.</p>
                        <p>FOGG’s journey is built on innovation and performance. Every fragrance is carefully developed using advanced formulation techniques to ensure intensity, consistency, and endurance throughout the day. It’s not just about smelling good — it’s about staying fresh, no matter where life takes you.</p>
                        <p> With a wide range of signature variants, FOGG reflects modern individuality and dynamic lifestyles. Each bottle represents precision, research, and a commitment to quality that resonates with millions of users across the country.
                        </p>
                        <p>Today, FOGG stands as a symbol of power, freshness, and reliability — a fragrance choice trusted by those who demand more from their everyday essentials.</p>
                    </div>
                    <div className="fogg_data">
                        <div className="data">
                            <Counter end={50} duration={2} />
                            {/* 50+ customers */}
                            <p>Satisfied <br /> Cutomers</p>
                        </div>
                        <div className="data">

                            <Counter end={4} duration={1} />

                            {/* 4+ years */}
                            <p>Years OF<br />Experience</p>
                        </div>
                        <div className="data">
                            <Counter end={12} duration={2} />  {/* 12 fragrances */}
                            <p>Fogg <br />Fragnances</p>
                        </div>


                    </div>
                </div>
                <div className="story_image">
                    <div className="story_img_container">
                        <img src={story_img} alt="" />
                        <p>"Every fragnance is a masterpiece, crafted with precision and passion"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutStory