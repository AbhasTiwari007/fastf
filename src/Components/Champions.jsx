import { useMemo, useState } from "react";
import "./Champions.css";

const champions = [
  { name: "Giuseppe Farina", titles: 1, years: "1950" },
  { name: "Juan Manuel Fangio", titles: 5, years: "1951, 1954, 1955, 1956, 1957" },
  { name: "Alberto Ascari", titles: 2, years: "1952, 1953" },
  { name: "Mike Hawthorn", titles: 1, years: "1958" },
  { name: "Jack Brabham", titles: 3, years: "1959, 1960, 1966" },
  { name: "Phil Hill", titles: 1, years: "1961" },
  { name: "Graham Hill", titles: 2, years: "1962, 1968" },
  { name: "Jim Clark", titles: 2, years: "1963, 1965" },
  { name: "John Surtees", titles: 1, years: "1964" },
  { name: "Denny Hulme", titles: 1, years: "1967" },
  { name: "Jackie Stewart", titles: 3, years: "1969, 1971, 1973" },
  { name: "Jochen Rindt", titles: 1, years: "1970" },
  { name: "Emerson Fittipaldi", titles: 2, years: "1972, 1974" },
  { name: "Niki Lauda", titles: 3, years: "1975, 1977, 1984" },
  { name: "James Hunt", titles: 1, years: "1976" },
  { name: "Mario Andretti", titles: 1, years: "1978" },
  { name: "Jody Scheckter", titles: 1, years: "1979" },
  { name: "Alan Jones", titles: 1, years: "1980" },
  { name: "Nelson Piquet", titles: 3, years: "1981, 1983, 1987" },
  { name: "Keke Rosberg", titles: 1, years: "1982" },
  { name: "Alain Prost", titles: 4, years: "1985, 1986, 1989, 1993" },
  { name: "Ayrton Senna", titles: 3, years: "1988, 1990, 1991" },
  { name: "Nigel Mansell", titles: 1, years: "1992" },
  { name: "Michael Schumacher", titles: 7, years: "1994, 1995, 2000, 2001, 2002, 2003, 2004" },
  { name: "Damon Hill", titles: 1, years: "1996" },
  { name: "Jacques Villeneuve", titles: 1, years: "1997" },
  { name: "Mika Hakkinen", titles: 2, years: "1998, 1999" },
  { name: "Fernando Alonso", titles: 2, years: "2005, 2006" },
  { name: "Kimi Raikkonen", titles: 1, years: "2007" },
  { name: "Lewis Hamilton", titles: 7, years: "2008, 2014, 2015, 2017, 2018, 2019, 2020" },
  { name: "Jenson Button", titles: 1, years: "2009" },
  { name: "Sebastian Vettel", titles: 4, years: "2010, 2011, 2012, 2013" },
  { name: "Nico Rosberg", titles: 1, years: "2016" },
  { name: "Max Verstappen", titles: 4, years: "2021, 2022, 2023, 2024" },
  { name: "Lando Norris", titles: 1, years: "2025" },
];

const filters = ["ALL", "50S", "60S", "70S", "80S", "90S", "2000S", "2010S", "2020S"];

const championshipEntries = champions
  .flatMap((champion) =>
    champion.years.split(", ").map((year) => ({
      year,
      name: champion.name,
      titles: champion.titles,
      decade:
        year.startsWith("19") ? `${year.slice(2, 3)}0S` : `${year.slice(0, 3)}0S`,
    }))
  )
  .sort((a, b) => Number(a.year) - Number(b.year));

function Champions() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredEntries = useMemo(() => {
    return championshipEntries.filter((entry) => {
      const matchesSearch = entry.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = activeFilter === "ALL" || entry.decade === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <section className="champions-section">
      <div className="champions-panel">
        <div className="champions-topbar">
          <div className="champions-heading">
            <h2>WDC Hall of Fame</h2>
            <p>Formula 1 . 1950 - 2025</p>
          </div>

          <div className="champions-total">
            <span>{championshipEntries.length}</span>
            <span>Titles</span>
          </div>
        </div>

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="champions-search"
          placeholder="Search driver..."
        />

        <div className="champions-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`champions-filter ${activeFilter === filter ? "champions-filter-active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="champions-count">
          Showing <span>{filteredEntries.length}</span> of {championshipEntries.length} championships
        </p>

        <div className="champions-list">
          {filteredEntries.map((entry) => (
            <article key={`${entry.year}-${entry.name}`} className="championship-row">
              <div className="championship-year">{entry.year}</div>

              <div className="championship-main">
                <h3>{entry.name}</h3>
                <p>Formula 1 World Champion</p>
              </div>

              <div className="championship-meta">
                <span>{entry.titles}T</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Champions;
