"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaCalendarAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import handshakeAnimation from "@/assets/Thanks message.json";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ContactPage() {
  const [showAlert, setShowAlert] = useState(false);

  const handleMeetClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-16 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-cyan-400 drop-shadow-lg">
        Get in Touch
      </h1>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 w-full max-w-4xl shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Lottie Animation */}
          <div className="flex-1 flex justify-center">
            {/* Safe to dynamically import, SSR disabled */}
            <Lottie animationData={handshakeAnimation} className="w-72 md:w-84 h-auto" loop />
          </div>

          {/* Contact Info */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-cyan-300">Let's Connect</h2>
            <p className="text-gray-300 text-sm">
              Whether you want to collaborate, chat tech, or just say hi, feel free to reach out!
            </p>

            <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <a
                href="https://linkedin.com/in/aayushsarkar001"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/AayushSarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:aayush.sarkar001@gmail.com"
                className="hover:text-red-400 transition-transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
              <Button
                as="a"
                href="/resume.pdf"
                download
                variant="shadow"
                className="flex items-center gap-2 px-6 py-8 font-medium rounded-xl bg-[#7c3aed] text-[#e2e8f0] hover:bg-[#8b5cf6] hover:text-white transition-all duration-300 shadow-lg hover:shadow-sky-400/30"
              >
                <FaDownload className="text-4xl" />
                Download Resume
              </Button>

              <Button
                onPress={handleMeetClick}
                variant="shadow"
                className="flex items-center gap-3 px-6 py-8 font-medium rounded-xl bg-[#7c3aed] text-[#e2e8f0] hover:bg-[#8b5cf6] hover:text-white transition-all duration-300 shadow-lg hover:shadow-sky-400/30"
              >
                <FaCalendarAlt className="text-4xl" />
                Schedule a Meet
              </Button>
            </div>

            {showAlert && (
              <div className="text-sm text-yellow-300 animate-fade-in mt-2">
                🚧 Calendly scheduling is coming soon! Stay tuned.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
