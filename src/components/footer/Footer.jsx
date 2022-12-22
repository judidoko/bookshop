import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__social-media">
          <div className="footer__social-media-text">
            Follow Us On Social Media
          </div>
          <div className="footer__social-media-icons">
            <div className="footer__social-media-icon">
              <i style={{ color: "#bc2a8d" }} className="bi bi-instagram"></i>
            </div>
            <div className="footer__social-media-icon">
              <i style={{ color: " #3b5998" }} className="bi bi-facebook"></i>
            </div>
            <div className="footer__social-media-icon">
              <i style={{ color: "#ff0000" }} className="bi bi-youtube"></i>
            </div>
            <div className="footer__social-media-icon">
              <i style={{ color: "#1DA1F2" }} className="bi bi-twitter"></i>
            </div>
            <div className="footer__social-media-icon">
              <i style={{ color: "#0088cc" }} className="bi bi-telegram"></i>
            </div>
          </div>
        </div>
        <div className="footer__links-wrapper">
          <div className="footer__links-item">
            <h3 className="footer__links-item-title">Usefull Links</h3>
            <ul className="footer_links">
              <li className="footer_link">Home</li>
              <li className="footer_link">About Us</li>
              <li className="footer_link">Contact Us</li>
              <li className="footer_link">Register</li>
            </ul>
          </div>
          <div className="footer__links-item">
            <h3 className="footer__links-item-title">Contact Information</h3>
            <div className="footer__address-wrapper">
              <div className="footer__address-item">
                <i className="bi bi-geo-alt-fill"></i>
                plot 132, Peter-Obi Avenue, Wuse II, Abuja
              </div>
              <div className="footer__address-item">
                <i className="bi bi-telephone-fill"></i>
                +2348123456789
              </div>
              <div className="footer__address-item">
                <i className="bi bi-envelope-fill"></i>
                info@examplemail.com
              </div>
            </div>
          </div>
          <div className="footer__links-item">
            <h3 className="footer__links-item-title">About Us</h3>
            <p className="footer_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum provident quasi accusantium, quos nihil soluta itaque
              aut! Nisi, amet! In laudantium nihil doloremque beatae laboriosam,
              voluptatibus ratione ad optio dolorum! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt repellendus, voluptates id
              adipisci consectetur.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
