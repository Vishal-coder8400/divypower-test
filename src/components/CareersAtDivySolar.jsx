import React, { useState } from "react";
import {
  FaLeaf,
  FaChartLine,
  FaLightbulb,
  FaUsers,
  FaHeart,
  FaRocket,
  FaCogs,
  FaUserCheck,
  FaChevronRight,
} from "react-icons/fa";
import solarsun from "../Images/solarsun.png";
import CareerApplyModal from "./CareerApplyModal";

const CareersExact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-b from-[#f6f9fc] to-white">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[380px] md:h-[450px] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(9,9,113,0.8) 0%, rgba(0,0,0,0.6) 100%), url('https://images.unsplash.com/photo-1509391366360-2e959784a276')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Join Our Team –{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Careers
            </span>
          </h1>
          <p className="text-base md:text-xl opacity-95 font-light">
            We're building the future with talented people like you.{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent font-medium">
              Explore our open positions below.
            </span>
          </p>
        </div>
        
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f9fc] opacity-40"></div>
      </section>

      {/* ================= CAREERS AT DIVY ================= */}
      <section className="bg-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#090971] leading-tight">
                Careers at{" "}
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  DIVY Power
                </span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                At{" "}
                <strong className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  DIVY Power
                </strong>
                , we are not just building solar systems — we're building a
                sustainable future. We believe in the power of clean energy and
                the people behind it. If you're passionate about renewable
                energy, innovation, and making a real impact, you've come to the
                right place.
              </p>
            </div>

            {/* RIGHT ICON */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src={solarsun}
                  alt="solar"
                  className="relative w-[280px] md:w-[320px] drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY + WHO ================= */}
      <section className="bg-gradient-to-b from-white to-[#f6f9fc] border-t border-gray-100 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* WHY WORK */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#090971]">
                Why Work with{" "}
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  DIVY Power?
                </span>
              </h3>

              <ul className="space-y-6">
                <li className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <FaLeaf className="text-white text-xl" />
                  </div>
                  <div>
                    <strong className="text-[#090971] text-lg block mb-1">
                      Purpose-Driven Work
                    </strong>
                    <p className="text-gray-600">
                      Contribute to India's transition toward a greener tomorrow.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                  <div>
                    <strong className="text-[#090971] text-lg block mb-1">
                      Growth Opportunities
                    </strong>
                    <p className="text-gray-600">
                      Learn, grow, and advance in a fast-growing solar industry.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <FaLightbulb className="text-white text-xl" />
                  </div>
                  <div>
                    <strong className="text-[#090971] text-lg block mb-1">
                      Innovative Culture
                    </strong>
                    <p className="text-gray-600">
                      Work with passionate minds and cutting-edge technology.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <div>
                    <strong className="text-[#090971] text-lg block mb-1">
                      Inclusive Environment
                    </strong>
                    <p className="text-gray-600">
                      We value ideas, collaboration, and diversity.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* WHO WE'RE LOOKING FOR */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#090971]">
                Who We're{" "}
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Looking For
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3 items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <FaHeart className="text-white text-lg" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Passionate about clean energy and sustainability
                  </p>
                </div>

                <div className="flex gap-3 items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <FaRocket className="text-white text-lg" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Self-motivated and eager to grow
                  </p>
                </div>

                <div className="flex gap-3 items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <FaCogs className="text-white text-lg" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Technically sound and solution-oriented
                  </p>
                </div>

                <div className="flex gap-3 items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <FaUserCheck className="text-white text-lg" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ready to take initiative and lead with integrity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="bg-[#f6f9fc] py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-[#090971]">
            Open Positions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our growing team and make an impact in the renewable energy sector
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Sales executive",
              "Sales manager",
              "Operation manager",
              "Service engineer",
              "Service manager",
              "Pre-sales executive",
              "HR Manager",
              "Purchase Manager",
            ].map((role, i) => (
              <div
                key={i}
                className="group flex justify-between items-center bg-[#090971] text-white rounded-xl px-6 py-4 hover:bg-gradient-to-r hover:from-[#090971] hover:to-[#0a0a8a] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <span className="font-semibold text-lg">{role}</span>
                <FaChevronRight className="text-white group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>

          <div className="text-center bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4 text-lg">
              Didn't find a role that suits you? Don't worry — we'd still love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ================= APPLY MODAL ================= */}
      <CareerApplyModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default CareersExact;