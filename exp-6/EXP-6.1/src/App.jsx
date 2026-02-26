import "./App.css";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="app-root">
      <div className="app-card">
        <h1 className="app-title">
          Experiment 1: Handling Forms Using Controlled Components
        </h1>
        <p className="app-desc">
          Form data is controlled by React state using the useState hook.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
