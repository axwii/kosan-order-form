"use client";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 mt-10 text-center">
      <div className="mb-4">
        <p><a href="https://www.google.com/maps/place/Kosan+Gascenter+K%C3%B8benhavn/@55.6657525,12.3565119,20.72z/data=!4m15!1m8!3m7!1s0x46525753ea463e63:0x12afcf28e30222ff!2sDjursvang+6A,+2620+Albertslund!3b1!8m2!3d55.6657858!4d12.3563085!16s%2Fg%2F11b8v5dnp_!3m5!1s0x4652576cca0cc84d:0xb6a9dbce8a2a07f6!8m2!3d55.6657902!4d12.3563237!16s%2Fg%2F11gr4gc09f?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" target="_blank">Djursvang 6 A, Albertslund, Denmark, 2620</a></p>      
        <p><a href="mailto:mail@kosan-albertslund.dk">mail@kosan-albertslund.dk</a></p>
        <p><a href="tel:+4543623020">43 62 30 20</a></p>
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