import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import faqImage from "../Images/j1.png"; // your Indian-style FAQ image

const faqData = {
  General: [
    {
      question: "What makes Divy Power different from other solar companies?",
      answer:
        "We are an authorized partner of Tata Power Solar with over a decade of experience in premium solar installations.",
    },
    {
      question: "Do you provide complete solar project solutions?",
      answer:
        "Yes, we handle everything: site survey, design, installation, approvals, and handover.",
    },
    {
      question: "Sarkari subsidy kaise milti hai?",
      answer:
        "Subsidy online apply karna hota hai ya approved vendor ke through. Hum aapki poori madad karte hain.",
    },
    {
      question: "Can I get a customized solar solution for my home or business?",
      answer:
        "Bilkul! Hum aapke load, location aur budget ke according solar system design karte hain.",
    },
    {
      question: "What is included in your AMC?",
      answer:
        "AMC me regular cleaning, system health check-up, performance tracking aur panel inspection shamil hain.",
    },
    {
      question: "How safe are your solar systems?",
      answer:
        "Divy Power UL-certified components use karta hai aur high standard safety practices follow karta hai.",
    },
    {
      question: "What is the lifespan of a solar panel system?",
      answer:
        "Solar panels approx 25–30 saal tak chal sakte hain proper maintenance ke saath.",
    },
    {
      question: "Do you provide gensets along with solar systems?",
      answer: "Haan, hum Diesel/Petrol aur Gas gensets bhi provide karte hain.",
    },
    {
      question: "How long does it take to install a solar system?",
      answer:
        "Ghar ke liye 2–5 din, commercial systems me size ke hisaab se installation ka time hota hai.",
    },
    {
      question: "Do solar systems work during cloudy weather or at night?",
      answer:
        "Cloudy weather me production kam hota hai, raat ko solar kaam nahi karta (battery system required).",
    },
  ],

  "Solar Maintenance": [
    {
      question: "Can Solar projects damage my roof?",
      answer:
        "Divy Power non-penetrating structures aur waterproofing solutions use karta hai, jisse roof safe rehti hai.",
    },
    {
      question: "Do I need to clean my Solar plant?",
      answer:
        "Haan, panel ko mahine me 1–2 baar soft brush ya cloth se clean karna chahiye.",
    },
  ],

  "Solar Economics": [
    {
      question: "How much does a solar plant cost?",
      answer:
        "Cost system ke size, structure aur components par depend karta hai. Hum multiple budget options dete hain.",
    },
    {
      question: "Are financing options available?",
      answer:
        "Divy Power EMI aur collateral-free loan facility provide karta hai tie-up banks ke through.",
    },
  ],
};

const TabsFAQ = () => {
  const tabs = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  return (
  <section className="w-full bg-gradient-to-br from-white via-orange-50/30 to-white py-1 md:py-4 px-4 font-sans relative overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          {/* Badge */}
        

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#090971] mb-2 sm:mb-3 leading-tight px-4">
            Frequently Asked <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Find answers to common questions about our solar solutions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b-2 border-gray-200 pb-2 mb-10 overflow-x-auto gap-2 sm:gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-t-lg sm:rounded-t-xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 border-2 border-gray-200 hover:border-orange-300"
                }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">

          {/* Left FAQs */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {faqData[activeTab].map((item, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`bg-white rounded-xl sm:rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    openIndex === index 
                      ? "border-orange-400 shadow-lg shadow-orange-500/20" 
                      : "border-gray-200 hover:border-orange-300 shadow-md"
                  }`}
                >
                  <div
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex items-center justify-between cursor-pointer p-4 sm:p-5 group"
                  >
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#0F172A] pr-3 sm:pr-4 group-hover:text-orange-600 transition-colors leading-snug">
                      {item.question}
                    </h3>

                    <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? "bg-gradient-to-br from-orange-500 to-yellow-500 rotate-180" 
                        : "bg-gray-100 group-hover:bg-orange-100"
                    }`}>
                      {openIndex === index ? (
                        <Minus size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                      ) : (
                        <Plus size={16} className="sm:w-[18px] sm:h-[18px] text-orange-600" />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                          <div className="h-0.5 w-10 sm:w-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mb-2 sm:mb-3"></div>
                          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Image with Gradient Background */}
          <div className="relative flex justify-center items-center lg:items-start mt-8 lg:mt-0">
            {/* Decorative Gradient Circles */}
            <div className="absolute top-5 sm:top-8 md:top-10 right-5 sm:right-8 md:right-10 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-br from-orange-400/30 to-yellow-400/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-5 sm:bottom-8 md:bottom-10 left-5 sm:left-8 md:left-10 w-40 sm:w-48 md:w-52 h-40 sm:h-48 md:h-52 bg-gradient-to-tl from-orange-400/20 to-yellow-400/20 rounded-full blur-2xl"></div>
            
            {/* Animated Circles */}
            <div className="absolute top-12 sm:top-16 md:top-20 right-12 sm:right-16 md:right-20 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 border-2 border-orange-400/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-12 sm:left-16 md:left-20 w-14 sm:w-16 md:w-20 lg:w-24 h-14 sm:h-16 md:h-20 lg:h-24 border-2 border-yellow-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Image Container */}
            <motion.div 
              className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] px-4 sm:px-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 rounded-full blur opacity-30"></div>
                
                <img
                  src={faqImage}
                  alt="FAQ Expert"
                  className="relative w-full drop-shadow-2xl"
                />
              </div>

              {/* Info Card Overlay */}
              <motion.div 
                className="absolute bottom-4 sm:bottom-6 md:bottom-10 -left-4 sm:-left-6 md:-left-10 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-2.5 sm:p-3 md:p-4 border-2 border-orange-200/50 max-w-[140px] sm:max-w-[160px] md:max-w-none"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-[10px] sm:text-xs md:text-sm">24/7 Support</p>
                    <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-600">Always here to help</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div 
                className="absolute top-4 sm:top-6 md:top-10 -right-4 sm:-right-6 md:-right-10 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-2.5 sm:p-3 md:p-4 border-2 border-orange-200/50 max-w-[140px] sm:max-w-[160px] md:max-w-none"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-[10px] sm:text-xs md:text-sm">1000+ Projects</p>
                    <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-600">Successfully delivered</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TabsFAQ;