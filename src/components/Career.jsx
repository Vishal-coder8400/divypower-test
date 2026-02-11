import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import CareerForm from './CareerForm';
import WorkCultureReels from './WorkCultureReels';
import SafetySecurityReels from './SafetySecurityReels';
import ImageSlider from './ImageSlider';
import CareersAtDivySolar from './CareersAtDivySolar';

const Career = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 pt-1 pb-12 About">
      
      {/* ================= HERO ================= */}
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4">
          Join Our Team
        </h1>
        <p className="max-w-xl mx-auto text-xl text-gray-600">
          We're building the future with talented people like you. Explore our open positions below.
        </p>
      </motion.div> */}


      {/* ================= CONTENT ================= */}
      <section>
        <CareersAtDivySolar />
      </section>

      <section className="-mt-8">
        <CareerForm />
      </section>

    

      {/* ================= WHY JOIN US ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-2xl shadow-2xl overflow-hidden bg-[#DFF4FF]">
          <div className="px-6 py-14 sm:p-14">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-[#090971] sm:text-4xl">
                Why Join <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Us?</span>
              </h2>
              <p className="mt-3 max-w-md mx-auto text-lg text-[#003972]/70">
                We offer competitive benefits and a culture you’ll truly love.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Competitive Salary",
                  description: "We offer competitive compensation packages including bonuses.",
                  icon: "💰",
                },
                {
                  name: "Flexible Work",
                  description: "Work remotely or from our modern offices with flexible hours.",
                  icon: "🌤️",
                },
                {
                  name: "Learning Budget",
                  description: "Annual stipend for courses, conferences, and books.",
                  icon: "📘",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl border border-[#003972]/10"
                >
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white text-2xl">
                      {benefit.icon}
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-[#090971]">
                        {benefit.name}
                      </h3>
                      <p className="mt-1 text-[#003972]/70">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <section className="-mt-12">
        <WorkCultureReels />
      </section>

      <section>
        <SafetySecurityReels />
      </section>

      <section>
        <ImageSlider />
      </section>

      <section className="mt-24">
        <Footer />
      </section>
    </div>
  );
};

export default Career;
