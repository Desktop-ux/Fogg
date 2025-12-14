import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const obj = { val: 0 };

    const tween = gsap.to(obj, {
      val: end,
      duration,
      ease: "power1.out",
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 80%",
        // once: true,
        
      },
      onUpdate: () => {
        setCount(Math.floor(obj.val));
      },
    });

    return () => {
      tween.kill();
    };
  }, [end, duration]);

  return <span ref={counterRef}>{count}K+</span>;
}
