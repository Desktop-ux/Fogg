import React from 'react'
import './Products.css'
import FragnanceCard from '@/Components/FragnanceCard/FragnanceCard';


const categories = ["All", "Attar", "Perfume", "Roll ONs", "French", "Arabia"];

const Products = () => {
  

  return (
    <div className='products-page'>
      <div className="product_page_head">
        <button className="exclusive">Our Collection</button>
        <h1>Elite <br />Fragnances</h1>
        <div class="lux-line-green"></div>
        <p  >Discover our complete Collection of premium Fragnances, each carefully crafted to capture <br /> unique emotions and create unforgettable experiences.</p>
      </div>
      <div className="product_search_section">
        <div className="search">
          <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" className='search_input' placeholder='Search Fragnances...'/>
          </div>
      </div>
      <div className="product_categories">
        {
          categories.map((category, index) => (
             <button key={index} className="category_button">{category}</button>
          ))
        }
      </div>
      <div className="fragnances_card_container">
          <FragnanceCard/>
      </div>
    </div>
  )
}

export default Products