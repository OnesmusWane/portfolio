import React, { useState } from 'react';
import { SendIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };
  return <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-center md:flex-row gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="md:w-2/5">
            <div className="bg-indigo-600 dark:bg-indigo-700 text-white rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <p className="mb-8 opacity-90">
                <p className="mb-8 opacity-90">
                  Got a question or project in mind? Contact me directly,  I’m just a message away!
                </p>

              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-indigo-500/30 rounded-lg mr-4">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email</p>
                    <a href="mailto:onesmuswane@gmail.com" className="hover:underline">
                      onesmuswane@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-indigo-500/30 rounded-lg mr-4">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Phone & WhatsApp</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <a
                        href="tel:+254743658188"
                        className="hover:underline text-white"
                      >
                        Call: +254 743 658 188
                      </a>
                      <span className="hidden sm:inline text-gray-400">|</span>
                      <a
                        href="https://wa.me/254743658188"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>

                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-indigo-500/30 rounded-lg mr-4">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Location</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-indigo-500/30">
                <p className="font-medium mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/onesmus-wane-9a19a61a0/" target="_blank" className="p-2 bg-indigo-500/30 rounded-full hover:bg-indigo-500/50 transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 
                      2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 
                      17.34V10.67H5.67V17.34H8.34M7 
                      9.44A1.33 1.33 0 1 0 7 6.78A1.33 1.33 0 0 0 
                      7 9.44M18.33 17.34V13.5C18.33 11.5 
                      17.22 10.55 15.78 10.55C14.67 10.55 
                      14.11 11.22 13.83 11.72V10.67H11.17V17.34H13.83V13.78C13.83 
                      13 14.06 12.28 15 12.28C15.91 12.28 15.94 13.06 
                      15.94 13.83V17.34H18.33Z" />
                    </svg>
                  </a>
                  <a href="https://github.com/OnesmusWane"  target="_blank" className="p-2 bg-indigo-500/30 rounded-full hover:bg-indigo-500/50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://x.com/OnesmusWane"  target="_blank" className="p-2 bg-indigo-500/30 rounded-full hover:bg-indigo-500/50 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor"  viewBox="0 0 24 24"  aria-hidden="true"  >
                      <path d="M18.244 2H21.5l-7.68 8.77L22 22h-6.213l-4.867-5.82L5.5 22H2.24l8.2-9.377L2 2h6.274l4.347 5.166L18.244 2zm-2.177 18h1.206L8.03 4H6.753l9.314 16z" />
                    </svg>
                  </a>
                  <a  href="#"  target="_blank" className="p-2 bg-indigo-500/30 rounded-full hover:bg-indigo-500/50 transition-colors"  target="_blank" rel="noopener noreferrer" >
                    <svg className="w-5 h-5" fill="currentColor"  viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 
                      16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 
                      7.75 2zm0 1.5A4.26 4.26 0 0 0 3.5 7.75v8.5A4.26 4.26 0 0 0 
                      7.75 20.5h8.5A4.26 4.26 0 0 0 20.5 16.25v-8.5A4.26 4.26 0 0 0 
                      16.25 3.5h-8.5zm4.25 4a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 
                      0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5zm5-1.75a1 
                      1 0 1 1 0 2a1 1 0 0 1 0-2z" />
                    </svg>
                </a>
                <a href="#"   target="_blank" className="p-2 bg-indigo-500/30 rounded-full hover:bg-indigo-500/50 transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor"  viewBox="0 0 24 24" aria-hidden="true"  >
                    <path d="M12.75 2a5.25 5.25 0 0 0 5.25 5.25v2.05a7.29 7.29 0 0 1-3.16-.7v6.69a5.59 5.59 0 1 1-5.59-5.59h.27v2.06a3.54 3.54 0 1 0 3.32 3.53V2h2.91z" />
                  </svg>
                </a>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="md:w-3/5 hidden">
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"></textarea>
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} className={`w-full flex justify-center items-center px-6 py-3 rounded-lg text-white transition-colors ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}>
                  {isSubmitting ? <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span> : <span className="inline-flex items-center">
                      <SendIcon size={18} className="mr-2" />
                      Send Message
                    </span>}
                </button>
                {submitStatus === 'success' && <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
}