import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { CiPercent, CiSearch } from "react-icons/ci";
import { IoMdHelpBuoy } from "react-icons/io";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-lg mx-0 ">
          <Link className="navbar-brand object-fit-cover" to="/home">
            <img src={logo} alt="Logo" width={200} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse"  id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4 d-lg-flex flex-lg-row gap-2">
              <li className="nav-item">
                <Link
                  className="nav-link active d-flex flex-row align-items-center gap-2"
                  aria-current="page"
                  to="/search"
                >
                  <span>
                    <CiSearch />
                  </span>
                  <span>Search</span>
                </Link>
              </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active d-flex flex-row align-items-center gap-2"
                    aria-current="page"
                    to="/offers"
                  >
                    <CiPercent />
                    <span>Offers</span>
                  </Link>
                </li>
            
                <li className="nav-item">
                  <Link
                    className="nav-link active d-flex flex-row align-items-center gap-2"
                    aria-current="page"
                    to="/contact"
                  >
                    <IoMdHelpBuoy /> Contact
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
