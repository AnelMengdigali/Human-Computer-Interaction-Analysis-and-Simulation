import React from "react";
import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide"></div>
      <div className="rightSide">
        <h1>Contact us to offer your recommendations </h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">First Name</label>
          <input name="name" placeholder="Enter first name..." type="text" />
          <label htmlFor="name">Last Name</label>
          <input name="name" placeholder="Enter last name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
