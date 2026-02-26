import { Suspense, lazy } from "react";

// Simulating a slow network with a 1.5s delay
const Dashboard = lazy(() => 
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/Dashboard.jsx")), 1500);
  })
);

// A simple Rotating Spinner Component
const LoadingSpinner = () => (
  <div className="fallback-container">
    <div className="spinner"></div>
    <h2>Loading Dashboard...</h2>
  </div>
);

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1>Lazy Loading Demo</h1>
        
        {/* Navigation buttons to match your reference image */}
        <div className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#" className="active">Contact</a>
        </div>

        <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #eee' }} />

        {/* Suspense handles the loading state */}
        <Suspense fallback={<LoadingSpinner />}>
          <Dashboard />
        </Suspense>
      </div>
    </div>
  );
}

export default App;