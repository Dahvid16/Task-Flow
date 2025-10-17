import React, { useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaFacebookF, FaMapMarker, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="sec text-primary-foreground py-16 px-16 md:py-20" style={{borderRadius: "50px 50px 0 0"}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-6 text-gradient-gold">Get In Touch</h4>                   
            {isSubmitted ? (
              <div className="card-elegant text-center bg-green-50 border-green-200">
                <FaCheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700 mb-4">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-input bg-white/10 border-white/20 text-primary-foreground placeholder-black/70 blurEffect" style={{borderRadius: '20px'}}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-input bg-white/10 border-white/20 text-primary-foreground placeholder-black/70 blurEffect" style={{borderRadius: '20px'}}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="form-textarea bg-white/10 border-white/20 text-primary-foreground placeholder-black/70 blurEffect resize-none"
                  style={{ borderRadius: '20px' }}
                  rows={6}
                  required
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="flex items-center space-x-2 pricingBtn px-8 py-[0.85rem] mt-3 font-bold text-white/70" style={{fontSize: '1.1rem'}}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                  <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
            )}
          </div>

          {/* Contact Information & Links */}
          <div className="space-y-8">
          {/* Logo and Description */}
            <div>
              <h3>
              <a href="#Home" className="flex items-center space-x-2 mb-4 text-black" style={{textDecoration: 'none'}}>
                TaskFlow
              </a>
              </h3>
              <p className="text-body text-white/80">
                TaskFlow is an all-in-one task management platform — organize, prioritize, and track your work effortlessly using an intuitive interface and powerful integrations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="h-5 w-5 text-gold" />
                <span className='cursor-pointer hover:text-gold transition-all duration-300'>
                  +234 90 *** *** ***
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-gold" />
                <span className='cursor-pointer hover:text-gold transition-all duration-300'>
                  <a href="mailto:test.taskflow@gmail.com" className='text-black' style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                    test.taskflow@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarker className="h-5 w-5 text-gold" />
                <span className='cursor-pointer hover:text-gold transition-all duration-300'>Lagos, Nigeria</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="#" className="p-3 blurEffect rounded-lg" aria-label='Visit our FaceBook Page'  style={{borderRadius: '12px'}}>
                <FaFacebookF className="h-6 w-6 text-black/80"/>
              </a>
              <a href="https://wa.me/2348162016410?text=Good%20Day%20Sir.%20I%20got%20your%20number%20from%20your%20website.%20I.." className="p-3 bg-white/10 rounded-lg hover:bg-gold hover:text-primary transition-all duration-300 blurEffect"  style={{borderRadius: '12px'}} aria-label='Visit our Whatsapp Page'>
                <FaWhatsapp className="h-6 w-6 text-black/80" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="">
          <p className='hidden font-bold italic text-lg'>Dahvidweb</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;