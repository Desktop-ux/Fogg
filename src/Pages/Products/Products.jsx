import React from 'react'
import './Products.css'
import FragnanceCard from '@/Components/FragnanceCard/FragnanceCard';

import BlueWave from "/src/assets/Attar/Blue Wave.png"
import CrimsonSpice from "/src/assets/Attar/Crimson Spice.png"
import EmeraldMush from "/src/assets/Attar/Emerald Musk.png"
import NoirIntense from "/src/assets/Attar/Noir Intense.png"
import PurpleAmber from "/src/assets/Attar/Purple Amber.png"
import RoyalOud from "/src/assets/Attar/Royal Oud.png"
import WhiteOud from "/src/assets/Attar/White Oud.png"

import blue_rollOn from "/src/assets/RollOns/blue_rollOn.png"
import cyan_rollOn from "/src/assets/RollOns/cyan_rollOn.png"
import green_rollOn from "/src/assets/RollOns/green_rollOn.png"
import orange_rollOn from "/src/assets/RollOns/orange_rollOn.png"
import purple_rollOn from "/src/assets/RollOns/purple_rollOn.png"
import red_rollOn from "/src/assets/RollOns/red_rollOn.png"

import var_blue from "/src/assets/Bottles/blue.png"
import var_green from "/src/assets/Bottles/green.png"
import var_orange from "/src/assets/Bottles/orange.png"
import var_violet from "/src/assets/Bottles/purple.png"
import var_yellow from "/src/assets/Bottles/yellow.png"
import var_red from "/src/assets/Bottles/red.png"

import Ambre_Royale from "/src/assets/Arabia/Ambre_Royale.png"
import Aqua_Crystal from "/src/assets/Arabia/Aqua_Crystal.png"
import Nature_Supreme from "/src/assets/Arabia/Nature_Supreme.png"
import Noir_instense from "/src/assets/Arabia/Noir_instense.png"

import Ambre_Précieux from "/src/assets/French/Ambre Précieux.png"
import Bleu_Azur from "/src/assets/French/Bleu Azur.png"
import L_Or_Élégant from "/src/assets/French/L’Or Élégant.png"
import Noir_Absolu from "/src/assets/French/Noir Absolu.png"
import Ver_Noble from "/src/assets/French/Vert Noble.png"


const categories = ["All", "Attar", "Perfume", "Roll ONs", "French", "Arabia"];

const Attar = {
  attar1: {
    id: 1,
    attar_img: BlueWave,
    new_price: "$109",
    old_price: "$149",
    attar_name: "Fogg Blue Waver",
    dot_color: "#ad0527",
    car_badge: "#ad0527",
    category: "Attar",
    descp: "A fresh and cool attar inspired by oceanic notes for modern everyday wear."
  },
  attar2: {
    id: 2,
    attar_img: CrimsonSpice,
    new_price: "$119",
    old_price: "$159",
    attar_name: "Fogg Crimson Spice ",
    dot_color: "#ad0527",
    car_badge: "#ad0527",
    category: "Attar",
    descp: "Warm spicy notes blended to create a sensual and captivating aroma."
  },
  attar3: {
    id: 3,
    attar_img: EmeraldMush,
    new_price: "$109",
    old_price: "$149",
    attar_name: "Fogg Emerald Mush ",
    dot_color: "#ad0527",
    car_badge: "#ad0527",
    category: "Attar",
    descp: "Fresh green accords balanced with smooth musk for a naturally elegant scent."
  },
  attar4: {
    id: 4,
    attar_img: NoirIntense,
    new_price: "$125",
    old_price: "$175",
    attar_name: "Fogg Noir Intense ",
    dot_color: "#ad0527",
    car_badge: "#ad0527",
    category: "Attar",
    descp: "A dark, powerful attar with intense notes that leave a bold, lasting impression."
  },
  attar5: {
    id: 5,
    attar_img: PurpleAmber,
    new_price: "$199",
    old_price: "$301",
    attar_name: "Fogg Purple Amber ",
    dot_color: "#ad0527",
    car_badge: "#ad0527",
    category: "Attar",
    descp: "A smooth amber-rich fragrance with sweet undertones for a luxurious feel."
  },
  attar6: {
    id: 6,
    attar_img: RoyalOud,
    new_price: "$149",
    old_price: "$218",
    attar_name: "Fogg Royal Oud ",
    dot_color: "#ad0527",
    car_badge: "#ad0527",
    category: "Attar",
    descp: "A rich blend of deep oud notes crafted for a truly royal and timeless fragrance."
  },
  attar7: {
    id: 7,
    attar_img: WhiteOud,
    new_price: "$149",
    old_price: "$218",
    attar_name: "Fogg White Oud ",
    dot_color: "#ad0527",
    car_badge: "#ad0527",
    category: "Attar",
    descp: "A clean and refined oud fragrance with a soft, premium character."
  }

}

