import React from 'react'
import './ReviewCard.css'

const ReviewCard = ({ name, profession, reviewText }) => {
    return (
        <div className='review_card'>
            <div className="reviewer_container">
                <div className="profile_img">
                    <img src="https://cdn-icons-png.flaticon.com/512/9815/9815472.png" alt="" />
                </div>
                <div className="reviewer_details">
                    <h2>{name}</h2>
                    <p>{profession}</p>
                </div>
            </div> 

            <p className='review_text'>"{reviewText}"</p>
        </div>
    )
}

export default ReviewCard