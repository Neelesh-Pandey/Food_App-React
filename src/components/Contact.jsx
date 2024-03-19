// ContactUs.js
import React from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Social Media Links
        </h1>
        <div className="flex justify-center mb-8">
          <p className="text-lg">Connect with us on social media:</p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/neelesh-pandey-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-500 mx-4"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Neelesh-Pandey/Neelesh-Pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-800 mx-4"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/NeeleshPandey/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-yellow-500 mx-4"
            title="LeetCode"
          >
            <FaCode />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
