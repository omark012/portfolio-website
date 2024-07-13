import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  const defaultContact = {
    name: "",
    email: "",
    message: "",
  };

  const [contact, setContact] = useState(defaultContact);

  const handleInput = (event) => {
    const { name, value } = event.target;

    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for getting in touch!`);
    setContact(defaultContact);
  };

  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
      animateOnce={true}
      delay={200}
      offset={225}
    >
      <section className="contact" id="contact">
        <div className="container">
          <h1 className="contact-heading heading">Contact Me</h1>
          <div className="contact-container">
            <p className="contact-alert">
              Submit the form below to get in touch with me
            </p>
            <form className="contact-form" onSubmit={formSubmit}>
              <div className="input-container flex">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  value={contact.name}
                  onChange={handleInput}
                  name="name"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  value={contact.email}
                  onChange={handleInput}
                  name="email"
                />
              </div>

              <textarea
                className="message"
                rows="10"
                placeholder="Message"
                value={contact.message}
                onChange={handleInput}
                name="message"
              ></textarea>
              <button type="submit" className="btn form-btn">
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Contact;
