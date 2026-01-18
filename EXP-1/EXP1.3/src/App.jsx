import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const isLight = theme === "light";

  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <div className="card">
        <h1>Theme Toggle SPA</h1>

        <p>
          Current theme: <strong>{theme.toUpperCase()}</strong>
        </p>

        <div className="toggle-row">
          <span className="mode-text">Light</span>

          <label className="switch">
            <input
              type="checkbox"
              checked={!isLight}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>

          <span className="mode-text">Dark</span>
        </div>
        <p>
          -----------------------------------------------------
        </p>

        <p className="info-text">
          This is the 3 part of first experimental lab activity done in 23aml-2(a) FSD-2 lab.
        </p>
        <p>
          -----------------------------------------------------
        </p>

      </div>
    </div>
  );
}

export default App;
