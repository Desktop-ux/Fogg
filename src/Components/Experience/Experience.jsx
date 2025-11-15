import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Experience.css";

// ✅ Import your images and videos here
import mockup2 from "/src/assets/images/mockup2.png";
import mockup3 from "/src/assets/images/mockup3.png";
import fogg1 from "/src/assets/images/fogg_1.mp4";
import fogg2 from "/src/assets/images/fogg2.mp4";

const Experience = () => {
  const boxRefs = useRef([]);

  // Floating animation
  useEffect(() => {
    boxRefs.current.forEach((box, i) => {
      gsap.to(box, {
        y: -20,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  // Hover logic
  const handleHover = (index, isHover) => {
    const box = boxRefs.current[index];
    const video = box.querySelector("video");
    const image = box.querySelector("img");

    if (isHover) {
      gsap.to(box, {
        scale: 1.05,
        rotationX: 12,
        rotationY: -8,
        ease: "power3.out",
        duration: 0.6,
      });

      // Fade image out, video in
      gsap.to(image, { opacity: 0, duration: 0.25, ease: "power2.out" });
      gsap.to(video, { opacity: 1, duration: 0.25, ease: "power2.out" });

      video.play();
    } else {
      gsap.to(box, {
        scale: 1,
        rotationX: 8,
        rotationY: -15,
        ease: "power3.out",
        duration: 0.8,
      });

      // Fade video out, image in
      gsap.to(video, { opacity: 0, duration: 0.5, ease: "power2.out" });
      gsap.to(image, { opacity: 1, duration: 0.6, ease: "power2.out" });

      video.pause();
      video.currentTime = 0;
    }
  };

  // ✅ Define your assets in an array for easy control
  const boxes = [
    { image: mockup2, video: fogg1 },
    { image: mockup3, video: fogg2 },
  ];

  return (
    <div className="exp">
      <div className="exp-heading">
        <button className="elite">Elite Edition</button>
        <h1>Experience</h1>
        <h2>Luxury</h2>
        <p>Immerse yourself in the artistry of our elite Fogg fragnance</p>
      </div>

      <div className="video-wrapper">
        {boxes.map((box, i) => (
          <div
            key={i}
            ref={(el) => (boxRefs.current[i] = el)}
            className="float-box"
            onMouseEnter={() => handleHover(i, true)}
            onMouseLeave={() => handleHover(i, false)}
          >
            {/* Image */}
            <img src={box.image} alt="Fogg Product" className="box-image" />

            {/* Video */}
            <video
              src={box.video}
              muted
              loop
              preload="auto"
              className="box-video"
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
