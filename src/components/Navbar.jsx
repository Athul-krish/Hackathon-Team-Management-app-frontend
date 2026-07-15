import { Link } from "react-router-dom";

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark shadow-sm custom-navbar">
     <div className="container">

        <Link className="navbar-brand fw-bold fs-4" to="/">
          <i className="bi bi-trophy-fill me-2 text-warning"></i>
          Hackathon Hub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door-fill me-1"></i>
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/add">
                <i className="bi bi-person-plus-fill me-1"></i>
                Add Team
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/view">
                <i className="bi bi-table me-1"></i>
                View Teams
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;