import React from 'react'
import './Reviews.css'
import ReviewCard from '../ReviewCard/ReviewCard'

const reviews_data = [
  {
    name: "Amit Verma",
    profession: "Marketing Professional",
    review:
      "FOGG has been my daily choice for years. The fragrance lasts all day and feels premium without being overpowering. Perfect for both work and evenings."
  },
  {
    name: "Riya Sharma",
    profession: "Fashion Stylist",
    review:
      "What I love about FOGG is its strong yet refined scent. It stays fresh for hours and always gets compliments, especially during long shoots."
  },
  {
    name: "Karan Mehta",
    profession: "Software Engineer",
    review:
      "FOGG delivers exactly what it promises. Long-lasting fragrance, great variety, and excellent value. It keeps me confident throughout a busy day."
  }
];

const Reviews = () => {
  return (
    <div className='about_review'>
        <h1>What Our <span>Clients Say</span></h1>
        <div className="lux-line-red"></div>

       

        <div className='review_cards'>
            {reviews_data.map((review, index)=>{
             return  ( <ReviewCard key={index} name = {review.name} profession={review.profession} reviewText={review.review}/>)
            })}
          
        </div>

        <div className="explore_collection">
            <h2>Experience <span>Fogg Collection</span></h2>
            <p>Join thousands of satisfied customers who have made the <span>FOGG</span>their elite scent</p>
            <button className='explore_btn' >Explore Collection</button>
        </div>
    </div>
  )
}

export default Reviews