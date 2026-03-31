import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Navbar.css";
import about from "../assets/f1.png";

gsap.registerPlugin(ScrollTrigger);

function Body() {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const showcaseRef = useRef(null);
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

      const revealItems = revealTextRef.current?.querySelectorAll(".reveal-item");

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top top",
          end: "+=95%",
          scrub: 1.15,
          pin: true,
          anticipatePin: 1,
        },
        defaults: {
          ease: "power3.inOut",
        },
      });

      heroTimeline
        .to(
          imgRef.current,
          {
            width: "40vw",
            maxWidth: "480px",
            xPercent: -34,
            yPercent: 2,
            scale: 0.78,
            transformOrigin: "center center",
          },
          0
        )
        .to(
          revealTextRef.current,
          {
            autoAlpha: 1,
            x: 0,
          },
          0
        )
        .fromTo(
          revealItems,
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.06,
          },
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

      <section ref={showcaseRef} className="hero-showcase">
        <div className="hero-stage">
          <img
            ref={imgRef}
            src={about}
            alt="Formula 1"
            className="hero-img"
          />

          <div ref={revealTextRef} className="hero-reveal">
            <p className="hero-kicker reveal-item">Speed Reframed</p>
            <h2 className="hero-heading reveal-item">
              The car moves. The story appears.
            </h2>
            <p className="hero-copy reveal-item">
              Formula 1 is speed, pressure, and precision revealed in a single motion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
