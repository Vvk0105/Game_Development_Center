import React from "react";
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>

            <div className="contact-info">
                <p><strong>Address:</strong> 123 Learning Street, Knowledge City, India</p>
                <p><strong>Email:</strong> contact@brightfuture.edu</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
            </div>

            <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15781.7858411561!2d76.88116475000001!3d8.552994700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05befbad688f91%3A0x58e8fb83cf5ddf6a!2sTechnopark%20Trivandrum!5e0!3m2!1sen!2sin!4v1752820827413!5m2!1sen!2sin" width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <form className="contact-form">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            </div>

    )
}

export default Contact;