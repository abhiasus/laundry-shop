import React, { useState } from "react";

import shirt from "../assets/images/shirt.jpg";
import pant from "../assets/images/pant.jpg";
import saree from "../assets/images/saree.jpg";
import blanket from "../assets/images/blanket.jpg";

function Product() {

  const [category, setCategory] = useState("all");

  const kgServices = [
    {
      name: "Wash & Fold",
      price: 80,
      unit: "KG",
      icon: "🧺",
      description:
        "Wash, dry and neatly fold your everyday clothes.",
    },
    {
      name: "Wash & Iron",
      price: 120,
      unit: "KG",
      icon: "👔",
      description:
        "Complete washing and professional ironing service.",
    },
    {
      name: "Premium Wash",
      price: 160,
      unit: "KG",
      icon: "✨",
      description:
        "Premium cleaning for better freshness and care.",
    },
    {
      name: "Dry Cleaning",
      price: 250,
      unit: "KG",
      icon: "🧥",
      description:
        "Professional dry cleaning for delicate garments.",
    },
  ];

  const clothServices = [
    {
      name: "Shirt",
      price: 40,
      unit: "Piece",
      image: shirt,
      description:
        "Professional washing and ironing for shirts.",
    },
    {
      name: "Pant",
      price: 50,
      unit: "Piece",
      image: pant,
      description:
        "Clean and fresh finish for trousers and pants.",
    },
    {
      name: "Saree",
      price: 80,
      unit: "Piece",
      image: saree,
      description:
        "Gentle cleaning for sarees and traditional wear.",
    },
    {
      name: "Blanket",
      price: 150,
      unit: "Piece",
      image: blanket,
      description:
        "Deep cleaning for blankets and large garments.",
    },
  ];

  const showKG =
    category === "all" || category === "kg";

  const showCloth =
    category === "all" || category === "cloth";

  return (
    <>

      {/* HEADER */}

      <section className="page-header">

        <div className="container text-center">

          <span>OUR SERVICES</span>

          <h1>
            Laundry Pricing
          </h1>

          <p>
            Choose pricing by KG or individual clothing item.
          </p>

        </div>

      </section>


      {/* FILTER */}

      <section className="product-section">

        <div className="container">

          <div
            className="service-filter text-center"
            data-aos="fade-up"
          >

            <button
              className={
                category === "all"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setCategory("all")}
            >
              All Services
            </button>

            <button
              className={
                category === "kg"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setCategory("kg")}
            >
              Per KG
            </button>

            <button
              className={
                category === "cloth"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setCategory("cloth")}
            >
              Per Cloth
            </button>

          </div>


          {/* KG SERVICES */}

          {showKG && (
            <div className="service-group">

              <div
                className="service-heading"
                data-aos="fade-right"
              >

                <div>
                  <span className="section-label">
                    WEIGHT BASED
                  </span>

                  <h2>
                    Laundry By KG
                  </h2>
                </div>

                <p>
                  Perfect for regular laundry loads.
                </p>

              </div>


              <div className="row g-4">

                {kgServices.map((service, index) => (

                  <div
                    className="col-lg-3 col-md-6"
                    key={service.name}
                    data-aos="flip-up"
                    data-aos-delay={index * 100}
                  >

                    <div className="kg-card">

                      <div className="kg-icon">
                        {service.icon}
                      </div>

                      <h3>
                        {service.name}
                      </h3>

                      <p>
                        {service.description}
                      </p>

                      <div className="price">
                        ₹{service.price}
                        <small>
                          /{service.unit}
                        </small>
                      </div>

                      <button
                        className="btn btn-primary w-100"
                        onClick={() =>
                          console.log(
                            `${service.name} selected - ₹${service.price}/${service.unit}`
                          )
                        }
                      >
                        Select Service
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>
          )}


          {/* CLOTH SERVICES */}

          {showCloth && (
            <div className="service-group cloth-group">

              <div
                className="service-heading"
                data-aos="fade-right"
              >

                <div>
                  <span className="section-label">
                    INDIVIDUAL ITEMS
                  </span>

                  <h2>
                    Laundry Per Cloth
                  </h2>
                </div>

                <p>
                  Choose individual garments.
                </p>

              </div>


              <div className="row g-4">

                {clothServices.map((service, index) => (

                  <div
                    className="col-lg-3 col-md-6"
                    key={service.name}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >

                    <div className="cloth-card">

                      <img
                        src={service.image}
                        alt={service.name}
                      />

                      <div className="cloth-content">

                        <h3>
                          {service.name}
                        </h3>

                        <p>
                          {service.description}
                        </p>

                        <div className="cloth-bottom">

                          <div className="price">
                            ₹{service.price}
                            <small>
                              /piece
                            </small>
                          </div>

                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              console.log(
                                `${service.name} selected - ₹${service.price}/piece`
                              )
                            }
                          >
                            Select
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>
          )}

        </div>

      </section>


      {/* NOTE */}

      <section className="pricing-note">

        <div
          className="container"
          data-aos="fade-up"
        >

          <div className="note-box">

            <h3>
               Need a larger laundry order?
            </h3>

            <p>
              For bulk laundry, blankets, curtains and
              other large items, contact our team for
              special pricing.
            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default Product;