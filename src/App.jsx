import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg laundry-navbar">
        <div className="container">

          <Link className="navbar-brand" to="/">
            Fresh<span>Fold</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#laundryNavbar"
            aria-controls="laundryNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="laundryNavbar"
          >
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      {/* PAGE ROUTES */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}

      <footer className="laundry-footer">

        <div className="container">

          <div className="row text-center">

            <div className="col-lg-4 col-md-6 mb-4">

              <h3>
                Fresh<span>Fold</span>
              </h3>

              <p>
                Fresh clothes, clean living and convenient
                laundry services for everyone.
              </p>

            </div>

            <div className="col-lg-4 col-md-6 mb-4">

              <h5>Quick Links</h5>

              <div className="footer-links">

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Services</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/contact">Contact</Link>

              </div>

            </div>

            <div className="col-lg-4 col-md-12">

              <h5>Contact</h5>

              <p>Bangalore, India</p>
              <p>+91 98765 43210</p>
              <p>hello@freshfold.com</p>

            </div>

          </div>

          <hr />

          <div className="footer-bottom">
            <p>
              &copy; 2026 FreshFold Laundry. All Rights Reserved.
            </p>
          </div>

        </div>

      </footer>
    </>
  );
}

export default App;