const RollOns = {
  r1: {
    id: 1,
    roll_img: blue_rollOn,
    roll_name: "Fresh Roll-On",
    descp: "Cool, crisp freshness that keeps you dry, fresh, and confident throughout the day.",
    dot_color: "#133569",
    car_badge: "#133569",
    new_price: "$109",
    old_price: "$149",
    category: "Roll On",
  },
  r2: {
    id: 2,
    roll_img: green_rollOn,
    roll_name: "Extreme Roll-On",
    descp: "A strong, refreshing scent with maximum sweat control for intense, high-energy days.",
    dot_color: "#133569",
    car_badge: "#133569",
    new_price: "$89",
    old_price: "$139",
    category: "Roll On",
  },
  r3: {
    id: 3,
    roll_img: orange_rollOn,
    roll_name: "Intense Roll-On",
    descp: "A bold, long-lasting fragrance designed for powerful presence and all-day protection.",
    dot_color: "#133569",
    car_badge: "#133569",
    new_price: "$125",
    old_price: "$169",
    category: "Roll On",
  },
  r4: {
    id: 4,
    roll_img: cyan_rollOn,
    roll_name: "Energy Roll-On",
    descp: "Instant freshness with an energizing burst that keeps you active and confident all day.",
    dot_color: "#133569",
    car_badge: "#133569",
    new_price: "$155",
    old_price: "$169",
    category: "Roll On",
  },
  r5: {
    id: 5,
    roll_img: red_rollOn,
    roll_name: "Spiced Roll-On",
    descp: "Warm spicy notes blended for a bold, masculine fragrance that stands out.",
    dot_color: "#133569",
    car_badge: "#133569",
    new_price: "$135",
    old_price: "$179",
    category: "Roll On",
  },
  r6: {
    id: 6,
    roll_img: purple_rollOn,
    roll_name: "Orea Roll-On",
    descp: "A smooth, premium scent with elegant notes for a refined and luxurious feel.",
    dot_color: "#133569",
    car_badge: "#133569",
    new_price: "$180",
    old_price: "$209",
    category: "Roll On",
  }
}

const perfumes = {
  p1: {
    id: 1,
    roll_img: var_green,
    roll_name: "Emerald Rush",
    descp: "A fresh, green scent bursting with vibrant notes for an instant rush of freshness.",
    dot_color: "#038271",
    car_badge: "#038271",
    new_price: "$48",
    old_price: "$89",
    category: "Perfumes",
  },
  p2: {
    id: 2,
    roll_img: var_blue,
    roll_name: "Aqua Storm",
    descp: "A powerful aquatic scent with cool, fresh notes inspired by ocean energy.",
    dot_color: "#038271",
    car_badge: "#038271",
    new_price: "$48",
    old_price: "$89",
    category: "Perfumes",
  },
  p3: {
    id: 3,
    roll_img: var_violet,
    roll_name: "Voilet Noir",
    descp: "A dark, elegant fragrance with smooth floral tones and a mysterious finish.",
    dot_color: "#038271",
    car_badge: "#038271",
    new_price: "$48",
    old_price: "$89",
    category: "Perfumes",
  },
  p4: {
    id: 4,
    roll_img: var_red,
    roll_name: "Crimson Royale",
    descp: "A rich, bold fragrance with warm spicy notes and a luxurious royal depth.",
    dot_color: "#038271",
    car_badge: "#038271",
    new_price: "$48",
    old_price: "$89",
    category: "Perfumes",
  },
  p5: {
    id: 5,
    roll_img: var_yellow,
    roll_name: "Golden Spark",
    descp: "A bright, energetic fragrance with fresh and radiant golden accords.",
    dot_color: "#038271",
    car_badge: "#038271",
    new_price: "$48",
    old_price: "$89",
    category: "Perfumes",
  },
  p6: {
    id: 6,
    roll_img: var_orange,
    roll_name: "Amber Blaze",
    descp: "A warm, intense amber scent infused with fiery notes for lasting impact.",
    dot_color: "#038271",
    car_badge: "#038271",
    new_price: "$48",
    old_price: "$89",
    category: "Perfumes",
  }
}

