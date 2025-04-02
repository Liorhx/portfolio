import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    recruiter_name: "",
    recruiter_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_n77hkwb",
        "template_77gl1rf",
        formData,
        "A4vK4WwHAKrAjVt6D"
      )
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message."));
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-900">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="recruiter_name"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="recruiter_email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
