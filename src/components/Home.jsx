import React from "react";
import { Link } from "react-router-dom";

import hero from "../assets/images/hero.jpg";
import washing from "../assets/images/washing.jpg";
import ironing from "../assets/images/ironing.jpg";
import dryclean from "../assets/images/dryclean.jpg";

function Home() {
  return (
    <>

      {/* HERO */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            <div
              className="col-lg-6 hero-content"
              data-aos="fade-right"
            >

              <span className="hero-small">
                CLEAN • FRESH • PERFECT
              </span>

              <h1>
                Laundry Made
                <span> Simple.</span>
              </h1>

              <p>
                Professional washing, ironing and dry-cleaning
                services for your everyday clothes.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/products"
                  className="btn btn-primary"
                >
                  Explore Services
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-outline-primary"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
            >

              <img
                src={hero}
                alt="Laundry"
                className="hero-image"
              />

            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="home-intro">

        <div
          className="container text-center"
          data-aos="fade-up"
        >

          <span className="section-label">
            WHY CHOOSE US
          </span>

          <h2>
            Your Clothes Deserve Better
          </h2>

          <p className="section-description">
            From daily clothes to premium garments,
            FreshFold takes care of everything with
            professional cleaning and careful handling.
          </p>

        </div>

      </section>


      {/* SERVICES */}

      <section className="home-services">

        <div className="container">

          <div className="row g-4">

            <div
              className="col-lg-4 col-md-6"
              data-aos="flip-left"
            >

              <div className="service-card">

                <img
                  src={washing}
                  alt="Washing"
                />

                <div className="service-content">

                  <h3>Wash & Fold</h3>

                  <p>
                    Fresh washing and neatly folded clothes
                    ready for your wardrobe.
                  </p>

                  <strong>
                    From ₹80 / KG
                  </strong>

                </div>

              </div>

            </div>


            <div
              className="col-lg-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay="150"
            >

              <div className="service-card">

                <img
                  src={ironing}
                  alt="Ironing"
                />

                <div className="service-content">

                  <h3>Wash & Iron</h3>

                  <p>
                    Clean, fresh and professionally ironed
                    clothes for your everyday style.
                  </p>

                  <strong>
                    From ₹120 / KG
                  </strong>

                </div>

              </div>

            </div>


            <div
              className="col-lg-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay="300"
            >

              <div className="service-card">

                <img
                  src={dryclean}
                  alt="Dry Cleaning"
                />

                <div className="service-content">

                  <h3>Dry Cleaning</h3>

                  <p>
                    Special care for premium and delicate
                    clothes.
                  </p>

                  <strong>
                    From ₹250 / KG
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="how-section">

        <div className="container">

          <div
            className="text-center mb-5"
            data-aos="fade-up"
          >

            <span className="section-label">
              HOW IT WORKS
            </span>

            <h2>
              Laundry In 3 Easy Steps
            </h2>

          </div>


          <div className="row g-4 text-center">

            <div
              className="col-md-4"
              data-aos="zoom-in"
            >

              <div className="step-card">

                <div className="step-number">
                  01
                </div>

                <h3>Choose Service</h3>

                <p>
                  Select KG-based or per-cloth
                  laundry services.
                </p>

              </div>

            </div>


            <div
              className="col-md-4"
              data-aos="zoom-in"
              data-aos-delay="150"
            >

              <div className="step-card">

                <div className="step-number">
                  02
                </div>

                <h3>We Clean</h3>

                <p>
                  Our team washes, dries and
                  handles your clothes carefully.
                </p>

              </div>

            </div>


            <div
              className="col-md-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >

              <div className="step-card">

                <div className="step-number">
                  03
                </div>

                <h3>Fresh Delivery</h3>

                <p>
                  Your clean and fresh clothes
                  are ready for pickup.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="home-cta">

        <div
          className="container text-center"
          data-aos="fade-up"
        >

          <h2>
            Ready For Fresh Clothes?
          </h2>

          <p>
            Check our laundry services and choose
            what works best for you.
          </p>

          <Link
            to="/products"
            className="btn btn-light"
          >
            View Laundry Services
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;