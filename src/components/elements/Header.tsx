import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header className="fixed-top header nav-bg">
      {/* <!-- top header --> */}
      <div className="top-header py-2 bg-white">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4 text-center text-lg-left">
              <a className="text-color mr-3" href="callto:+443003030266">
                <strong>CALL</strong> +44 300 303 0266
              </a>
              <ul className="list-inline d-inline">
                <li className="list-inline-item mx-0">
                  <a className="d-inline-block p-2 text-color" href="#">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-0">
                  <a className="d-inline-block p-2 text-color" href="#">
                    <i className="ti-twitter-alt"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-0">
                  <a className="d-inline-block p-2 text-color" href="#">
                    <i className="ti-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-0">
                  <a className="d-inline-block p-2 text-color" href="#">
                    <i className="ti-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- navbar --> */}
      <div className="navigation w-100">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </Link>
            <button
              className="navbar-toggler rounded-0"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav ml-auto text-center">
                <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/about" ? "active" : ""
                  }`}
                >
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/courses" ? "active" : ""
                  }`}
                >
                  <Link href="/courses">
                    <a className="nav-link">COURSES</a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/contact" ? "active" : ""
                  }`}
                >
                  <Link href="/contact">
                    <a className="nav-link">CONTACT</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
