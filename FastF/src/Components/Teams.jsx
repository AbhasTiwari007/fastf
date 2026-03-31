import "./Teams.css";

const teams = [
  {
    name: "Red Bull Racing",
    base: "Milton Keynes, UK",
    principal: "Christian Horner",
    drivers: "Max Verstappen, Isack Hadjar",
    accent: "#1e4fff",
  },
  {
    name: "Ferrari",
    base: "Maranello, Italy",
    principal: "Fred Vasseur",
    drivers: "Charles Leclerc, Lewis Hamilton",
    accent: "#ff3b30",
  },
  {
    name: "Mercedes",
    base: "Brackley, UK",
    principal: "Toto Wolff",
    drivers: "George Russell, Kimi Antonelli",
    accent: "#37e3cf",
  },
  {
    name: "McLaren",
    base: "Woking, UK",
    principal: "Andrea Stella",
    drivers: "Lando Norris, Oscar Piastri",
    accent: "#ff7a18",
  },
  {
    name: "Aston Martin",
    base: "Silverstone, UK",
    principal: "Mike Krack",
    drivers: "Fernando Alonso, Lance Stroll",
    accent: "#00a67e",
  },
  {
    name: "Alpine",
    base: "Enstone, UK",
    principal: "Oliver Oakes",
    drivers: "Pierre Gasly, Jack Doohan",
    accent: "#ff63c3",
  },
  {
    name: "Williams",
    base: "Grove, UK",
    principal: "James Vowles",
    drivers: "Alex Albon, Carlos Sainz",
    accent: "#4aa8ff",
  },
  {
    name: "RB",
    base: "Faenza, Italy",
    principal: "Laurent Mekies",
    drivers: "Arvid Lindblad, Liam Lawson",
    accent: "#7c8cff",
  },
  {
    name: "Audi",
    base: "Hinwil, Switzerland",
    principal: "Alessandro Alunni Bravi",
    drivers: "Nico Hulkenberg, Gabriel Bortoleto",
    accent: "#f44336",
  },
  {
    name: "Haas",
    base: "Kannapolis, USA",
    principal: "Ayao Komatsu",
    drivers: "Esteban Ocon, Oliver Bearman",
    accent: "#f2f2f2",
  },
  {
    name: "Cadillac",
    base: "Fishers, USA",
    principal: "Graeme Lowdon",
    drivers: "Sergio Perez, Valtteri Bottas",
    accent: "#8fd3ff",
  },
];

function Teams() {
  return (
    <section className="teams-section">
      <div className="teams-heading">
        <p className="teams-kicker">The Grid</p>
        <h2>All Formula 1 Teams</h2>
        <p>
          Scroll through the full lineup of teams competing on the Formula 1 grid.
        </p>
      </div>

      <div className="teams-row">
        {teams.map((team) => (
          <article
            key={team.name}
            className="team-card"
            style={{ "--team-accent": team.accent }}
          >
            <div className="team-card-top">
              <span className="team-dot"></span>
              <span className="team-label">Formula 1 Team</span>
            </div>

            <h3>{team.name}</h3>

            <div className="team-meta">
              <p>
                <span>Base</span>
                {team.base}
              </p>
              <p>
                <span>Principal</span>
                {team.principal}
              </p>
              <p>
                <span>Drivers</span>
                {team.drivers}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Teams;
