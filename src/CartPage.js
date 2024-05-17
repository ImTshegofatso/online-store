import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeProduct } from './actions'; // Import your removeProduct action
import './components/CartPage.css'; // Import your CSS file
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

function CartPage({ cart, removeFromCart }) {
  const [shippingMethod, setShippingMethod] = useState('Standard'); // Default shipping method
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal
  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  const handleShippingChange = (event) => {
    setShippingMethod(event.target.value);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>Price: R{item.price}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <p>Total Cost: R{totalCost}</p>
      <div>
      <select id="shipping" value={shippingMethod} onChange={handleShippingChange} className="shipping-method">
        <option value="Standard">Standard</option>
        <option value="Express">Express</option>
        <option value="Overnight">Overnight</option>
      </select>
      </div>
      <button onClick={openModal}>Help</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Shipping Information"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Shipping Information</h2>
        <p>Standard: Delivery in 5-7 business days</p>
        <p>Express: Delivery in 2-3 business days</p>
        <p>Overnight: Delivery in 1 business day</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state.cart, // Map cart from your state to props
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: product => dispatch(removeProduct(product)), // Dispatch removeProduct action
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
