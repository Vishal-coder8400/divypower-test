import { motion, AnimatePresence } from "framer-motion";
import { categories, projects, iconMap } from "./ProjectData";
import { useState } from "react";

const SolarPortfolio = () => {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const handleFilterChange = (cat) => {
    setActive(cat);
    setVisibleCount(3);
  };

  return (
<section
  className="
    px-4 py-2 md:py-6
    md:px-12 lg:px-20 xl:px-32 2xl:px-52 
    bg-gradient-to-br from-white via-orange-50/30 to-white
    rounded-t-[40px]
    relative overflow-hidden
  "
>


      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-50 px-5 py-2.5 rounded-full border border-orange-200/50 mb-4">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent font-bold text-sm tracking-wider uppercase">
              Our Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#090971] mb-3">
            Our Solar <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore the projects we delivered with trust, quality & excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 
                border-2 font-semibold text-sm shadow-md
                ${
                  active === cat
                    ? "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white border-orange-400 shadow-orange-500/30 shadow-lg"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:border-orange-300"
                }
              `}
            >
              <span>{cat}</span>
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="
                  relative overflow-hidden rounded-3xl 
                  bg-white shadow-xl border border-orange-200/50
                  hover:shadow-2xl hover:-translate-y-2
                  transition-all duration-300 group
                "
              >
                {/* Decorative Corner Gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full h-56 object-cover 
                      transition-transform duration-500 
                      group-hover:scale-110
                    "
                  />
                  {/* Image Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-bold text-xs shadow-lg border border-orange-200/50">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 relative z-10">

                  {/* Icon & KWp */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="text-white text-2xl">
                        {iconMap[project.category]}
                      </div>
                    </div>

                    {project.kwp !== "N/A" && (
                      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 px-4 py-2 rounded-full border border-orange-200/50">
                        <p className="text-sm font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                          {project.kwp} KWp
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#090971] leading-tight mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* View Details Link */}
                  <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More */}
        {hasMore && (
          <motion.div 
            className="flex justify-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="
                group px-8 py-4 rounded-full text-white text-base font-bold 
                bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 
                hover:from-orange-600 hover:via-orange-500 hover:to-yellow-600
                shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40
                transition-all duration-300 hover:scale-105
                flex items-center gap-3
              "
            >
              Load More Projects
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SolarPortfolio;