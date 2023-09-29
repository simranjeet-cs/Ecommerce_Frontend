import React, { useState } from "react";
import './checkout.css';

const Checkout = ({ selectedProducts, totalCost }) => {
  const [address, setAddress] = useState({
    name: "",
    address: "",
    phone: "",
    pincode: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    // Check if all required fields are filled and update isFormValid accordingly
    setIsFormValid(
      address.name.trim() !== "" &&
      address.address.trim() !== "" &&
      address.phone.trim() !== "" &&
      address.pincode.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    // For simplicity, let's assume the form submission is successful
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <div className="address-form">
          <h3>Address Details</h3>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={address.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={address.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={address.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Pincode:</label>
            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="selected-products">
          <h3>Selected Products:</h3>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.product_id}>
                {product.product_name} (Quantity: {product.quantity})
              </li>
            ))}
          </ul>
        </div>

        <div className="total-cost">
          <h3>Total Cost: &#8377; {totalCost.toFixed(2)}</h3>
          <button type="submit" disabled={!isFormValid}>
            Pay with Total Price
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
