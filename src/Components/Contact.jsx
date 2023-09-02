import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => (
            {
                ...prevData,
                [name]: value
            }))
    }

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
                        <p className="contact-alert">Submit the form below to get in touch with me</p>
                        <form className='contact-form' 
                        name="contact"
                            method="POST"
                            netlify-honeypot="bot-field"
                            data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden">
                             <label>
                               Don’t fill this out if you’re human: <input name="bot-field" />
                             </label>
                            </p>
                            <div className="input-container flex">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    name="name"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    name="email"
                                />
                            </div>

                            <textarea
                                className="message"
                                rows="10"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                            >
                            </textarea>
                            <button className="btn form-btn">Let's Talk</button>
                        </form>
                    </div>
                </div>
            </section>
        </ScrollAnimation>
    )
}

export default Contact