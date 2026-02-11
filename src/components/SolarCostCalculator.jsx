import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SolarCostCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ bill: "" });
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    setFormData({ bill: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://solar-6.onrender.com/api/submit", {
        bill: formData.bill,
      });
      setResults(res.data);
      setShowResults(true);
      toast.success("Calculation successful!");
      setFormData({ bill: "" });
    } catch (err) {
      toast.error("Please provide valid Electricity Bill");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-orange-50/40 via-white to-yellow-50/40 py-1 md:py-6 px-4 sm:px-6 md:px-10 lg:px-16 GetFontSol relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SECTION */}
          <motion.div variants={itemVariants} className="space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-50 px-5 py-2.5 rounded-full border border-orange-200/50">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent font-bold text-sm tracking-wide uppercase">
                Solar Calculator
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-[#090971]">Power Your Home</span>
              <br />
              <span className="text-[#090971]">With </span>
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Solar
              </span>
            </h1>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Discover how affordable solar can be. Enter your details to get your
              personalized cost estimate and start saving!
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-800 text-base font-medium">
                  Reduce your carbon footprint
                </p>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-800 text-base font-medium">Lock in energy savings</p>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-gray-800 text-base font-medium">
                  Maximize your roof potential
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 pt-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-orange-200/50">
                  <h3 className="text-[#C4302C] text-3xl lg:text-4xl font-extrabold">2500+</h3>
                  <p className="text-gray-600 text-xs font-semibold tracking-wide uppercase">
                    SYSTEMS INSTALLED
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-orange-200/50">
                  <h3 className="text-[#C4302C] text-3xl lg:text-4xl font-extrabold">45%</h3>
                  <p className="text-gray-600 text-xs font-semibold tracking-wide uppercase">
                    AVG. SAVINGS
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CALCULATOR */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-orange-200/50 w-full relative overflow-hidden"
          >
            {/* Decorative Corner Gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-bl-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              
              {/* LEFT INPUT SIDE */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#0F172A] leading-snug">
                  Monthly Electricity Bill
                </h3>
                <p className="text-gray-500 text-sm mt-2 mb-6">
                  Enter bill to see savings.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl blur-sm"></div>
                    <div className="relative border-2 border-orange-200 rounded-xl px-4 py-4 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 flex items-center focus-within:border-orange-400 transition-colors">
                      <span className="text-orange-600 text-xl font-bold">₹</span>
                      <input
                        type="text"
                        name="bill"
                        placeholder="e.g., 3000"
                        value={formData.bill}
                        onChange={handleChange}
                        className="w-full ml-3 bg-transparent outline-none text-gray-800 text-base font-medium placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 hover:from-orange-600 hover:via-orange-500 hover:to-yellow-600 transition-all font-semibold text-white rounded-xl py-4 text-base shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Calculating...
                      </>
                    ) : (
                      <>
                        Calculate Savings
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* RIGHT CIRCLE SIDE */}
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-base lg:text-lg font-semibold text-[#0F172A] mb-4">
                  Electricity Saved
                </h4>

                <div className="relative w-40 h-40 mb-6">
                  {/* Background Circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      stroke="#E5E7EB"
                      strokeWidth="14"
                      fill="transparent"
                    ></circle>

                    {/* Gradient Progress Circle */}
                    <defs>
                      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF6B35" />
                        <stop offset="50%" stopColor="#FF8C61" />
                        <stop offset="100%" stopColor="#FFD93D" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="80"
                      cy="80"
                      r="60"
                      stroke="url(#progressGradient)"
                      strokeWidth="14"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray="377"
                      strokeDashoffset="94"
                      className="drop-shadow-lg"
                    ></circle>
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                      75%
                    </span>
                    <span className="text-gray-500 text-sm font-medium">Saved</span>
                  </div>
                </div>

                <div className="space-y-3 w-full">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-yellow-50 px-4 py-2 rounded-lg border border-orange-200/50">
                    <span className="w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg"></span>
                    <p className="text-gray-700 text-sm font-medium">Solar Power</p>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                    <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
                    <p className="text-gray-700 text-sm font-medium">Grid Power</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM CTA BUTTON */}
        <div className="flex justify-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 hover:from-orange-600 hover:via-orange-500 hover:to-yellow-600 text-white font-semibold rounded-full shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 group"
          >
            Adhik jaankari ke liye click krein
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </motion.div>
  );
};

export default SolarCostCalculator;