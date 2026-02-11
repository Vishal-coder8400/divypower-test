import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../Images/W12.JPG";
import ConsultationPopup from "./ConsultationPopup";

const FullScreenVideo = ({ mode = "cover" }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen relative overflow-hidden bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50">
        {/* Video Background */}
       {/* Image Background */}

{/* Image Background */}
<img
  src={heroImage}
  alt="Solar Panel Installation"
  className="
    absolute top-0 left-0 w-full h-full object-cover
    object-[50%_100%] scale-150
    md:object-[50%_95%] md:scale-125
  "
/>


        {/* Gradient Overlay - Bottom to Top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 z-10">
          <div className="max-w-5xl mx-auto text-center w-full">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 mb-3 sm:mb-4 md:mb-6"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Powering Your Future with Solar
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2"
            >
              Transform Sunlight Into
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Savings & Sustainability
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Experience premium solar solutions with 25-year warranty, government subsidies, and expert installation
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              {/* Primary Button - Opens Popup */}
              <button 
                onClick={handleOpenPopup}
                className="group relative w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-sm md:text-base rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Free Consultation
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Secondary Button */}
              <button className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white font-bold text-sm md:text-base rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Our Story
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 sm:mt-8 md:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-white/80 text-xs sm:text-sm px-4"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">25 Years Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Govt. Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Subsidy Available</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator (Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-wider">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Gradient Accent - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500"></div>
      </div>

      {/* Consultation Popup */}
      <ConsultationPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </>
  );
};

export default FullScreenVideo;