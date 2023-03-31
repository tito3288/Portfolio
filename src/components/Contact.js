import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-background">
      <form className="contact-form">
        <h1 className="contact-title">Contact</h1>
        <motion.span
          className="contact-title-dot"
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", damping: 5 }}
        >
          .
        </motion.span>

        <input className="mb-1 contact-input" placeholder="Name"></input>
        <input className="mb-1 contact-input" placeholder="Email"></input>
        <input className="mb-1 contact-input" placeholder="Subject"></input>
        <textarea
          className="contact-textarea"
          placeholder="Enter Message"
        ></textarea>
        <button
          className="my-4"
          type="submit"
          style={{
            marginLeft: "70%",
            backgroundColor: "transparent",
            border: "solid #d2001a",
            color: "gray",
            padding: "7px 20px",
            fontWeight: "bold",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
