import React from 'react'
import "./Wishlist.css"
import Footer from '@/Components/Footer/Footer'
import { useContext } from 'react'
import { WishlistContext } from '@/Context/WishlistContext'
import FragnanceCard from '@/Components/FragnanceCard/FragnanceCard'

const Wishlist = () => {

    const { wishlist } = useContext(WishlistContext);
    return (
        <div className='wishlist_container'>
            <div className="wishlist_head">
                <button className="exclusive">Your Wishlist</button>
                <h1>Elite <br />Wishlist</h1>
                <div class="lux-line-blue"></div>
                <p  >Your personal collection of scents that caught your attention.</p>
            </div>
            <div className="wishlist_actions">
                <button className="to_cart"><i class="fa-solid fa-basket-shopping"></i> Add All to Cart</button>
                <button className="remove_wishlist"><i class="fa-solid fa-ban"></i> Clear Wishlist</button>
            </div>
            <div className="your_wishlist">
                <div className="your_wishlist_head">
                    <h2>Your Wishlist 💙</h2>
                    <div class="lux-line-blue"></div>
                </div>
                <div className="your_wishlist_container">
                    {wishlist.length === 0 && <p>No items yet 😢</p>}

                    {wishlist.map(item => (
                        <FragnanceCard
                            key={item.id}
                            product={item}
                            fragImg={item.attar_img || item.roll_img}
                            category={item.category}
                            name={item.attar_name || item.roll_name}
                            descp={item.descp}
                            newPrice={item.new_price}
                            oldPrice={item.old_price}
                            dot_color={item.dot_color}
                            car_badge={item.car_badge}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wishlist