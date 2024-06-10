// src/Components/Card.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../Features/cartSlice';
import '../App.css';

const Card = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <>
      <div className="card total-card p-4 mb-5 h-100 bg-body-tertiary shadow">
        <ul className="list-group list-group-flush">
          <h1 className="text-center">Cart</h1>
          <hr />
          <h5>No of Items in Your Cart : {totalQuantity}</h5>
          <h3> Grand Total : ${totalPrice}</h3>
        </ul>
      </div>
      {cart.map((item) => (
        <div className="card mb-5 p-4 bg-body-tertiary shadow" style={{ width: '60vw' }} key={item.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={item.images[0]}
                className="img-fluid rounded-start immage"
                alt="..."
                style={{ height: '250px' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-start">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">
                  <b>Price: </b>${item.price}
                </p>

                <div className="quantity-btn">
                  <span className="card-text">
                    <b>Quantity: </b>
                  </span>
                  <button
                    className="btn btn-outline-success quantity-button mt-2 mx-3"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                  <span className="badge text-bg-dark rounded-pill">{item.quantity || 1}</span>
                  <button
                    className="btn btn-outline-success quantity-button mt-2 mx-3"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                </div>
                <button className="btn btn-danger mt-3" onClick={() => dispatch(removeItem(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
          <p>
            <b>Shipping : </b>FREE
          </p>
          <h5>SubTotal : ${item.price * (item.quantity || 1)}</h5>
        </div>
      ))}
    </>
  );
};

export default Card;
