import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/public/vite.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <Link to={'/'}>
                <FontAwesomeIcon
                  icon="fa-solid fa-bars"
                  style={{ color: "#d4d4d4" }}
                />
              </Link>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link p-2 p-lg-3 active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-2 p-lg-3" to="/features">
                  Features
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link p-2 p-lg-3" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
            <div className="search ps-3 pe-3 ">
              <FontAwesomeIcon
                className="d-none d-lg-block"
                icon="fa-solid fa-magnifying-glass"
              />
            </div>
            <Link className="btn  rounded-pill main-btn" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
