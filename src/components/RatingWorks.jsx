import React, { useRef } from "react";

const testimonials = [
  {
    feedback: "Excellent service with homely touch…! All the best..!!",
    name: "GOOD YEAR",
    role: "1 MWP",
  },
  {
    feedback:
      "Fully Dependable. Well Planned, Secure Execution, Trusted and Commanded. Best Managed - Fully Responsive – we got remitted the Subsidy at early time. Good Partner – Heartily Wishes-",
    name: "HINDU Education Society – Sonipat – Haryana",
    role: "800 KWp",
  },
  {
    feedback:
      "Out standing service Support with instant decision is Edge of them. They know the Art to satisfied the every concern in corporate.",
    name: "BKT",
    role: "1000 KWp",
  },
  {
    feedback:
      "Technical patienceful EPC. Supply and installations. This 'T'&'D' combination works with full determination even though during hardship.",
    name: "Skylark Group",
    role: "1450 KWp - 9 Locations",
  },
  {
    feedback:
      "Recommendable supplier..!! Our Experience for – 450 KW solar - 5 locations.",
    name: "Bal Bharati Group of Education",
    role: "450 KW",
  },
  {
    feedback:
      "Technical and Supportive installation – we are getting maximum generation in our area.",
    name: "O.S Cool Home – Kundali – Haryana",
    role: "100 KWp",
  },
  {
    feedback:
      "CARE with advisable capabilities. Humbled! With modern tools and solutions",
    name: "Orient Syntax – Bhiwadi – Rajasthan",
    role: "1000 KWp",
  },
  {
    feedback:
      "Technical Expert Team, Timely Execution with full synchronised support with Govt' dept.",
    name: "Hargobind COLD – Markanda – Haryana",
    role: "150 KW",
  },
  {
    feedback:
      "Very well Connected at every step – with Strong Tech. capabilities. Our MD is very impressed.",
    name: "R.K. Rayon",
    role: "100 KWp – Roof Top",
  },
];

const RatingWorks = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="GetFontSol relative bg-gradient-to-br from-[#090971] via-[#0a0a80] to-[#090971] rounded-[40px] max-w-[1200px] mx-auto mt-10 px-4 py-10 md:py-12 md:px-8 overflow-hidden text-white shadow-2xl">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
      
      {/* Animated Floating Circles */}
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-orange-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30 mb-3">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-orange-300 font-semibold text-xs uppercase tracking-wider">Testimonials</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Solar <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Ratings</span>
        </h2>
        <p className="text-sm md:text-base font-medium text-gray-300">
          What Our Satisfied Customers Say About Us
        </p>

        {/* Star Rating Display */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-300 font-semibold text-sm">5.0 / 5.0</span>
        </div>
      </div>

      {/* Testimonials */}
      <div
        ref={scrollRef}
        className="relative z-10 flex gap-4 overflow-x-auto pb-4 md:pb-6 snap-x snap-mandatory scrollbar-hide"
      >
        {testimonials.map((item, index) => (
          <article
            key={index}
            className="bg-white text-gray-800 rounded-2xl flex-shrink-0 p-5 shadow-xl relative 
              w-[85%] sm:w-[70%] md:w-[45%] lg:w-[30%] snap-center border border-orange-200/50 
              hover:shadow-[0_15px_40px_rgba(249,115,22,0.25)] hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
          >
            {/* Decorative Corner Gradient */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Quote Icon with Gradient */}
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Star Rating */}
            <div className="flex gap-0.5 mb-3 relative z-10">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-700 mb-4 relative z-10 line-clamp-4">
              "{item.feedback}"
            </p>

            {/* Divider with Gradient */}
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mb-3 relative z-10"></div>

            <footer className="relative z-10">
              <p className="font-bold text-gray-900 text-sm leading-tight mb-2">{item.name}</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent font-bold text-xs">
                  {item.role}
                </p>
              </div>
            </footer>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </article>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-6 right-6 flex gap-2 z-20">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default RatingWorks;