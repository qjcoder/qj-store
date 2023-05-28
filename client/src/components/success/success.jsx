import React, { Fragment } from "react";
import "./success.scss";
import ReactWhatsappButton from "react-whatsapp-button";

const Success = () => {
  return (
    <div className="success-container">
      <h1>
        <span>Thank You for Purchasing!</span>
        <span>Your order will be delivered within 2-3 days.</span>
        <span>In case of any query please contact through whatsapp.</span>
      </h1>
      <ReactWhatsappButton animated countryCode="92" phoneNumber="987654321" />
    </div>
  );
};

export default Success;
