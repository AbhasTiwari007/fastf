import "./Drivers.css";

const drivers = [
  {
    name: "Max Verstappen",
    team: "Red Bull Racing",
    number: "1",
    country: "Netherlands",
    accent: "#1e4fff",
    descriptor: "FORMULA 1 WORLD CHAMPION",
    badge: "4x World Drivers' Champion",
    titleYears: ["2021", "2022", "2023", "2024"],
  },
  {
    name: "Isack Hadjar",
    team: "Red Bull Racing",
    number: "6",
    country: "France",
    accent: "#1e4fff",
    descriptor: "NEXT GENERATION CONTENDER",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Charles Leclerc",
    team: "Ferrari",
    number: "16",
    country: "Monaco",
    accent: "#ff3b30",
    descriptor: "SCUDERIA FERRARI LEAD",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Lewis Hamilton",
    team: "Ferrari",
    number: "44",
    country: "United Kingdom",
    accent: "#ff3b30",
    descriptor: "FORMULA 1 LEGEND",
    badge: "7x World Drivers' Champion",
    titleYears: ["2008", "2014", "2015", "2017", "2018", "2019", "2020"],
  },
  {
    name: "George Russell",
    team: "Mercedes",
    number: "63",
    country: "United Kingdom",
    accent: "#37e3cf",
    descriptor: "MERCEDES TEAM LEADER",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Kimi Antonelli",
    team: "Mercedes",
    number: "12",
    country: "Italy",
    accent: "#37e3cf",
    descriptor: "RISING MERCEDES TALENT",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Lando Norris",
    team: "McLaren",
    number: "4",
    country: "United Kingdom",
    accent: "#ff7a18",
    descriptor: "PAPAYA FRONT-RUNNER",
    badge: "1x World Drivers' Champion",
    titleYears: ["2025"],
  },
  {
    name: "Oscar Piastri",
    team: "McLaren",
    number: "81",
    country: "Australia",
    accent: "#ff7a18",
    descriptor: "MCLAREN TITLE CHARGER",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Fernando Alonso",
    team: "Aston Martin",
    number: "14",
    country: "Spain",
    accent: "#00a67e",
    descriptor: "FORMULA 1 ICON",
    badge: "2x World Drivers' Champion",
    titleYears: ["2005", "2006"],
  },
  {
    name: "Lance Stroll",
    team: "Aston Martin",
    number: "18",
    country: "Canada",
    accent: "#00a67e",
    descriptor: "ASTON MARTIN DRIVER",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Pierre Gasly",
    team: "Alpine",
    number: "10",
    country: "France",
    accent: "#ff63c3",
    descriptor: "ALPINE TEAM LEAD",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Jack Doohan",
    team: "Alpine",
    number: "7",
    country: "Australia",
    accent: "#ff63c3",
    descriptor: "ALPINE GRID TALENT",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Alex Albon",
    team: "Williams",
    number: "23",
    country: "Thailand",
    accent: "#4aa8ff",
    descriptor: "WILLIAMS FRONTLINE DRIVER",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Carlos Sainz",
    team: "Williams",
    number: "55",
    country: "Spain",
    accent: "#4aa8ff",
    descriptor: "WILLIAMS RACE WINNER",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Arvid Lindblad",
    team: "RB",
    number: "27",
    country: "United Kingdom",
    accent: "#7c8cff",
    descriptor: "RB YOUNG PROSPECT",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Liam Lawson",
    team: "RB",
    number: "30",
    country: "New Zealand",
    accent: "#7c8cff",
    descriptor: "RB ATTACK DRIVER",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Nico Hulkenberg",
    team: "Audi",
    number: "27",
    country: "Germany",
    accent: "#f44336",
    descriptor: "AUDI EXPERIENCE CORE",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Gabriel Bortoleto",
    team: "Audi",
    number: "5",
    country: "Brazil",
    accent: "#f44336",
    descriptor: "AUDI FUTURE PROJECT",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Esteban Ocon",
    team: "Haas",
    number: "31",
    country: "France",
    accent: "#f2f2f2",
    textColor: "#111111",
    descriptor: "HAAS LEAD DRIVER",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Oliver Bearman",
    team: "Haas",
    number: "87",
    country: "United Kingdom",
    accent: "#f2f2f2",
    textColor: "#111111",
    descriptor: "HAAS BREAKOUT TALENT",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Sergio Perez",
    team: "Cadillac",
    number: "11",
    country: "Mexico",
    accent: "#8fd3ff",
    textColor: "#06131f",
    descriptor: "CADILLAC EXPERIENCE LEAD",
    badge: "Current Grid Driver",
    titleYears: [],
  },
  {
    name: "Valtteri Bottas",
    team: "Cadillac",
    number: "77",
    country: "Finland",
    accent: "#8fd3ff",
    textColor: "#06131f",
    descriptor: "CADILLAC GRID VETERAN",
    badge: "Current Grid Driver",
    titleYears: [],
  },
];

function Drivers() {
  return (
    <section className="drivers-section">
      <div className="drivers-heading">
        <p className="drivers-kicker">The Drivers</p>
        <h2>Formula 1 Driver Cards</h2>
        <p>Redesigned cards with a bold profile layout for every driver on the grid.</p>
      </div>

      <div className="drivers-row">
        {drivers.map((driver) => (
          <article
            key={driver.name}
            className="driver-card"
            style={{
              "--driver-accent": driver.accent,
              "--driver-badge-text": driver.textColor || "#ffffff",
            }}
          >
            <div className="driver-card-shell">
              <div className="driver-card-hero">
                <div className="driver-top-rails">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="driver-ghost-number">{driver.number}</div>

                <div className="driver-title-wrap">
                  <h3>{driver.name}</h3>
                  <p className="driver-descriptor">{driver.descriptor}</p>
                </div>
              </div>

              <div className="driver-card-body">
                <div className="driver-badge">{driver.badge}</div>

                <div className="driver-stats-grid">
                  <div className="driver-stat-box">
                    <strong>{driver.number}</strong>
                    <span>Car Number</span>
                  </div>

                  <div className="driver-stat-box">
                    <strong>{driver.country}</strong>
                    <span>Country</span>
                  </div>

                  <div className="driver-stat-box">
                    <strong>{driver.team}</strong>
                    <span>Team</span>
                  </div>
                </div>

                <div className="driver-chip-row">
                  {driver.titleYears.length ? (
                    driver.titleYears.map((year) => (
                      <span key={year} className="driver-chip">
                        {year}
                      </span>
                    ))
                  ) : (
                    <span className="driver-chip driver-chip-muted">Current Grid Driver</span>
                  )}
                </div>

                <div className="driver-footer">
                  <span className="driver-footer-country">{driver.country}</span>
                  <span className="driver-footer-team">{driver.team}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Drivers;
