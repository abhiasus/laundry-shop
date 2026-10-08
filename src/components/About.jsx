import React from "react";

import washing from "../assets/images/washing.jpg";
import ironing from "../assets/images/ironing.jpg";

function About() {
  return (
    <>

      {/* PAGE HEADER */}

      <section className="page-header">

        <div className="container text-center">

          <span>ABOUT US</span>

          <h1>
            We Care For Your Clothes
          </h1>

          <p>
            Professional laundry services made simple.
          </p>

        </div>

      </section>


      {/* ABOUT */}

      <section className="about-section">

        <div className="container">

          <div className="row align-items-center g-5">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >

              <img
                src={washing}
                alt="Laundry washing"
                className="about-image"
              />

            </div>


            <div
              className="col-lg-6"
              data-aos="fade-left"
            >

              <span className="section-label">
                OUR STORY
              </span>

              <h2>
                Laundry Care You Can Trust
              </h2>

              <p>
                FreshFold was created to make laundry easier
                for busy families, students and professionals.
              </p>

              <p>
                We combine modern washing methods with
                careful garment handling to keep your clothes
                fresh, clean and looking their best.
              </p>

              <div className="about-points">

                <div>
                  ✓ Quality cleaning
                </div>

                <div>
                  ✓ Careful garment handling
                </div>

                <div>
                  ✓ Affordable pricing
                </div>

                <div>
                  ✓ Professional service
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* VALUES */}

      <section className="values-section">

        <div className="container">

          <div
            className="text-center mb-5"
            data-aos="fade-up"
          >

            <span className="section-label">
              OUR VALUES
            </span>

            <h2>
              Why FreshFold?
            </h2>

          </div>

          <div className="row g-4">

            <div
              className="col-md-4"
              data-aos="fade-up"
            >

              <div className="value-card">

                <div className="value-icon">
                  🧼
                </div>

                <h3>Clean</h3>

                <p>
                  Powerful cleaning with quality products
                  for fresh and hygienic clothes.
                </p>

              </div>

            </div>


            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >

              <div className="value-card">

                <div className="value-icon">
                  👕
                </div>

                <h3>Careful</h3>

                <p>
                  We handle every garment according to
                  its fabric and cleaning requirements.
                </p>

              </div>

            </div>


            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <div className="value-card">

                <div className="value-icon">
                  ⚡
                </div>

                <h3>Fast</h3>

                <p>
                  Convenient laundry services designed
                  around your busy schedule.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* IMAGE SECTION */}

      <section className="about-banner">

        <div className="container">

          <div
            className="row align-items-center"
            data-aos="zoom-in"
          >

            <div className="col-lg-6">

              <img
                src={ironing}
                alt="Professional ironing"
                className="about-banner-image"
              />

            </div>

            <div className="col-lg-6">

              <h2>
                From Wash To Perfect Finish
              </h2>

              <p>
                Every garment goes through a careful
                process to give you a clean, fresh and
                comfortable finish.
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default About;