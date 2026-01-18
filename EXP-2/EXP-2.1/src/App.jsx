import "./App.css";

function App() {
  return (
    <div className="app-bg d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        {/* Header / Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded-3 mb-4 shadow">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              React + Bootstrap SPA
            </a>
          </div>
        </nav>

        {/* Main card with form */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <h5 className="card-title mb-3 text-center">
                  Contact Form
                </h5>
                <p className="card-text text-muted text-center mb-4">
                  This UI is built using Bootstrap components such as
                  containers, cards, buttons, and forms.
                </p>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Write your message"
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-end gap-2">
                    <button type="reset" className="btn btn-outline-secondary">
                      Clear
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div className="card-footer text-muted text-center">
                Designed with Bootstrap components in a single-page React app.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
