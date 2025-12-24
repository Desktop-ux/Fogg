import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./StaggeredNavbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Log In", path: "/login" },
  { name: "Wishlist", path: "/wishlist" },
];

const StaggeredNavbar = () => {
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.set(menuRef.current, { height: 0, opacity: 0 });
    gsap.set(itemsRef.current, { y: 40, opacity: 0 });
  }, []);

  const openMenu = () => {
    setOpen(true);

    gsap.to(menuRef.current, {
      height: "100vh",
      opacity: 1,
      duration: 0.6,
      ease: "power3.inOut",
    });

    gsap.to(itemsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.12,
      delay: 0.2,
      ease: "power3.out",
    });
  };

  const closeMenu = () => {
    gsap.to(itemsRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.08,
      ease: "power3.in",
    });

    gsap.to(menuRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.4,
      delay: 0.2,
      ease: "power3.inOut",
      onComplete: () => setOpen(false),
    });
  };

  return (
    <>
      <button className="nav-btn" onClick={open ? closeMenu : openMenu}>
        {open ? "Close ✕" : "Menu ☰"}
      </button>

      <nav className="nav-overlay" ref={menuRef}>
        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              ref={(el) => (itemsRef.current[index] = el)}
              className="nav-item"
              onClick={closeMenu}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default StaggeredNavbar;
