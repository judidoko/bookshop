import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services_item">
          <i className="bi bi-truck"></i>
          <b>Free Shipping</b>
        </div>
        <div className="services_item">
          <i className="bi bi-gift"></i>
          <b>Gift Card</b>
        </div>
        <div className="services_item">
          <i className="bi bi-arrow-clockwise"></i>
          <b>30 days Return</b>
        </div>
        <div className="services_item">
          <i className="bi bi-send"></i>
          <b>Contact Us</b>
        </div>
      </div>
    </>
  );
};

export default Services;
