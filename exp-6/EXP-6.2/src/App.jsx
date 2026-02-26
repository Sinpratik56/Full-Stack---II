import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="app-root">
      <div className="app-card">
        <h1 className="app-title">
          Experiment 2: Client-Side Form Validation
        </h1>
        <p className="app-desc">
          Validates email and password on the client before submission.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
