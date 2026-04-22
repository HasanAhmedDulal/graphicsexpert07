'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function ThreeDDesignOrderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceType: '3D Design',
    package: 'Standard',
    projectDetails: '',
    numberOfRenders: '',
    deadline: '',
    budget: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div className="py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Start Your 3D Design Project</h1>
              <p className="text-xl text-gray-600">
                Tell us about your requirements and we'll get back with a custom quote
              </p>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Selected Service: 3D Design</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Package Options:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-2"></i>
                      Basic - Starting at $199/render
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-2"></i>
                      Standard - Starting at $399/render
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-2"></i>
                      Premium - Starting at $799/render
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What's Included:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-2"></i>
                      Photorealistic Renders
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-2"></i>
                      Multiple Revisions
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-2"></i>
                      High-Resolution Files
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-2"></i>
                      3D Model Files
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Brief Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Company / Brand Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Service Type *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm pr-8 cursor-pointer"
                    >
                      <option value="3D Design">3D Design</option>
                      <option value="Interior Rendering">Interior Rendering</option>
                      <option value="Exterior Rendering">Exterior Rendering</option>
                      <option value="Product Visualization">Product Visualization</option>
                      <option value="Architectural Walkthrough">Architectural Walkthrough</option>
                      <option value="3D Modeling">3D Modeling</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Package *</label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm pr-8 cursor-pointer"
                    >
                      <option value="Basic">Basic</option>
                      <option value="Standard">Standard</option>
                      <option value="Premium">Premium</option>
                      <option value="Custom">Custom Quote</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Project Details *</label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm resize-none"
                    placeholder="Please describe your 3D project requirements, dimensions, materials, lighting preferences, and any specific details..."
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-2">{formData.projectDetails.length}/500 characters</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Number of Renders</label>
                    <input
                      type="text"
                      name="numberOfRenders"
                      value={formData.numberOfRenders}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="e.g., 3-5 renders"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Deadline</label>
                    <input
                      type="text"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="e.g., 1-2 weeks"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Budget Range</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="e.g., $500-$1500"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">File Upload</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    If you have floor plans, CAD files, reference images, or other files, please email them to: projects@yourcompany.com
                  </p>
                  <p className="text-sm text-gray-500">
                    Include your name and project details in the email subject line
                  </p>
                </div>

                {submitted && (
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                    <i className="ri-check-line w-12 h-12 flex items-center justify-center text-green-500 text-5xl mx-auto mb-3"></i>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Brief Submitted Successfully!</h3>
                    <p className="text-gray-600">We will respond within 12-24 hours with a custom quote.</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer shadow-lg"
                >
                  Submit Brief
                </button>

                <p className="text-center text-gray-600 text-sm">
                  We will respond within 12-24 hours with a detailed quote and timeline
                </p>
              </form>
            </div>

            <div className="text-center mt-8">
              <Link href="/">
                <button className="text-purple-600 hover:text-purple-700 font-semibold cursor-pointer">
                  <i className="ri-arrow-left-line mr-2"></i>
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
