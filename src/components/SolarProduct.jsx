import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { GiSolarPower, GiLightningSpanner, GiGasPump } from "react-icons/gi";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Solar Solutions",
    icon: <GiSolarPower className="text-orange-500 text-5xl" />,
    features: ["Solar Panel", "Solar Pump", "Micro Inverter"],
  },
  {
    title: "Safety Solution",
    icon: <GiLightningSpanner className="text-orange-500  text-5xl" />,
    features: ["Earthing", "Lightning Arrester (LA)"],
  },
  {
    title: "Genset Solutions",
    icon: <GiGasPump className="text-orange-500 text-5xl" />,
    features: ["Diesel/Petrol Genset"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4 },
  }),
};

const SolarProducts = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFFAF7] via-white to-[#FFF5F0] px-4 py-4 md:py-8 relative overflow-hidden">
 {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.07] pointer-events-none">
        <div className="absolute top-10 right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#FFB380] to-[#FFA45C] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#FF8C42] to-[#FFB380] rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFF5F0] to-[#FFE8DC] px-5 py-2.5 rounded-full border border-[#FF8C42]/30 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full animate-pulse"></div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 text-sm font-bold tracking-widest uppercase">
              OUR PRODUCTS
            </p>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#090971] leading-tight mb-4 px-4">
            Harness The Power Of The Sun With{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Solar Energy!
            </span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of sustainable energy solutions
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative h-full"
            >
              {/* Outer Glow on Hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
              
              {/* Card Container with Gradient Border */}
              <div className="relative h-full">
                {/* Gradient Border Wrapper */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-[2px] transition-all duration-300">
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full flex flex-col shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF6B35]/10 to-[#FFB380]/10 rounded-bl-[80px] rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex-1">
                    {/* Icon Container */}
                    <div className="mb-6 relative inline-block">
                      {/* Icon Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/30 to-[#FFB380]/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Icon Box */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="relative bg-gradient-to-br from-[#FFF5F0] to-[#FFE8DC] p-5 rounded-2xl border-2 border-[#FF8C42]/20 group-hover:border-[#FF8C42]/40 transition-all duration-300">
                          {product.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[#005F60] mb-6 group-hover:text-[#004a4b] transition-colors duration-300">
                      {product.title}
                    </h3>

                    {/* Features List */}
                    <ul className="space-y-4 mb-8">
                      {product.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.1 }}
                          className="flex items-center text-gray-700 text-sm md:text-base group/item"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-3 shadow-md group-hover/item:scale-110 transition-transform duration-300">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/LA"
                    className="
                      relative block w-full text-center
                      bg-gradient-to-r from-orange-500 to-yellow-500
                      text-white
                      py-4 px-6 rounded-2xl
                      text-sm md:text-base
                      font-bold shadow-lg
                      hover:shadow-2xl
                      transition-all duration-300
                      overflow-hidden
                      group/btn
                    "
                  >
                    {/* Button Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Explore Solutions</span>
                      <svg
                        className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-20 flex flex-col items-center gap-6">
          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#FF8C42] to-transparent rounded-full"
          ></motion.div>
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-3 text-gray-600 text-sm"
          >
            <svg className="w-5 h-5 text-[#FF8C42]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Trusted by 10,000+ Happy Customers</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolarProducts;