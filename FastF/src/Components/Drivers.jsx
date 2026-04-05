import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Drivers.css";
import alexAlbonPhoto from "../assets/Alex Albon.png";
import carlosSainzPhoto from "../assets/Carlos Saniz.png";
import charlesLeclercPhoto from "../assets/Charles Leclerc.png";
import estebanOconPhoto from "../assets/Esteban Ocon.png";
import francoColapintoPhoto from "../assets/Franco Colapinto.png";
import georgeRussellPhoto from "../assets/George Russell.png";
import kimiAntonelliPhoto from "../assets/Kimi Antonelli.png";
import landoNorrisPhoto from "../assets/Lando Norris.png";
import lewisHamiltonPhoto from "../assets/Lewis Hamilton.png";
import lanceStrollPhoto from "../assets/Lance Stroll.png";
import maxVerstappenPhoto from "../assets/Max Verstappen.png";
import oliverBearmanPhoto from "../assets/Oli Bearman.png";
import oscarPiastriPhoto from "../assets/Oscar Piastri.png";
import pierreGaslyPhoto from "../assets/Pieere Gasly.png";
import fernandoAlonsoPhoto from "../assets/Fernando Alonso.png";

gsap.registerPlugin(ScrollTrigger);

const drivers = [
  {
    slug: "max-verstappen",
    firstName: "Max",
    lastName: "Verstappen",
    number: "1",
    nationality: "Dutch",
    countryCode: "NL",
    titles: "4 WDC",
    age: "28",
    accent: "#3152ff",
    image: maxVerstappenPhoto,
    about:
      "Max Verstappen is Red Bull Racing's benchmark driver, combining relentless race pace with title-winning consistency at the very top of the grid.",
  },
  {
    slug: "charles-leclerc",
    firstName: "Charles",
    lastName: "Leclerc",
    number: "16",
    nationality: "Monegasque",
    countryCode: "MC",
    titles: "0 WDC",
    age: "27",
    accent: "#ff1847",
    image: charlesLeclercPhoto,
    about:
      "Charles Leclerc is Ferrari's Monegasque star, known for explosive qualifying speed, sharp racecraft, and his central role in the Scuderia's future.",
  },
  {
    slug: "lewis-hamilton",
    firstName: "Lewis",
    lastName: "Hamilton",
    number: "44",
    nationality: "British",
    countryCode: "GB",
    titles: "7 WDC",
    age: "41",
    accent: "#ff2f46",
    image: lewisHamiltonPhoto,
    about:
      "Lewis Hamilton brings seven world titles, elite experience, and relentless race intelligence as he begins a new chapter in Ferrari red.",
  },
  {
    slug: "lando-norris",
    firstName: "Lando",
    lastName: "Norris",
    number: "4",
    nationality: "British",
    countryCode: "GB",
    titles: "0 WDC",
    age: "26",
    accent: "#ff9a16",
    image: landoNorrisPhoto,
    about:
      "Lando Norris has grown into McLaren's leading force, pairing natural speed with sharper race execution as he pushes for championship contention.",
  },
  {
    slug: "oscar-piastri",
    firstName: "Oscar",
    lastName: "Piastri",
    number: "81",
    nationality: "Australian",
    countryCode: "AU",
    titles: "0 WDC",
    age: "25",
    accent: "#ff9a16",
    image: oscarPiastriPhoto,
    about:
      "Oscar Piastri is one of Formula 1's calmest young talents, blending precision and maturity with the pace to challenge at the front.",
  },
  {
    slug: "george-russell",
    firstName: "George",
    lastName: "Russell",
    number: "63",
    nationality: "British",
    countryCode: "GB",
    titles: "0 WDC",
    age: "28",
    accent: "#00d6ca",
    image: georgeRussellPhoto,
    about:
      "George Russell leads Mercedes into its next phase, carrying the responsibility of front-running expectations with measured aggression and speed.",
  },
  {
    slug: "kimi-antonelli",
    firstName: "Kimi",
    lastName: "Antonelli",
    number: "12",
    nationality: "Italian",
    countryCode: "IT",
    titles: "0 WDC",
    age: "19",
    accent: "#00d6ca",
    image: kimiAntonelliPhoto,
    about:
      "Kimi Antonelli arrives in Formula 1 with huge expectations, carrying Mercedes-backed potential and standout junior-category promise.",
  },
  {
    slug: "alex-albon",
    firstName: "Alex",
    lastName: "Albon",
    number: "23",
    nationality: "Thai-British",
    countryCode: "TH",
    titles: "0 WDC",
    age: "30",
    accent: "#2e78ff",
    image: alexAlbonPhoto,
    about:
      "Alex Albon has become Williams' key reference point, extracting strong performances and consistency from a team rebuilding its momentum.",
  },
  {
    slug: "carlos-sainz",
    firstName: "Carlos",
    lastName: "Sainz",
    number: "55",
    nationality: "Spanish",
    countryCode: "ES",
    titles: "0 WDC",
    age: "31",
    accent: "#2e78ff",
    image: carlosSainzPhoto,
    about:
      "Carlos Sainz brings proven race-winning pedigree, technical clarity, and calm under pressure as he strengthens the Williams lineup.",
  },
  {
    slug: "esteban-ocon",
    firstName: "Esteban",
    lastName: "Ocon",
    number: "31",
    nationality: "French",
    countryCode: "FR",
    titles: "0 WDC",
    age: "29",
    accent: "#ff1f49",
    image: estebanOconPhoto,
    about:
      "Esteban Ocon is a tough, uncompromising racer whose experience and resilience make him a strong anchor for Haas' evolving project.",
  },
  {
    slug: "oliver-bearman",
    firstName: "Oliver",
    lastName: "Bearman",
    number: "87",
    nationality: "British",
    countryCode: "GB",
    titles: "0 WDC",
    age: "21",
    accent: "#ff1f49",
    image: oliverBearmanPhoto,
    about:
      "Oliver Bearman is one of the most exciting young British prospects, stepping into Formula 1 with speed, confidence, and strong Ferrari-linked credentials.",
  },
  {
    slug: "franco-colapinto",
    firstName: "Franco",
    lastName: "Colapinto",
    number: "43",
    nationality: "Argentine",
    countryCode: "AR",
    titles: "0 WDC",
    age: "23",
    accent: "#2aa7ff",
    image: francoColapintoPhoto,
    about:
      "Franco Colapinto brings fresh energy and fearless attacking instincts, giving Alpine another promising young name to build around.",
  },
  {
    slug: "pierre-gasly",
    firstName: "Pierre",
    lastName: "Gasly",
    number: "10",
    nationality: "French",
    countryCode: "FR",
    titles: "0 WDC",
    age: "30",
    accent: "#2aa7ff",
    image: pierreGaslyPhoto,
    about:
      "Pierre Gasly combines experience, pace, and race-winning pedigree as a dependable lead figure within Alpine's Formula 1 effort.",
  },
  {
    slug: "fernando-alonso",
    firstName: "Fernando",
    lastName: "Alonso",
    number: "14",
    nationality: "Spanish",
    countryCode: "ES",
    titles: "2 WDC",
    age: "44",
    accent: "#008e84",
    image: fernandoAlonsoPhoto,
    about:
      "Fernando Alonso remains one of Formula 1's sharpest competitors, combining vast experience, race intelligence, and relentless hunger at Aston Martin.",
  },
  {
    slug: "lance-stroll",
    firstName: "Lance",
    lastName: "Stroll",
    number: "18",
    nationality: "Canadian",
    countryCode: "CA",
    titles: "0 WDC",
    age: "27",
    accent: "#008e84",
    image: lanceStrollPhoto,
    about:
      "Lance Stroll brings experience, strong wet-weather ability, and long-term continuity as part of Aston Martin's current driver pairing.",
  },
];

