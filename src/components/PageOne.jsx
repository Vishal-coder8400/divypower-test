import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { motion } from "framer-motion";

const features = [
  {
    icon: <AiOutlineSwap className="text-4xl text-white" />,
    title: "Free Consultation & Feasibility Check",
    description:
      "Solar energy is derived from the sun, a virtually unlimited source, making it one of the most sustainable energy options.",
  },
  {
    icon: <IoStatsChart className="text-4xl text-white" />,
    title: "Govt. Approved Installations with Subsidy Guidance",
    description:
      "Installing solar panels can increase your property's value and attract eco-conscious buyers.",
  },
  {
    icon: <BsGlobe className="text-4xl text-white" />,
    title: "High-Efficiency Panels with 25 Years Warranty",
    description:
      "Enjoy benefits like tax credits, subsidies, and rebates when switching to solar energy.",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const PageOne = () => {
  return (
    <section className="py-2 px-4 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>

      {/* Top Feature Cards */}
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-50 px-5 py-2.5 rounded-full border border-orange-200/50 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent font-bold text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#090971] mb-3">
            Your <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Solar Journey</span> Starts Here
          </h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
            Experience excellence with our comprehensive solar solutions
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-orange-200/50 group relative overflow-hidden"
              variants={fadeUpVariant}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Decorative Corner Gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with Gradient Background */}
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(feature.icon, { className: "text-3xl text-white" })}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug pt-2">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Feature Icons Section */}
      <motion.section
        className="mt-20 max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            ["fas fa-shield-alt", "Turnkey Solutions", "Warranty Assurance"],
            ["fas fa-star", "Certified Partners", "Solar Specialists"],
            ["fas fa-hand-holding-usd", "Flexible", "Financing Options"],
            ["fas fa-headphones-alt", "24/7 Support", "Any time of the day"],
            ["fas fa-lightbulb", "End-to-End Guidance", "Efficient solar solution"],
          ].map(([icon, title, subtitle], i) => (
            <motion.div
              key={title}
              className="bg-white p-6 shadow-lg hover:shadow-2xl rounded-2xl flex flex-col items-center text-center transition-all duration-300 border border-orange-200/50 group relative overflow-hidden"
              variants={fadeUpVariant}
              custom={i}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with Gradient Circle */}
              <div className="relative z-10 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <i className={`${icon} text-white text-2xl`}></i>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <p className="font-bold text-sm text-gray-900 mb-1">
                  {title}
                </p>
                <p className="text-xs text-gray-600 font-medium">
                  {subtitle}
                </p>
              </div>

              {/* Bottom Gradient Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

    </section>
  );
};

export default PageOne;