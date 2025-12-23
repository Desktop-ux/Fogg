import { createContext, useState } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    const exists = wishlist.find(item => item.uid === product.uid);

    if (exists) {
      setWishlist(wishlist.filter(item => item.uid !== product.uid));
    } else {
      setWishlist([...wishlist, product]);
    }


  };
  const clearWishlist = ()=>{
    setWishlist([])
  }


  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist , clearWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
