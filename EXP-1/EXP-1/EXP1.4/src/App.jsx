import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);       // store submitted data
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setSubmitted(null);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Simple Form SPA</h1>

        <form onSubmit={handleSubmit} className="form">
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <div className="btn-row">
            <button type="button" className="btn secondary" onClick={handleReset}>
              Clear
            </button>
            <button type="submit" className="btn primary">
              Submit
            </button>
          </div>
        </form>

        {submitted && (
          <div className="submitted-box">
            <h2>Submitted Data</h2>
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Message:</strong> {submitted.message || "—"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
