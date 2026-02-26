// All route components in one file

export function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the home page of the SPA.</p>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Route-based lazy loading loads this page only when you visit it.</p>
    </div>
  );
}

export function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Look at my lazy-loaded dashboard component!</p>
    </div>
  );
}
