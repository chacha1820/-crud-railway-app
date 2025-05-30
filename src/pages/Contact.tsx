import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare } from 'lucide-react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    let formErrors: FormErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      formErrors.subject = 'Subject is required';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(formErrors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const serviceID = 'service_xh1ego2';    // replace with your EmailJS service ID
        const templateID = 'template_2a0av8s';  // replace with your EmailJS template ID
        const userID = 'TGPJ3xyYf4RPu5VxR';       // replace with your EmailJS public key

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        };

        await emailjs.send(serviceID, templateID, templateParams, userID);

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        console.error('Failed to send message:', error);
        // Optional: You can add user feedback here for failed submission
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>
            Have a question or want to work together? Fill out the form below or use my contact information.
            I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="contact-method">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+63 967 671 5310</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>charitymaerosal18@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Malaybalay City, Bukidnon, 8700</p>
                <p>Philippines</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <MessageSquare size={24} />
              </div>
              <div className="contact-details">
                <h4>Social Media</h4>
                <div className="social-links">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <div className="form-error">{errors.subject}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <div className="success-message">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="location-map">
          <h3>Find Me Here</h3>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63241.84516849095!2d125.11005035217072!3d8.157162124026656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2c3cf528833%3A0xad6b461ccbd085ea!2sMalaybalay%2C%20Bukidnon!5e0!3m2!1sen!2sph!4v1685531651191!5m2!1sen!2sph" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Malaybalay City Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
