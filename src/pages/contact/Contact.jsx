import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact_wrapper">
        <div className="contact_item">
          <div className="contact__item-icon">
            <i className="bi bi-house-fill"></i>
            Address:
          </div>
          <p className="contact__item-text">
            plot 132, Peter-Obi Avenue, Wuse II, Abuja
          </p>
        </div>
        <div className="contact_item">
          <div className="contact__item-icon">
            <i className="bi bi-telephone-fill"></i>
            Phone:
          </div>
          <p className="contact__item-text">0123456789</p>
        </div>
        <div className="contact_item">
          <div className="contact__item-icon">
            <i className="bi bi-envelope-fill"></i>
            Email:
          </div>
          <p className="contact__item-text">info@fakeemail.com</p>
        </div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className="contact_form"
      >
        <h6 className="contact__form-title">Send Us Message</h6>
        <div className="contact__input-wrapper">
          <input type="text" placeholder="Name *" />
          <input type="text" placeholder="Subject *" />
          <input type="email" placeholder="Email *" />
        </div>
        <textarea
          className="contact_textarea"
          placeholder="Your Message ... *"
          rows="5"
        ></textarea>
        <button className="contact_btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
