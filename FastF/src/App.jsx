import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./Components/Navbar";
import "./App.css";
import Body from "./Components/Body";
import TeamCard from "./Components/Teams";
import Drivers from "./Components/Drivers";
import alpineLogo from "./assets/Alpine.png";
import ferrariLogo from "./assets/Ferrari.png";
import redBullLogo from "./assets/Red bull.png";
import mercedesLogo from "./assets/Mercedes.png";
import haasLogo from "./assets/Haas.png";
import racingBullsLogo from "./assets/Racing bull.png";
import audiLogo from "./assets/Audi.png";
import cadillacLogo from "./assets/Cadillac.png";
import williamsLogo from "./assets/Williams.png";
import mclarenLogo from "./assets/Mclaren.png";
import astonMartinLogo from "./assets/Aston Martin.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const teamsHeaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!teamsHeaderRef.current) return;

      gsap.fromTo(
        teamsHeaderRef.current.children,
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: ".teams-section",
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg">
      <Navbar />
      <Body />

      <section className="teams-section">
        <div ref={teamsHeaderRef} className="teams-header teams-header-centered">
          <p className="teams-kicker">The Grid</p>
          <h2 className="teams-title">Meet The Formula 1 Teams</h2>
          <p className="teams-copy">
            Explore the full paddock, from historic giants to the newest challengers,
            in one horizontally scrolling lineup.
          </p>
        </div>

        <div className="teams-scroll">
          <TeamCard
            name="BWT Alpine F1 Team"
            description="Bleu de France spirit, BWT pink ambition, rising higher every race weekend."
            logo={alpineLogo}
            bg="linear-gradient(180deg, #08233a 0%, #031a2b 100%)"
            origin="Enstone, England"
            legacy="3 Constructors' Championships"
          />

          <TeamCard
            name="Scuderia Ferrari"
            description="Iconic design, relentless pace, and race-day intensity every weekend."
            logo={ferrariLogo}
            bg="linear-gradient(180deg, #141414 0%, #0b0b0b 100%)"
            origin="Maranello, Italy"
            legacy="16 Constructors' Championships"
          />

          <TeamCard
            name="Oracle Red Bull Racing"
            description="Four-time reigning champions, led by Verstappen as he hunts a fifth title."
            logo={redBullLogo}
            bg="linear-gradient(180deg, #081131 0%, #04081a 100%)"
            origin="Milton Keynes, England"
            legacy="6 Constructors' Championships"
          />

          <TeamCard
            name="Mercedes AMG"
            description="Eight-time constructors' champions now rebuilding around Russell and rookie Antonelli."
            logo={mercedesLogo}
            bg="linear-gradient(180deg, #041616 0%, #010909 100%)"
            origin="Brackley, England"
            legacy="8 Constructors' Championships"
          />

          <TeamCard
            name="MoneyGram Haas F1 Team"
            description="America's F1 team. Fresh 2025 lineup with Ocon and rookie Bearman."
            logo={haasLogo}
            bg="linear-gradient(180deg, #151515 0%, #0c0c0c 100%)"
            origin="Kannapolis, USA"
            legacy="0 Constructors' Championships"
          />

          <TeamCard
            name="Visa Cash App Racing Bulls"
            description="Red Bull's junior team. Hadjar and Lawson carry the baton in 2025."
            logo={racingBullsLogo}
            bg="linear-gradient(180deg, #060919 0%, #020511 100%)"
            origin="Faenza, Italy"
            legacy="0 Constructors' Championships"
          />

          <TeamCard
            name="Audi F1 Team"
            description="Titanium, carbon black and Lava Red. Germany's works team debut, targeting championships by 2030."
            logo={audiLogo}
            bg="linear-gradient(180deg, #161616 0%, #0b0b0b 100%)"
            origin="Hinwil, Switzerland"
            legacy="Debut in 2026"
          />

          <TeamCard
            name="Cadillac F1 Team"
            description="America's F1 team. Split black-and-white livery, Ferrari power, and two veterans returning to the grid."
            logo={cadillacLogo}
            bg="linear-gradient(180deg, #171717 0%, #101010 100%)"
            origin="Banbury, England"
            legacy="Debut in 2026"
          />

          <TeamCard
            name="Williams Racing"
            description="F1's most storied privateer. Albon and Sainz lead a resurgent charge."
            logo={williamsLogo}
            bg="linear-gradient(180deg, #061a31 0%, #051423 100%)"
            origin="Grove, England"
            legacy="9 Constructors' Championships"
          />

          <TeamCard
            name="McLaren"
            description="Reigning constructors' champions. Norris and Piastri lead F1's most in-form team."
            logo={mclarenLogo}
            bg="linear-gradient(180deg, #171717 0%, #101010 100%)"
            origin="Woking, England"
            legacy="9 Constructors' Championships"
          />

          <TeamCard
            name="Aston Martin"
            description="British racing green icons, now with Adrian Newey building toward 2026."
            logo={astonMartinLogo}
            bg="linear-gradient(180deg, #021a10 0%, #011209 100%)"
            origin="Silverstone, England"
            legacy="1 Constructors' Championship"
          />
        </div>
      </section>

      <Drivers />
    </div>
  );
}

export default App;