const Arabia = {
  a1: {
    id: 1,
    roll_img: Ambre_Royale,
    roll_name: "Ambre Royale",
    descp: "A rich amber fragrance with warm, luxurious notes and royal elegance.",
    dot_color: "#ad7c00",
    car_badge: "#ad7c00",
    new_price: "$89",
    old_price: "$119",
    category: "Arabia",
  },
  a2: {
    id: 2,
    roll_img: Nature_Supreme,
    roll_name: "Nature Supreme",
    descp: "A fresh, green fragrance inspired by nature with a clean and calming feel.",
    dot_color: "#ad7c00",
    car_badge: "#ad7c00",
    new_price: "$89",
    old_price: "$119",
    category: "Arabia",
  },
  a3: {
    id: 3,
    roll_img: Aqua_Crystal,
    roll_name: "Aqua Crystal",
    descp: "A crisp aquatic scent that delivers cool freshness and modern energy.",
    dot_color: "#ad7c00",
    car_badge: "#ad7c00",
    new_price: "$89",
    old_price: "$119",
    category: "Arabia",
  },
  a4: {
    id: 4,
    roll_img: Noir_instense,
    roll_name: "Noir instense",
    descp: "A bold, deep fragrance with intense notes for a powerful presence.",
    dot_color: "#ad7c00",
    car_badge: "#ad7c00",
    new_price: "$89",
    old_price: "$119",
    category: "Arabia",
  }
}

const French = {
  f1: {
    id: 1,
    roll_img: L_Or_Élégant,
    roll_name: "FOGG L’Or Élégant",
    descp: "A warm, rich fragrance with elegant golden notes that feel refined and luxurious.",
    dot_color: "#0096ad",
    car_badge: "#0096ad",
    new_price: "$175",
    old_price: "$219",
    category: "French",
  },
  f2: {
    id: 2,
    roll_img: Ver_Noble,
    roll_name: "FOGG Vert Noble",
    descp: "A clean, natural fragrance with green notes that feel calm and refreshing.",
    dot_color: "#0096ad",
    car_badge: "#0096ad",
    new_price: "$175",
    old_price: "$219",
    category: "French",
  },
  f3: {
    id: 3,
    roll_img: Bleu_Azur,
    roll_name: "FOGG Bleu Azur",
    descp: "A fresh aquatic scent inspired by cool ocean breezes and modern freshness.",
    dot_color: "#0096ad",
    car_badge: "#0096ad",
    new_price: "$175",
    old_price: "$219",
    category: "French",
  },
  f4:{
    id: 4,
    roll_img: Ambre_Précieux,
    roll_name: "FOGG Ambre Précieux",
    descp: "A warm, spicy amber fragrance with a smooth and luxurious finish.",
    dot_color: "#0096ad",
    car_badge: "#0096ad",
    new_price: "$175",
    old_price: "$219",
    category: "French",
  },
  f5:{
        id: 5,
    roll_img: Noir_Absolu,
    roll_name: "FOGG Noir Absolu",
    descp: "A deep, intense scent crafted for bold presence and lasting impact.",
    dot_color: "#0096ad",
    car_badge: "#0096ad",
    new_price: "$175",
    old_price: "$219",
    category: "French",
  }
}

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
          <input type="search" className='search_input' placeholder='Search Fragnances...' />
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
        {Object.values(Attar).map((attar, index) => {
          return (
            <FragnanceCard
              key={attar.id}
              fragImg={attar.attar_img}
              name={attar.attar_name}
              descp={attar.descp}
              newPrice={attar.new_price}
              oldPricw={attar.old_price}
              category={attar.category}
            />)
        })}
      </div>
    </div>
  )
}

export default Products