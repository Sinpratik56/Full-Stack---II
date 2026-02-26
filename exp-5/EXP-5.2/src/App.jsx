import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

// Lazy-load named exports from Pages.jsx
const Home = lazy(() =>
  import("./Pages").then((m) => ({ default: m.Home }))
);

const About = lazy(() =>
  import("./Pages").then((m) => ({ default: m.About }))
);

const Contact = lazy(() =>
  import("./Pages").then((m) => ({ default: m.Dashboard }))
);

// 2-second delay wrapper so loading state is visible
function Delay({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return loading ? (
    <div className="loading">Loading....</div>
  ) : (
    children
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="card">
        <h1>Route-Based Lazy Loading Demo</h1>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Suspense
          fallback={
            <div className="loading">
              Loading....
            </div>
          }
        >
          <Routes location={location}>
            <Route
              path="/"
              element={
                <Delay key={location.pathname}>
                  <Home />
                </Delay>
              }
            />
            <Route
              path="/about"
              element={
                <Delay key={location.pathname}>
                  <About />
                </Delay>
              }
            />
            <Route
              path="/contact"
              element={
                <Delay key={location.pathname}>
                  <Contact />
                </Delay>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
