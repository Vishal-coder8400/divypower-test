import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sol from "../Images/Sol.jpg";

const solutionData = [
  {
    title: "Homeowner Solutions",
    content: `
Enjoy reliable, eco-friendly energy at home while cutting down your electricity bills and ensuring your family's comfort.

• Save up to 80% on monthly electricity costs  
• Battery backup for uninterrupted power during outages  
• Free site survey and customized solar system design  
• Net metering support to earn credits from surplus energy  
• Guidance on government subsidies to reduce upfront costs
    `,
  },
  {
    title: "Business Owner Solutions",
    content: `
Empower your business with solar energy that lowers costs, boosts profits, and strengthens your green image.

• Reduce operational costs with long-term energy savings  
• Scalable systems tailored to your business size and needs  
• Show customers your commitment to a sustainable future  
• Stay productive with battery backup and uninterrupted power  
• Assistance with government incentives and easy financing options
    `,
  },
  {
    title: "Utility-Scale Owner Solutions",
    content: `
Harness the power of solar for large-scale energy production and long-term profitability.

• High-capacity solar farms for maximum energy generation  
• Advanced grid integration and net metering solutions  
• Smart monitoring systems for real-time performance tracking  
• Reduced carbon footprint with renewable, clean energy  
• Support with policy compliance, land use, and subsidy benefits
    `,
  },
  {
    title: "Smart String ESS Solutions",
    content: `
Maximize efficiency and reliability with next-generation Energy Storage Systems (ESS) that keep you powered, always.

• High-efficiency battery storage for consistent power supply  
• Optimized to reduce energy wastage and lower costs  
• Seamless integration with rooftop and utility-scale systems  
• Intelligent load management for peak and off-peak hours  
• Reliable and safe with advanced protection technology
    `,
  },
  {
    title: "Smart Micro-grid Solutions",
    content: `
Build self-sustaining communities and businesses with micro-grids that deliver energy independence and resilience.

• Localized power grids for homes, businesses, and communities  
• Energy independence from unpredictable power cuts  
• Integration with renewable sources like solar and wind  
• Efficient energy distribution with minimal transmission losses  
• Smart monitoring for stable, uninterrupted electricity supply
    `,
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

const SolarSolutions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <main className="bg-gradient-to-b from-white via-orange-50/30 to-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2 relative overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>

      <motion.section
        className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >

        {/* ------------------ LEFT SIDE ------------------ */}
        <motion.div
          className="lg:w-1/2 w-full flex flex-col items-center space-y-6"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Image with Gradient Border */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <img
              src={Sol}
              alt="Solar"
              className="relative w-full max-w-[420px] rounded-2xl shadow-2xl object-cover border-4 border-white"
            />
          </div>

          {/* Feature Cards Grid */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg">

              <motion.div
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl shadow-lg border border-orange-200/50 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <i className="fas fa-percent text-white text-sm"></i>
                </div>
                <p className="text-xs font-bold text-gray-800">0% EMI</p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl shadow-lg border border-orange-200/50 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <i className="fas fa-money-bill-wave text-white text-sm"></i>
                </div>
                <p className="text-xs font-bold text-gray-800">
                  From <br /> ₹1,999/mo
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl shadow-lg border border-orange-200/50 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <i className="fas fa-shield-alt text-white text-sm"></i>
                </div>
                <p className="text-xs font-bold text-gray-800">Govt. Subsidy</p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl shadow-lg border border-orange-200/50 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <i className="fas fa-award text-white text-sm"></i>
                </div>
                <p className="text-xs font-bold text-gray-800">
                  25 Year <br /> Warranty
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* ------------------ RIGHT SIDE ------------------ */}
        <motion.div
          className="lg:w-1/2 w-full bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-orange-200/50 flex flex-col relative overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Decorative Corner Gradient */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-bl-full"></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-50 px-4 py-2 rounded-full border border-orange-200/50 w-fit mb-4 relative z-10">
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent font-bold text-xs tracking-wider uppercase">
              Our Solutions
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[34px] font-extrabold leading-tight relative z-10">
            <span className="text-[#090971]">We don't believe in just installing Solar</span>
            <br />
            <span className="text-[#090971]">We Believe in Solving Problems</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              We Engineer Smart Power Solutions.
            </span>
          </h1>

          <p className="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed relative z-10">
            At DIVY Power, we believe solar isn't just a product — it's your power freedom.
            From site assessment to installation and lifelong support, we handle it all.
          </p>

          <div className="border-t border-gradient-to-r from-orange-200 to-yellow-200 my-6"></div>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mb-6 relative z-10">
            
            <motion.div 
              className="flex items-center gap-4 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <i className="fas fa-bolt text-white text-xl"></i>
              </div>
              <div>
                <p className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  7,220 KWh
                </p>
                <p className="text-gray-600 text-xs sm:text-sm font-medium">Systems Installed</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <i className="fas fa-leaf text-white text-xl"></i>
              </div>
              <div>
                <p className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  15,818,000 KG
                </p>
                <p className="text-gray-600 text-xs sm:text-sm font-medium">CO₂ Saved / Year</p>
              </div>
            </motion.div>

          </div>

          <div className="border-t border-gray-200 mb-6"></div>

          {/* DROPDOWNS */}
          <div className="space-y-3 relative z-10">
            {solutionData.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-orange-50/30 rounded-xl border-2 border-orange-200/50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`w-full flex justify-between items-center px-5 py-4 text-base font-bold transition-colors ${
                    openIndex === index
                      ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                      : "text-[#0F172A] hover:bg-orange-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${
                      openIndex === index ? "bg-white" : "bg-gradient-to-r from-orange-500 to-yellow-500"
                    }`}></span>
                    {item.title}
                  </span>
                  <motion.i
                    className={`fas fa-chevron-down text-sm`}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.i>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="px-5 pb-5 pt-2 text-sm sm:text-base text-gray-700 whitespace-pre-line bg-white leading-relaxed"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      transition={{ duration: 0.3 }}
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default SolarSolutions;