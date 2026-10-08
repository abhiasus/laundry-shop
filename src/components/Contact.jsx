import React, { useState } from "react";

function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmitted(true);

    console.log("Laundry contact form submitted");

  };

  return (
    <>

      {/* HEADER */}

      <section className="page-header">

        <div className="container text-center">

          <span>GET IN TOUCH</span>

          <h1>
            Contact FreshFold
          </h1>

          <p>
            Have questions about our laundry services?
          </p>

        </div>

      </section>


      {/* CONTACT */}

      <section className="contact-section">

        <div className="container">

          <div className="row g-5">

            {/* INFORMATION */}

            <div
              className="col-lg-5"
              data-aos="fade-right"
            >

              <span className="section-label">
                CONTACT US
              </span>

              <h2>
                Let's Talk About Your Laundry
              </h2>

              <p>
                Need help choosing between KG-based and
                per-cloth laundry? Our team is happy to help.
              </p>


              <div className="contact-info">

                <div className="contact-card">

                  <div className="contact-icon">
                    📍
                  </div>

                  <div>
                    <h4>Address</h4>
                    <p>
                      25 Main Road, Bangalore, India
                    </p>
                  </div>

                </div>


                <div className="contact-card">

                  <div className="contact-icon">
                    📞
                  </div>

                  <div>
                    <h4>Phone</h4>
                    <p>
                      +91 98765 43210
                    </p>
                  </div>

                </div>


                <div className="contact-card">

                  <div className="contact-icon">
                    ✉️
                  </div>

                  <div>
                    <h4>Email</h4>
                    <p>
                      hello@freshfold.com
                    </p>
                  </div>

                </div>


                <div className="contact-card">

                  <div className="contact-icon">
                    🕒
                  </div>

                  <div>
                    <h4>Opening Hours</h4>
                    <p>
                      Mon - Sun: 8:00 AM - 9:00 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div
              className="col-lg-7"
              data-aos="fade-left"
            >

              <div className="contact-form">

                <h2>
                  Send Us A Message
                </h2>

                {submitted && (
                  <div className="alert alert-success">
                    Thank you! Your message has been
                    submitted successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit}>

                  <div className="row">

                    <div className="col-md-6 mb-3">

                      <label>
                        Your Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />

                    </div>


                    <div className="col-md-6 mb-3">

                      <label>
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter phone number"
                        required
                      />

                    </div>

                  </div>


                  <div className="mb-3">

                    <label>
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />

                  </div>


                  <div className="mb-3">

                    <label>
                      Service
                    </label>

                    <select
                      className="form-select"
                      required
                    >

                      <option value="">
                        Select a service
                      </option>

                      <option>
                        Laundry Per KG
                      </option>

                      <option>
                        Laundry Per Cloth
                      </option>

                      <option>
                        Dry Cleaning
                      </option>

                      <option>
                        Bulk Laundry
                      </option>

                    </select>

                  </div>


                  <div className="mb-3">

                    <label>
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Write your message..."
                      required
                    ></textarea>

                  </div>


                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Contact;