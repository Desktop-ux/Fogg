import React from 'react'
import "./ProductCard.css"

const ProductCard = () => {
  return (
    <div className='card'>
        <div className="product"></div>
        <div className="product_details">
            <h2>Crush Red</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero eum fuga reprehenderit commodi blanditiis aperiam modi accusantium voluptates unde explicabo dignissimos, sapiente alias at mollitia sint error voluptatibus dolores.</p>
            <div className="price">
                <p>$299</p>
                <span>$399</span>
                <div className="discount">25% OFF</div>
            </div>
            <div className="select">
                <p>Select Fragnance</p>

            </div>
            <div className="cart_section">
                <button className='add'>Add to Cart</button>
                <button className='learn'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard