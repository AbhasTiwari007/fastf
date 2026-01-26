import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Navbar.css";
import about from "../assets/f1.png";

gsap.registerPlugin(ScrollTrigger);

function Body() {
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TEXT SPLIT ANIMATION
      const chars = titleRef.current.querySelectorAll(".char");

      gsap.fromTo(
        chars,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.05,
        }
      );

      // TEXT FADE
      gsap.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 2, delay: 0.75 });
      gsap.fromTo(".text1", { opacity: 0 }, { opacity: 1, duration: 2, delay: 1 });

      // IMAGE SCROLL MINIMIZE
      gsap.to(imgRef.current, {
     scale: 0.5,
  transformOrigin: "right center",
  scrollTrigger: {
    trigger: imgRef.current,
    start: "top center",
    end: "bottom top",
    scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="body" >
      <h1 ref={titleRef}>
        {"Formula 1".split("").map((char, i) => (
          <span key={i} className="char text-gradient">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <p className="text">This, is no ordinary sport.</p>
      <p className="text1">THIS IS FORMULA 1.</p>
    <div style={{display:"flex"}}>
      <img
        ref={imgRef}
        src={about}
        alt="Formula 1"
        className="hero-img"
        style={{borderRadius:"30px"}}
      />
    </div>
    </div>
  );
}

export default Body;
