import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-section">

      <div className="container">

        <div className="hero-card">

          <div className="text-center">

            <i className="bi bi-trophy-fill display-1 text-warning"></i>

            <h1 className="display-4 fw-bold mt-3">
              Hackathon Team Management
            </h1>

            <p className="lead text-secondary mt-3">
              Register hackathon teams, manage participants and organize events
              effortlessly using the MERN Stack.
            </p>

          </div>

          <div className="row mt-5 g-4">

            <div className="col-md-4">

              <div className="feature-card">

                <i className="bi bi-people-fill feature-icon text-primary"></i>

                <h4>Register Teams</h4>

                <p>
                  Add new teams with complete participant information.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="feature-card">

                <i className="bi bi-database-fill feature-icon text-success"></i>

                <h4>Store Data</h4>

                <p>
                  Save all registrations securely in MongoDB.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="feature-card">

                <i className="bi bi-table feature-icon text-danger"></i>

                <h4>View Teams</h4>

                <p>
                  Display all registered teams in a clean table.
                </p>

              </div>

            </div>

          </div>

          <div className="text-center mt-5">

            <Link
              to="/add"
              className="btn btn-primary btn-lg px-5 me-3"
            >
              <i className="bi bi-person-plus-fill me-2"></i>
              Register Team
            </Link>

            <Link
              to="/view"
              className="btn btn-outline-dark btn-lg px-5"
            >
              <i className="bi bi-eye-fill me-2"></i>
              View Teams
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;