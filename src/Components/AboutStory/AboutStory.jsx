import React from 'react'
import './AboutStory.css'
import story_img from '../../Assets/images/story_img.jpg'

const AboutStory = () => {
    return (
        <div className='about_story'>
            <div className="story_head">
                <h1>Fragrance That Tells a Story</h1>
                <div class="lux-line-red"></div>
            </div>
            <div className="story_section">
                <div className="story_content">
                    <p>Born from a vision to redefine everyday freshness, FOGG was created for those who believe confidence begins with how you feel. From the very start, the brand focused on delivering long-lasting fragrances that make a bold statement without saying a word.</p>
                    <p>FOGG’s journey is built on innovation and performance. Every fragrance is carefully developed using advanced formulation techniques to ensure intensity, consistency, and endurance throughout the day. It’s not just about smelling good — it’s about staying fresh, no matter where life takes you.</p>
                   <p> With a wide range of signature variants, FOGG reflects modern individuality and dynamic lifestyles. Each bottle represents precision, research, and a commitment to quality that resonates with millions of users across the country.
                    </p>
                    <p>Today, FOGG stands as a symbol of power, freshness, and reliability — a fragrance choice trusted by those who demand more from their everyday essentials.</p>
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