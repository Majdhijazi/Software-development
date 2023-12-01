import React, { useState } from 'react';
import './login.css'; 

const FormPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className='popup-container'>
      <button className='pop-button' onClick={handleButtonClick} href="#login">Log In</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handlePopupClose}>
              &times;
            </span>

            <form onSubmit={handleFormSubmit}>
              <label>
                User: 
                <input type="text" name="name" />
              </label>
              <label>
                Pass: 
                <input type="text" name="name" />
              </label>
              <br />
              <button className='pop-button' type="submit">Sign In</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPopup;
