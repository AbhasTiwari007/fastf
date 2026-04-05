import React from "react";
import "./Teams.css";
import ferrariLogo from "../assets/Ferrari.png";
import alpineLogo from "../assets/Alpine.png";
import redBullLogo from "../assets/Red bull.png";
import mercedesLogo from "../assets/Mercedes.png";
import haasLogo from "../assets/Haas.png";
import racingBullsLogo from "../assets/Racing bull.png";
import audiLogo from "../assets/Audi.png";
import cadillacLogo from "../assets/Cadillac.png";
import williamsLogo from "../assets/Williams.png";
import mclarenLogo from "../assets/Mclaren.png";
import astonMartinLogo from "../assets/Aston Martin.png";

const TeamCard = ({ name, description, logo, bg, origin, legacy }) => {
  const isFerrari = name?.toLowerCase().includes("ferrari");
  const isAlpine = name?.toLowerCase().includes("alpine");
  const isRedBull = name?.toLowerCase().includes("red bull");
  const isMercedes = name?.toLowerCase().includes("mercedes");
  const isHaas = name?.toLowerCase().includes("haas");
  const isRacingBulls = name?.toLowerCase().includes("racing bulls");
  const isAudi = name?.toLowerCase().includes("audi");
  const isCadillac = name?.toLowerCase().includes("cadillac");
  const isWilliams = name?.toLowerCase().includes("williams");
  const isMclaren = name?.toLowerCase().includes("mclaren");
  const isAstonMartin = name?.toLowerCase().includes("aston martin");
  const ferrariGradient = "linear-gradient(180deg, #141414 0%, #0b0b0b 100%)";
  const alpineGradient = "linear-gradient(180deg, #08233a 0%, #031a2b 100%)";
  const redBullGradient = "linear-gradient(180deg, #071030 0%, #03091e 100%)";
  const mercedesGradient = "linear-gradient(180deg, #041414 0%, #010909 100%)";
  const haasGradient = "linear-gradient(180deg, #151515 0%, #0c0c0c 100%)";
  const racingBullsGradient = "linear-gradient(180deg, #060919 0%, #020511 100%)";
  const audiGradient = "linear-gradient(180deg, #161616 0%, #0b0b0b 100%)";
  const cadillacGradient = "linear-gradient(180deg, #171717 0%, #101010 100%)";
  const williamsGradient = "linear-gradient(180deg, #061a31 0%, #051423 100%)";
  const mclarenGradient = "linear-gradient(180deg, #171717 0%, #101010 100%)";
  const astonMartinGradient = "linear-gradient(180deg, #021a10 0%, #011209 100%)";
  const cardBackground = isFerrari
    ? ferrariGradient
    : isAlpine
      ? alpineGradient
      : isRedBull
        ? redBullGradient
        : isMercedes
          ? mercedesGradient
          : isHaas
            ? haasGradient
            : isRacingBulls
              ? racingBullsGradient
              : isAudi
                ? audiGradient
                : isCadillac
                  ? cadillacGradient
                  : isWilliams
                    ? williamsGradient
                    : isMclaren
                      ? mclarenGradient
                      : isAstonMartin
                        ? astonMartinGradient
          : bg;
  const displayLogo = isFerrari
    ? ferrariLogo
    : isAlpine
      ? alpineLogo
      : isRedBull
        ? redBullLogo
        : isMercedes
          ? mercedesLogo
          : isHaas
            ? haasLogo
            : isRacingBulls
              ? racingBullsLogo
              : isAudi
                ? audiLogo
                : isCadillac
                  ? cadillacLogo
                  : isWilliams
                    ? williamsLogo
                    : isMclaren
                      ? mclarenLogo
                      : isAstonMartin
                        ? astonMartinLogo
          : logo;

  if (isFerrari) {
    return (
      <div className="team-card team-card-ferrari" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>

        <div className="team-card-top team-card-top-ferrari">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Est. 1950</span>
        </div>

        <div className="team-card-divider"></div>

        <div className="team-card-main team-card-main-ferrari">
          <div className="team-logo-wrap team-logo-wrap-ferrari">
            <div className="team-logo team-logo-ferrari">
              <img src={displayLogo} alt={name} />
            </div>
          </div>

          <div className="team-info team-info-ferrari">
            <span className="team-eyebrow">Scuderia</span>
            <h2>Ferrari</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="team-driver-row">
          <div className="team-driver-card">
            <strong>16</strong>
            <div>
              <span>Charles Leclerc</span>
              <small>Driver</small>
            </div>
          </div>

          <div className="team-driver-card">
            <strong>44</strong>
            <div>
              <span>Lewis Hamilton</span>
              <small>Driver</small>
            </div>
          </div>
        </div>

        <div className="team-stats-row">
          <div className="team-stat">
            <strong>16</strong>
            <span>Constructors</span>
          </div>

          <div className="team-stat">
            <strong>15</strong>
            <span>Drivers' Titles</span>
          </div>

          <div className="team-stat">
            <strong>243</strong>
            <span>Race Wins</span>
          </div>
        </div>

        <div className="team-card-footer">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://www.ferrari.com/en-EN/formula1" className="team-footer-cta">
            Scuderia Ferrari HP
          </a>
        </div>
      </div>
    );
  }

  if (isAlpine) {
    return (
      <div className="team-card team-card-alpine" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>

        <div className="team-card-top team-card-top-alpine">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Est. 2021</span>
        </div>

        <div className="team-card-divider team-card-divider-alpine"></div>

        <div className="team-card-main team-card-main-alpine">
          <div className="team-logo-wrap team-logo-wrap-alpine">
            <div className="team-logo team-logo-alpine">
              <img src={displayLogo} alt={name} />
            </div>
          </div>

          <div className="team-info team-info-alpine">
            <span className="team-eyebrow team-eyebrow-alpine">BWT</span>
            <h2>Alpine F1 Team</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="team-driver-row team-driver-row-alpine">
          <div className="team-driver-card team-driver-card-alpine">
            <strong>10</strong>
            <div>
              <span>Pierre Gasly</span>
              <small>Driver</small>
            </div>
          </div>

          <div className="team-driver-card team-driver-card-alpine">
            <strong>43</strong>
            <div>
              <span>Franco Colapinto</span>
              <small>Driver</small>
            </div>
          </div>
        </div>

        <div className="team-stats-row team-stats-row-alpine">
          <div className="team-stat team-stat-alpine">
            <strong>3</strong>
            <span>Constructors</span>
          </div>

          <div className="team-stat team-stat-alpine">
            <strong>4</strong>
            <span>Drivers' Titles</span>
          </div>

          <div className="team-stat team-stat-alpine">
            <strong>51</strong>
            <span>Race Wins</span>
          </div>
        </div>

        <div className="team-card-footer team-card-footer-alpine">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://www.alpine-cars.co.uk/formula-1.html" className="team-footer-cta team-footer-cta-alpine">
            Rise Higher
          </a>
        </div>
      </div>
    );
  }

  if (isRedBull) {
    return (
      <div className="team-card team-card-redbull" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>

        <div className="team-card-top team-card-top-redbull">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Est. 2005</span>
        </div>

        <div className="team-card-divider team-card-divider-redbull"></div>

        <div className="team-card-main team-card-main-redbull">
          <div className="team-logo-wrap team-logo-wrap-redbull">
            <div className="team-logo team-logo-redbull">
              <img src={displayLogo} alt={name} />
            </div>
          </div>

          <div className="team-info team-info-redbull">
            <span className="team-eyebrow team-eyebrow-redbull">Oracle</span>
            <h2>Red Bull Racing</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="team-driver-row team-driver-row-redbull">
          <div className="team-driver-card team-driver-card-redbull">
            <strong>1</strong>
            <div>
              <span>Max Verstappen</span>
              <small>Driver</small>
            </div>
          </div>

          <div className="team-driver-card team-driver-card-redbull">
            <strong>22</strong>
            <div>
              <span>Yuki Tsunoda</span>
              <small>Driver</small>
            </div>
          </div>
        </div>

        <div className="team-stats-row team-stats-row-redbull">
          <div className="team-stat team-stat-redbull">
            <strong>6</strong>
            <span>Constructors</span>
          </div>

          <div className="team-stat team-stat-redbull">
            <strong>5</strong>
            <span>Drivers' Titles</span>
          </div>

          <div className="team-stat team-stat-redbull">
            <strong>119</strong>
            <span>Race Wins</span>
          </div>
        </div>

        <div className="team-card-footer team-card-footer-redbull">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://www.redbullracing.com/int-en" className="team-footer-cta team-footer-cta-redbull">
            Oracle RBR
          </a>
        </div>
      </div>
    );
  }

  if (isMercedes) {
    return (
      <div className="team-card team-card-mercedes" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>

        <div className="team-card-top team-card-top-mercedes">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Est. 1954</span>
        </div>

        <div className="team-card-divider team-card-divider-mercedes"></div>

        <div className="team-card-main team-card-main-mercedes">
          <div className="team-logo-wrap team-logo-wrap-mercedes">
            <div className="team-logo team-logo-mercedes">
              <img src={displayLogo} alt={name} />
            </div>
          </div>

          <div className="team-info team-info-mercedes">
            <span className="team-eyebrow team-eyebrow-mercedes">Silver Arrows</span>
            <h2>Mercedes AMG</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="team-driver-row team-driver-row-mercedes">
          <div className="team-driver-card team-driver-card-mercedes">
            <strong>63</strong>
            <div>
              <span>George Russell</span>
              <small>Driver</small>
            </div>
          </div>

          <div className="team-driver-card team-driver-card-mercedes">
            <strong>12</strong>
            <div>
              <span>Kimi Antonelli</span>
              <small>Driver</small>
            </div>
          </div>
        </div>

        <div className="team-stats-row team-stats-row-mercedes">
          <div className="team-stat team-stat-mercedes">
            <strong>8</strong>
            <span>Constructors</span>
          </div>

          <div className="team-stat team-stat-mercedes">
            <strong>7</strong>
            <span>Drivers' Titles</span>
          </div>

          <div className="team-stat team-stat-mercedes">
            <strong>128</strong>
            <span>Race Wins</span>
          </div>
        </div>

        <div className="team-card-footer team-card-footer-mercedes">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://www.mercedesamgf1.com/" className="team-footer-cta team-footer-cta-mercedes">
            AMG Petronas
          </a>
        </div>
      </div>
    );
  }

  if (isHaas) {
    return (
      <div className="team-card team-card-haas" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>
        <div className="team-card-top team-card-top-haas">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Est. 2016</span>
        </div>
        <div className="team-card-divider team-card-divider-haas"></div>
        <div className="team-card-main team-card-main-haas">
          <div className="team-logo-wrap team-logo-wrap-haas">
            <div className="team-logo team-logo-haas">
              <img src={displayLogo} alt={name} />
            </div>
          </div>
          <div className="team-info team-info-haas">
            <span className="team-eyebrow team-eyebrow-haas">MoneyGram</span>
            <h2>Haas F1 Team</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="team-driver-row team-driver-row-haas">
          <div className="team-driver-card team-driver-card-haas">
            <strong>31</strong>
            <div><span>Esteban Ocon</span><small>Driver</small></div>
          </div>
          <div className="team-driver-card team-driver-card-haas">
            <strong>87</strong>
            <div><span>Oliver Bearman</span><small>Driver</small></div>
          </div>
        </div>
        <div className="team-stats-row team-stats-row-haas">
          <div className="team-stat team-stat-haas"><strong>0</strong><span>Constructors</span></div>
          <div className="team-stat team-stat-haas"><strong>0</strong><span>Drivers' Titles</span></div>
          <div className="team-stat team-stat-haas"><strong>1</strong><span>Race Wins</span></div>
        </div>
        <div className="team-card-footer team-card-footer-haas">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://www.haasf1team.com/" className="team-footer-cta team-footer-cta-haas">MoneyGram</a>
        </div>
      </div>
    );
  }

  if (isRacingBulls) {
    return (
      <div className="team-card team-card-rb" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>
        <div className="team-card-top team-card-top-rb">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Est. 2006</span>
        </div>
        <div className="team-card-divider team-card-divider-rb"></div>
        <div className="team-card-main team-card-main-rb">
          <div className="team-logo-wrap team-logo-wrap-rb">
            <div className="team-logo team-logo-rb">
              <img src={displayLogo} alt={name} />
            </div>
          </div>
          <div className="team-info team-info-rb">
            <span className="team-eyebrow team-eyebrow-rb">Visa Cash App</span>
            <h2>Racing Bulls</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="team-driver-row team-driver-row-rb">
          <div className="team-driver-card team-driver-card-rb">
            <strong>6</strong>
            <div><span>Isack Hadjar</span><small>Driver</small></div>
          </div>
          <div className="team-driver-card team-driver-card-rb">
            <strong>30</strong>
            <div><span>Liam Lawson</span><small>Driver</small></div>
          </div>
        </div>
        <div className="team-stats-row team-stats-row-rb">
          <div className="team-stat team-stat-rb"><strong>0</strong><span>Constructors</span></div>
          <div className="team-stat team-stat-rb"><strong>0</strong><span>Drivers' Titles</span></div>
          <div className="team-stat team-stat-rb"><strong>2</strong><span>Race Wins</span></div>
        </div>
        <div className="team-card-footer team-card-footer-rb">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://www.visacashapprb.com/" className="team-footer-cta team-footer-cta-rb">Racing Bulls</a>
        </div>
      </div>
    );
  }

  if (isAudi) {
    return (
      <div className="team-card team-card-audi" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>
        <div className="team-card-top team-card-top-audi">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Debut 2026</span>
        </div>
        <div className="team-card-divider team-card-divider-audi"></div>
        <div className="team-card-main team-card-main-audi">
          <div className="team-logo-wrap team-logo-wrap-audi">
            <div className="team-logo team-logo-audi">
              <img src={displayLogo} alt={name} />
            </div>
          </div>
          <div className="team-info team-info-audi">
            <span className="team-eyebrow team-eyebrow-audi">Revolut - Mission 2030</span>
            <h2>Audi F1 Team</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="team-driver-row team-driver-row-audi">
          <div className="team-driver-card team-driver-card-audi">
            <strong>27</strong>
            <div><span>Nico Hulkenberg</span><small>Driver</small></div>
          </div>
          <div className="team-driver-card team-driver-card-audi">
            <strong>5</strong>
            <div><span>Gabriel Bortoleto</span><small>Driver</small></div>
          </div>
        </div>
        <div className="team-stats-row team-stats-row-audi">
          <div className="team-stat team-stat-audi"><strong>-</strong><span>Constructors</span></div>
          <div className="team-stat team-stat-audi"><strong>-</strong><span>Drivers' Titles</span></div>
          <div className="team-stat team-stat-audi"><strong>0</strong><span>Race Wins</span></div>
        </div>
        <div className="team-card-footer team-card-footer-audi">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://www.audi.com/en/sport/motorsport/formula-1.html" className="team-footer-cta team-footer-cta-audi">Audi Revolut</a>
        </div>
      </div>
    );
  }

  if (isCadillac) {
    return (
      <div className="team-card team-card-cadillac" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>
        <div className="team-card-top team-card-top-cadillac">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Debut 2026</span>
        </div>
        <div className="team-card-divider team-card-divider-cadillac"></div>
        <div className="team-card-main team-card-main-cadillac">
          <div className="team-logo-wrap team-logo-wrap-cadillac">
            <div className="team-logo team-logo-cadillac">
              <img src={displayLogo} alt={name} />
            </div>
          </div>
          <div className="team-info team-info-cadillac">
            <span className="team-eyebrow team-eyebrow-cadillac">TWG AI - GM</span>
            <h2>Cadillac F1 Team</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="team-driver-row team-driver-row-cadillac">
          <div className="team-driver-card team-driver-card-cadillac">
            <strong>11</strong>
            <div><span>Sergio Perez</span><small>Driver</small></div>
          </div>
          <div className="team-driver-card team-driver-card-cadillac">
            <strong>77</strong>
            <div><span>Valtteri Bottas</span><small>Driver</small></div>
          </div>
        </div>
        <div className="team-stats-row team-stats-row-cadillac">
          <div className="team-stat team-stat-cadillac"><strong>-</strong><span>Constructors</span></div>
          <div className="team-stat team-stat-cadillac"><strong>-</strong><span>Drivers' Titles</span></div>
          <div className="team-stat team-stat-cadillac"><strong>0</strong><span>Race Wins</span></div>
        </div>
        <div className="team-card-footer team-card-footer-cadillac">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://cadillacformula1.com/" className="team-footer-cta team-footer-cta-cadillac">The Mission Begins</a>
        </div>
      </div>
    );
  }

  if (isWilliams) {
    return (
      <div className="team-card team-card-williams" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>
        <div className="team-card-top team-card-top-williams">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Est. 1977</span>
        </div>
        <div className="team-card-divider team-card-divider-williams"></div>
        <div className="team-card-main team-card-main-williams">
          <div className="team-logo-wrap team-logo-wrap-williams">
            <div className="team-logo team-logo-williams">
              <img src={displayLogo} alt={name} />
            </div>
          </div>
          <div className="team-info team-info-williams">
            <span className="team-eyebrow team-eyebrow-williams">Dorilton Capital</span>
            <h2>Williams Racing</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="team-driver-row team-driver-row-williams">
          <div className="team-driver-card team-driver-card-williams">
            <strong>23</strong>
            <div><span>Alex Albon</span><small>Driver</small></div>
          </div>
          <div className="team-driver-card team-driver-card-williams">
            <strong>55</strong>
            <div><span>Carlos Sainz</span><small>Driver</small></div>
          </div>
        </div>
        <div className="team-stats-row team-stats-row-williams">
          <div className="team-stat team-stat-williams"><strong>9</strong><span>Constructors</span></div>
          <div className="team-stat team-stat-williams"><strong>7</strong><span>Drivers' Titles</span></div>
          <div className="team-stat team-stat-williams"><strong>114</strong><span>Race Wins</span></div>
        </div>
        <div className="team-card-footer team-card-footer-williams">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://www.williamsf1.com/" className="team-footer-cta team-footer-cta-williams">Williams Racing</a>
        </div>
      </div>
    );
  }

  if (isMclaren) {
    return (
      <div className="team-card team-card-mclaren" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>
        <div className="team-card-top team-card-top-mclaren">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Est. 1963</span>
        </div>
        <div className="team-card-divider team-card-divider-mclaren"></div>
        <div className="team-card-main team-card-main-mclaren">
          <div className="team-logo-wrap team-logo-wrap-mclaren">
            <div className="team-logo team-logo-mclaren">
              <img src={displayLogo} alt={name} />
            </div>
          </div>
          <div className="team-info team-info-mclaren">
            <span className="team-eyebrow team-eyebrow-mclaren">Papaya</span>
            <h2>McLaren</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="team-driver-row team-driver-row-mclaren">
          <div className="team-driver-card team-driver-card-mclaren">
            <strong>4</strong>
            <div><span>Lando Norris</span><small>Driver</small></div>
          </div>
          <div className="team-driver-card team-driver-card-mclaren">
            <strong>81</strong>
            <div><span>Oscar Piastri</span><small>Driver</small></div>
          </div>
        </div>
        <div className="team-stats-row team-stats-row-mclaren">
          <div className="team-stat team-stat-mclaren"><strong>9</strong><span>Constructors</span></div>
          <div className="team-stat team-stat-mclaren"><strong>4</strong><span>Drivers' Titles</span></div>
          <div className="team-stat team-stat-mclaren"><strong>183</strong><span>Race Wins</span></div>
        </div>
        <div className="team-card-footer team-card-footer-mclaren">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://www.mclaren.com/racing/formula-1/" className="team-footer-cta team-footer-cta-mclaren">Reigning Champs</a>
        </div>
      </div>
    );
  }

  if (isAstonMartin) {
    return (
      <div className="team-card team-card-aston" style={{ background: cardBackground }}>
        <div className="team-card-overlay"></div>
        <div className="team-card-top team-card-top-aston">
          <span className="team-badge">Formula 1 Team</span>
          <span className="team-origin">Est. 2021</span>
        </div>
        <div className="team-card-divider team-card-divider-aston"></div>
        <div className="team-card-main team-card-main-aston">
          <div className="team-logo-wrap team-logo-wrap-aston">
            <div className="team-logo team-logo-aston">
              <img src={displayLogo} alt={name} />
            </div>
          </div>
          <div className="team-info team-info-aston">
            <span className="team-eyebrow team-eyebrow-aston">Aramco</span>
            <h2>Aston Martin</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="team-driver-row team-driver-row-aston">
          <div className="team-driver-card team-driver-card-aston">
            <strong>14</strong>
            <div><span>Fernando Alonso</span><small>Driver</small></div>
          </div>
          <div className="team-driver-card team-driver-card-aston">
            <strong>18</strong>
            <div><span>Lance Stroll</span><small>Driver</small></div>
          </div>
        </div>
        <div className="team-stats-row team-stats-row-aston">
          <div className="team-stat team-stat-aston"><strong>1</strong><span>Constructors</span></div>
          <div className="team-stat team-stat-aston"><strong>2</strong><span>Drivers' Titles</span></div>
          <div className="team-stat team-stat-aston"><strong>12</strong><span>Race Wins</span></div>
        </div>
        <div className="team-card-footer team-card-footer-aston">
          <span className="team-footer-origin">{origin}</span>
          <a href="https://www.astonmartinf1.com/" className="team-footer-cta team-footer-cta-aston">AMR Aramco</a>
        </div>
      </div>
    );
  }

  return (
    <div className="team-card" style={{ background: cardBackground }}>
      <div className="team-card-overlay"></div>

      <div className="team-card-top">
        <span className="team-badge">Formula 1 Team</span>
        <span className="team-origin">{origin}</span>
      </div>

      <div className="team-card-main">
        <div className="team-logo-wrap">
          <div className="team-logo" style={{ background: bg }}>
            <img src={displayLogo} alt={name} />
          </div>
        </div>

        <div className="team-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="team-card-bottom">
        <span className="team-legacy-label">Legacy</span>
        <strong>{legacy}</strong>
      </div>
    </div>
  );
};

export default TeamCard;
