import React from 'react'
import './Visionary.css'
import founder_image from '../../Assets/images/fog_founder.png'

const Visionary = () => {
    return (

        <div className="visionary">
            <div className="visionary_head">
                <h1 className="vision_head">Meet the <span>Visionary</span> </h1>
                <div className="lux-line-red"></div>
            </div>
            <div className="visionary_container">
                <div className="founder">
                    <img src={founder_image} alt="" />
                </div>
                <h3>"Founder of Fogg"</h3>

                <p>Darshan Patel is a well-known Indian entrepreneur and the founder of Vini Cosmetics, the company behind the hugely successful fragrance brand Fogg 🌟. With decades of experience in the FMCG sector, he is admired for his sharp understanding of Indian consumers and strong business instincts. Before starting Vini Cosmetics, he played a key role in building Paras Pharmaceuticals, which owned popular brands like Moov and Dermicool, later selling the company successfully. In 2011, he launched Fogg with a bold “no-gas, more perfume” concept, which quickly disrupted the deodorant market in India 🚀. Under his leadership, Fogg became one of the top-selling men’s deodorant brands, known for its mass appeal, smart marketing, and consistent quality. Darshan Patel’s journey reflects innovation, resilience, and a deep insight into branding, making him a respected figure in India’s personal-care industry 👔✨.</p>
            </div>

        </div>

    )
}

export default Visionary