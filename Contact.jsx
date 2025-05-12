import React, { useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your email backend or service like EmailJS / Formspree
    alert("Message Sent! (mock)");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Header/>
    <div className="max-w-2xl mx-auto py-10 px-4">
      
      <h2 className="text-2xl font-bold mb-4">📬 Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          required
          type="text"
          placeholder="Your Name"
          className="p-2 rounded border dark:bg-gray-700"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Your Email"
          className="p-2 rounded border dark:bg-gray-700"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          required
          placeholder="Your Message"
          className="p-2 rounded border dark:bg-gray-700"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-fit">
          Send Message
        </button>
      </form>
    </div>
    </>
  );
};

export default Contact;
