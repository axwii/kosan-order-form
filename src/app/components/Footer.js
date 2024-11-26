"use client";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 shadow-md text-center">
      <div className="mb-4">
        <p>Email: mail@kosan-albertslund.dk</p>
        <p>Phone: +4543623020</p>
        <p>Address: Djursvang 6 A, Albertslund, Denmark, 2620</p>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-700 text-2xl" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 text-2xl" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;