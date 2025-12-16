import "./App.css";
import { inventions } from "./Data";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Kiwi Inventions</h1>
        <p className="app-tagline">
          A showcase of remarkable inventions and ideas created by New
          Zealanders.
        </p>
      </header>

      <main>
        <section className="intro">
          <p>
            From splitting the atom and reinventing river travel to safer
            medical devices and world‑famous adventure activities, New
            Zealanders have punched well above their weight in innovation. Here
            are some of the many Kiwi inventions that have helped shape the
            modern world.
          </p>
        </section>

        <section className="inventions-grid">
          {inventions.map((item) => (
            <article key={item.name} className="invention-card">
              {item.image && (
                <div className="invention-image-wrapper">
                  <div className="invention-image-placeholder" aria-hidden="true" />
                  <img
                    className="invention-image"
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      // If image fails to load, keep the gradient placeholder visible
                      e.currentTarget.style.opacity = "0";
                    }}
                  />
                </div>
              )}

              <div className="invention-content">
                <h2 className="invention-name">{item.name}</h2>
                <p className="invention-meta">
                  <span className="inventor">{item.inventor}</span>
                  {item.year && <span className="year"> · {item.year}</span>}
                  {item.category && (
                    <span className="category"> · {item.category}</span>
                  )}
                </p>
                <p className="invention-summary">{item.summary}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Know another great Kiwi invention that&apos;s missing? You can easily
          add it to the list in <code>src/Data.js</code>.
        </p>
      </footer>
    </div>
  );
}

export default App;
