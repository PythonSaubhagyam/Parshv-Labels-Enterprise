import React, { useState } from "react";
import { Phone, MapPin, Mail, Globe, User, Tag, MessageSquare, Send, Lock, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Thank you for your message. We will respond within 24 hours.");
  };

  return (
    <main className="contact-page">
      {/* Hero Section Redesign */}
      <section className="contact-hero-redesign">
        <div className="hero-redesign-overlay"></div>
        <div className="container hero-redesign-content">
          <h1 className="hero-redesign-title">
            GET IN <span className="yellow-accent-text">TOUCH</span>
          </h1>
          <div className="hero-redesign-underline"></div>
          <p className="hero-redesign-desc">
            We’d love to hear from you. Whether you have questions about our garment labels, need a quote, or want to discuss your specific requirements, our team is here to help.
          </p>
        </div>
      </section>

      {/* Overlapping Contact Card Section */}
      <section className="contact-card-section">
        <div className="container">
          <div className="contact-card-wrapper">
            
            {/* Left Panel: Contact Info (Dark Theme) */}
            <div className="contact-details-panel">
              <h3 className="panel-title">Contact Information</h3>
              <p className="panel-desc">Reach out to us directly through any of the channels below.</p>
              
              <div className="panel-info-items">
                <div className="panel-info-item">
                  <div className="panel-info-icon"><MapPin size={20} /></div>
                  <div className="panel-info-text">
                    <h4>Location</h4>
                    <p>19, Kameshwar Estate, Opp. Ashish Estate, Odhav, Ahmedabad, Gujarat 382415, India.</p>
                  </div>
                </div>

                <div className="panel-info-item">
                  <div className="panel-info-icon"><Phone size={20} /></div>
                  <div className="panel-info-text">
                    <h4>Phone</h4>
                    <p>+91 79 4009 3225 / 26<br />+91 94084 78601</p>
                  </div>
                </div>

                <div className="panel-info-item">
                  <div className="panel-info-icon"><Mail size={20} /></div>
                  <div className="panel-info-text">
                    <h4>Email</h4>
                    <p>sales@parshvlabels.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="panel-social-links">
                <a href="#" className="social-icon" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Right Panel: Contact Form (Light Theme) */}
            <div className="contact-form-panel">
              <h3 className="panel-title-dark">Send Us a Message</h3>
              <form className="contact-form-modern" onSubmit={handleSubmit}>
                <div className="form-row-modern">
                  <div className="form-group-modern">
                    <div className="input-icon-wrapper">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group-modern">
                    <div className="input-icon-wrapper">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group-modern">
                  <div className="input-icon-wrapper">
                    <Tag size={18} className="input-icon" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group-modern">
                  <div className="input-icon-wrapper textarea-wrapper">
                    <MessageSquare size={18} className="input-icon" />
                    <textarea
                      name="message"
                      placeholder="Your Message *"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-modern-submit">
                  SEND MESSAGE <Send size={16} />
                </button>

                <div className="privacy-text" style={{ marginTop: '15px' }}>
                  <Lock size={14} className="privacy-icon" />
                  <span>Your information is safe with us. We never share your details.</span>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4585906154557!2d72.50289707430122!3d23.006928316913733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b7cb29c877%3A0x2269b6ef871dcdd0!2sParshv%20Labels%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1787206117522!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Parshv Labels Pvt Ltd Location"
        ></iframe>
      </section>
    </main>
  );
}
