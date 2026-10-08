import React, { useState } from "react";

function Cart() {

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Wash & Fold",
      type: "Per KG",
      quantity: 2,
      price: 80,
    },
    {
      id: 2,
      name: "Shirt",
      type: "Per Piece",
      quantity: 3,
      price: 40,
    },
  ]);

  const increase = (id) => {

    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };

  const decrease = (id) => {

    setItems(
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };

  const removeItem = (id) => {

    setItems(
      items.filter((item) => item.id !== id)
    );

  };

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>

      {/* HEADER */}

      <section className="page-header">

        <div className="container text-center">

          <span>YOUR ORDER</span>

          <h1>
            Laundry Cart
          </h1>

          <p>
            Review your selected laundry services.
          </p>

        </div>

      </section>


      {/* CART */}

      <section className="cart-section">

        <div className="container">

          {items.length === 0 ? (

            <div
              className="empty-cart"
              data-aos="zoom-in"
            >

              <div className="empty-icon">
                🧺
              </div>

              <h2>
                Your Cart Is Empty
              </h2>

              <p>
                Add some laundry services to continue.
              </p>

            </div>

          ) : (

            <div className="row g-4">

              {/* ITEMS */}

              <div className="col-lg-8">

                <div
                  className="cart-box"
                  data-aos="fade-right"
                >

                  <h2>
                    Selected Services
                  </h2>

                  {items.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      <div className="cart-item-info">

                        <div className="cart-icon">
                          🧺
                        </div>

                        <div>

                          <h4>
                            {item.name}
                          </h4>

                          <span>
                            {item.type}
                          </span>

                        </div>

                      </div>


                      <div className="quantity">

                        <button
                          onClick={() =>
                            decrease(item.id)
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increase(item.id)
                          }
                        >
                          +
                        </button>

                      </div>


                      <div className="item-price">
                        ₹
                        {item.price * item.quantity}
                      </div>


                      <button
                        className="remove-btn"
                        onClick={() =>
                          removeItem(item.id)
                        }
                      >
                        ×
                      </button>

                    </div>

                  ))}

                </div>

              </div>


              {/* SUMMARY */}

              <div className="col-lg-4">

                <div
                  className="summary-box"
                  data-aos="fade-left"
                >

                  <h2>
                    Order Summary
                  </h2>

                  <div className="summary-row">

                    <span>
                      Services
                    </span>

                    <span>
                      {items.reduce(
                        (sum, item) =>
                          sum + item.quantity,
                        0
                      )}
                    </span>

                  </div>

                  <div className="summary-row">

                    <span>
                      Laundry
                    </span>

                    <span>
                      ₹{total}
                    </span>

                  </div>

                  <div className="summary-row">

                    <span>
                      Pickup
                    </span>

                    <span className="free">
                      FREE
                    </span>

                  </div>

                  <hr />

                  <div className="summary-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      ₹{total}
                    </strong>

                  </div>

                  <button
                    className="btn btn-primary w-100 mt-4"
                    onClick={() =>
                      alert(
                        "Thank you! Your laundry order has been placed."
                      )
                    }
                  >
                    Place Order
                  </button>

                </div>

              </div>

            </div>

          )}

        </div>

      </section>

    </>
  );
}

export default Cart;