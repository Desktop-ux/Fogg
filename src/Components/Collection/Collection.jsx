import React from 'react'
import './Collection.css'
import ProductCard from '../ProductCard/ProductCard'

const Collection = () => {
  return (
    <div className='collection-section'>
        <h1>Fogg Elite Collection</h1>
        <p>Experience our exclusive rangeof luxury fragnances, each crafted with distinctive character and elegance</p>
        <div className="card_container">
         < ProductCard/>
        </div>
    </div>
  )
}

export default Collection