// Contact.js
import React from 'react';
import './Contact.css'; // Make sure to create a Contact.css file for styling
import imageSrc from './contactphoto.JPG';


function Contact() {
  return (
    <div>
        <div className="contact-container">
            <div className="contact-image-container">
                <img src={imageSrc} alt="Owners" className="contact-image" /> 
            </div>

            

            <div className="contact-form-container">
            <h4>Please use this form to book a shoot with me</h4>
            <form className="contact-form">
                <div className="form-field">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" required />
                </div>
                
                <div className="form-field">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" required />
                </div>
                
                <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" />
                </div>
                
                <div className="form-field">
                <label htmlFor="message">What's on your mind? *</label>
                <textarea id="message" required></textarea>
                </div>
                
                <div className="form-field">
                <label htmlFor="file-upload">Attach Image (JPG, PNG, PDF max size 5Mb)</label>
                <input type="file" id="file-upload" />
                </div>
                
                <button type="submit" className="submit-button">SUBMIT</button>
            </form>
         </div>
        </div>
    </div>
  );
}

export default Contact;
