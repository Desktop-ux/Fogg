import React, { useLayoutEffect, useRef, useState } from 'react'
import "./ProductCard.css"
import gsap from 'gsap'
import red_card from "../../assets/Bottles/red-card.webp"
import green_card from "../../assets/Bottles/green-card.webp"
import blue_card from "../../assets/Bottles/blue-card.webp"
import orange_card from "../../assets/Bottles/orange-card.webp"
import violet_card from "../../assets/Bottles/purple-card.webp"
import yellow_card from "../../assets/Bottles/yellow-card.webp"

import red_swatch from "../../assets/Variants/var_red.jpg"
import green_swatch from "../../assets/Variants/var_green.jpg"
import blue_swatch from "../../assets/Variants/var_blue.jpg"
import orange_swatch from "../../assets/Variants/var_orange.jpg"
import violet_swatch from "../../assets/Variants/var_purple.jpg"
import yellow_swatch from "../../assets/Variants/var_yellow.jpg"

const variants = {
    red: {
        id: "red",
        cardimg: red_card,
        name: "Crimson Royale",
        accent: "#800000",
        badgeColor: "#a60712",
        price: "$299",
        oldPrice: "$399",
        discountLabel: "25% OFF",
        description:
            "Bold oriental fragrance with rich amber and vanilla notes. Perfect for evenings and special occasions.",
        swatchImg: red_swatch,

    },
    green: {
        id: "green",
        cardimg: green_card,
        name: "Emerald Rush",
        accent: "#05472A",
        badgeColor: "#07a63e",
        price: "$279",
        oldPrice: "$349",
        discountLabel: "20% OFF",
        description:
            "Fresh and invigorating scent with hints of citrus and green tea. Ideal for daily wear and casual outings.",
        swatchImg: green_swatch,
    },
    blue: {
        id: "blue",
        cardimg: blue_card,
        name: "Aqua Storm",
        accent: "#3B82F6",
        badgeColor: "#0856d4",
        price: "$319",
        oldPrice: "$399",
        discountLabel: "20% OFF",
        description:
            "Cool aquatic fragrance with notes of sea breeze and musk. Great for summer days and outdoor activities.",
        swatchImg: blue_swatch,
    },
    orange: {
        id: "orange",
        cardimg: orange_card,
        name: "Amber Blaze",
        accent: "#F97316",
        badgeColor: "#d45a08",
        price: "$289",
        oldPrice: "$359",
        discountLabel: "19% OFF",
        description:
            "Warm and spicy scent with undertones of cinnamon and clove. Suitable for autumn and winter seasons.",
        swatchImg: orange_swatch,
    },
    violet: {
        id: "violet",
        cardimg: violet_card,
        name: "Violet Noir",
        accent: "#8B5CF6",
        badgeColor: "#4f08a6",
        price: "$309",
        oldPrice: "$389",
        discountLabel: "21% OFF",
        description:
            "Elegant floral fragrance with hints of lavender and jasmine. Perfect for romantic evenings and special events.",
        swatchImg: violet_swatch,
    },
    yellow: {
        id: "yellow",
        cardimg: yellow_card,
        name: "Golden Spark",
        accent: "#CC7722",
        badgeColor: "#a66907",
        price: "$269",
        oldPrice: "$329",
        discountLabel: "18% OFF",
        description:
            "Bright and cheerful scent with notes of lemon and bergamot. Ideal for springtime and daytime wear.",
        swatchImg: yellow_swatch,
    },

}

const ProductCard = () => {
    const [activeId, setActiveId] = useState("red")
    const cardref = useRef(null)
    const detailsref = useRef(null)
 

    const currentVarient = variants[activeId];

    useLayoutEffect(() => {
        if (!cardref.current || !detailsref.current) return;

        const ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.fromTo(
                cardref.current,
                { autoAlpha: 0, y: 40, scale: 0.9 },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "power3.out",
                }
            ,"a")
            t1.fromTo(
                detailsref.current,
                {
                    autoAlpha: 0,
                    x: 20,
                },
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power3.out",
                }
                 , "a"
            )
        }, cardref)
        return () => ctx.revert();
    }, [activeId]);
 

    const handleSelect = (id, e) => {
        if (id === activeId) return;
        // optional GSAP animation here
        const dot = e.currentTarget;

        // small press / bounce on picker
        gsap.fromTo(
            dot,
            { scale: 0.85 },
            { scale: 1, duration: 0.35, ease: "back.out(2)" }
        );

        setActiveId(id);
    };

    return (
        <div className='card'  style={{ "--accent": currentVarient.accent, "--badge-bg": currentVarient.badgeColor, }} >
            <div className="product" ref={cardref}>
                <img src={currentVarient.cardimg} alt={currentVarient.name} loading='eager'/>
            </div>
            <div className="product_details"  >
                <div className="details" ref={detailsref}>
                    <h2>{currentVarient.name}</h2>
                <p>{currentVarient.description}</p>
                <div className="price">
                    <p>{currentVarient.price}</p>
                    <span>{currentVarient.oldPrice}</span>
                    <div className="discount">{currentVarient.discountLabel}</div>
                </div>
                </div>
                
                <div className="select">
                    <p>Select Fragnance</p>
                    <div className="color_picker">
                        {Object.values(variants).map((v) => (
                            <div
                                key={v.id}
                                className={`color-dot ${v.id === activeId ? "active" : ""}`}
                                style={{ "--swatch-img": `url(${v.swatchImg})` }}
                                onClick={(e) => handleSelect(v.id, e)}
                            />
                        ))}
                    </div>
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