function Drivers() {
  const sectionRef = useRef(null);
  const [openDriver, setOpenDriver] = useState("charles-leclerc");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerItems = sectionRef.current?.querySelectorAll(".drivers-reveal");
      const cards = sectionRef.current?.querySelectorAll(".driver-card");

      if (headerItems?.length) {
        gsap.fromTo(
          headerItems,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.14,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (cards?.length) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 56 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".drivers-grid",
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="drivers-section">
      <div className="drivers-header">
        <p className="drivers-kicker drivers-reveal">Driver Lineup</p>
        <h2 className="drivers-title drivers-reveal">Champions, Challengers, Icons</h2>
        <p className="drivers-copy drivers-reveal">
          A featured look at some of the names shaping the current Formula 1 grid.
        </p>
      </div>

      <div className="drivers-grid">
        {drivers.map((driver) => {
          const isOpen = openDriver === driver.slug;

          return (
            <article
              key={driver.slug}
              className={`driver-card ${isOpen ? "driver-card-open" : ""}`}
              style={{ "--driver-accent": driver.accent }}
            >
              <div className="driver-accent"></div>

              <div className="driver-card-top">
                <span className="driver-number">{driver.number}</span>
              </div>

              <div className="driver-photo-wrap">
                <img src={driver.image} alt={driver.firstName + " " + driver.lastName} className="driver-photo" />
              </div>

              <div className="driver-info">
                <h3>{driver.firstName}</h3>
                <p>{driver.lastName}</p>
              </div>

              <div className="driver-stats-row">
                <div className="driver-stat-box">
                  <span>Nationality</span>
                  <strong>{driver.nationality}</strong>
                  <small>{driver.countryCode}</small>
                </div>

                <div className="driver-stat-box">
                  <span>Titles</span>
                  <strong>{driver.titles}</strong>
                </div>

                <div className="driver-stat-box">
                  <span>Age</span>
                  <strong>{driver.age}</strong>
                </div>
              </div>

              <button
                type="button"
                className="driver-about-toggle"
                onClick={() => setOpenDriver((current) => (current === driver.slug ? "" : driver.slug))}
                aria-expanded={isOpen}
              >
                <span>About</span>
                <span className={`driver-toggle-arrow ${isOpen ? "driver-toggle-arrow-open" : ""}`}>
                  v
                </span>
              </button>

              {isOpen && <div className="driver-about-panel">{driver.about}</div>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Drivers;
