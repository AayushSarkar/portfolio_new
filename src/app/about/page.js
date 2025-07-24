'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can integrate EmailJS, Formspree, or a backend API here
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0f172a] text-[#e2e8f0] px-6 py-16 flex justify-center items-center"
    >
      <div className="max-w-xl w-full bg-[#1e293b] p-8 rounded-xl shadow-lg border border-[#22d3ee]">
        <h2 className="text-3xl font-bold text-[#22d3ee] mb-6 text-center">Contact Me</h2>
        <p className="text-gray-300 mb-6 text-center">
          Let&apos;s get in touch — Don&apos;t hesitate to reach out!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-[#0f172a] border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22d3ee] text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#0f172a] border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22d3ee] text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-[#0f172a] border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22d3ee] text-white"
          />
          <button
            type="submit"
            className="bg-[#22d3ee] hover:bg-[#0ea5e9] text-black font-semibold py-2 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
