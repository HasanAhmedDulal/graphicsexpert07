
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [messageLength, setMessageLength] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'message') {
      setMessageLength(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      alert('Message cannot exceed 500 characters');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d4d0km1pkd5ovn9u6150', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          project: '',
          budget: '',
          message: ''
        });
        setMessageLength(0);
      } else {
        setSubmitStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "ri-mail-line",
      title: "Email",
      content: "hello@creativestudiopro.com"
    },
    {
      icon: "ri-phone-line", 
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    {
      icon: "ri-map-pin-line",
      title: "Location",
      content: "123 Creative Street, New York, NY 10001"
    }
  ];

  const benefits = [
    "Fast turnaround times",
    "Unlimited revisions", 
    "24/7 support",
    "100% satisfaction guarantee"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className={`${info.icon} w-6 h-6 flex items-center justify-center text-blue-600`}></i>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <form id="contact-form" data-readdy-form={true} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-900 font-medium mb-2">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-900 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="project" className="block text-gray-900 font-medium mb-2">Project Type</label>
                    <select
                      id="project"
                      name="project"
                      required
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Select project type</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="3d">3D Design & Visualization</option>
                      <option value="graphic">Graphic Design</option>
                      <option value="web">Web Development</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-gray-900 font-medium mb-2">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Select budget range</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000+">$25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-medium mb-2">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={500}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none text-sm"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                  <p className="text-gray-500 text-sm mt-1">{messageLength}/500 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  <span className="flex items-center justify-center">
                    <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center mr-2"></i>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>

                {submitStatus && (
                  <div className={`p-4 rounded-lg text-center ${submitStatus.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
