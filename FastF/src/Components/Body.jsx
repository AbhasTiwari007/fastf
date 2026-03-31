import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Navbar.css";
import about from "../assets/f1.png";

gsap.registerPlugin(ScrollTrigger);

function Body() {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const revealTextRef = useRef(null);

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

      // Image shrinks and supporting text appears during scroll
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".image-text-row",
          start: "top 70%",
          end: "+=500",
          scrub: 1.2,
        },
      });

      timeline
        .to(
          imgRef.current,
          {
            scale: 0.7,
            x: -180,
            transformOrigin: "center center",
            ease: "none",
          },
          0
        )
        .fromTo(
          revealTextRef.current,
          { autoAlpha: 0, x: 90 },
          { autoAlpha: 1, x: 0, ease: "none" },
          0
        );
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

      <div className="image-section">
        <div className="image-text-row">
          <img
            ref={imgRef}
            src={about}
            alt="Formula 1"
            className="hero-img"
            style={{ borderRadius: "30px" }}
          />

          <div ref={revealTextRef} className="scroll-reveal-text">
            <h2 className="text-gradient">The speed. The drama. The precision.</h2>
            <p>
              As the car comes into focus, the story behind Formula 1 appears:
              engineering, rivalry, and relentless performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
