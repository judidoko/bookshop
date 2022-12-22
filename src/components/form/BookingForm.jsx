import React from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div class="flex_container">
        <div className="flex">
          <div className="booking_form">
            <input type="text" placeholder="Full Name" id="" />
          </div>
          <div className="booking_form">
            <input type="email" placeholder="Email Address" id="" />
          </div>
          <div className="booking_form">
            <input type="number" placeholder="Phone Number" id="" />
          </div>
          <div className="booking_form">
            <input type="text" placeholder="To Address" id="" />
          </div>
          <div className="booking_form">
            <input type="date" placeholder="Date" className="date_picker" />
          </div>
        </div>
        <div className="flex">
          <div className="payment">
            <label htmlFor="">
              <input type="radio" /> Direct Bank Transfer : 1234567890 UBA
              Nwankwo Emeka
            </label>
          </div>
          <div className="payment">
            <label htmlFor="">
              <input type="radio" /> Pay on Delivery
            </label>
          </div>
          <div className="payment">
            <button>Reserve Now</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
