import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [hoverStyle, setHoverStyle] = useState({});
  const linksRef = useRef([]);

  // Update underline position for active link on load/route change
  useEffect(() => {
    const activeIndex = linksRef.current.findIndex(
      (link) => link.getAttribute("data-path") === activePath
    );
    moveUnderlineTo(activeIndex);
  }, [activePath]);

  const moveUnderlineTo = (index) => {
    const link = linksRef.current[index];
    if (link) {
      const rect = link.getBoundingClientRect();
      const parentRect = link.parentElement.getBoundingClientRect();
      setHoverStyle({
        width: `${rect.width}px`,
        left: `${rect.left - parentRect.left}px`,
      });
    }
  };

  const handleMouseEnter = (index) => {
    moveUnderlineTo(index);
  };

  const handleMouseLeave = () => {
    const activeIndex = linksRef.current.findIndex(
      (link) => link.getAttribute("data-path") === activePath
    );
    moveUnderlineTo(activeIndex);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="FOGG Logo" />
      </div>

      {/* Links */}
      <div className="links" onMouseLeave={handleMouseLeave}>
        <div className="underline" style={hoverStyle}></div>
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About Us" },
          { path: "/services", label: "Products" },
          { path: "/login", label: "Log In" },
          { path: "/wishlist", label: "Wishlist" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            data-path={item.path}
            ref={(el) => (linksRef.current[index] = el)}
            onClick={() => setActivePath(item.path)}
            onMouseEnter={() => handleMouseEnter(index)}
            className={`link ${activePath === item.path ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Cart */}
      <div className="cart">
        <p>
          <i className="fa-solid fa-cart-shopping"></i> Cart
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
