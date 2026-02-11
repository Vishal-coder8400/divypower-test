import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const reelsData = [
  { videoId: "FJL8PZF30Hs" },
  { videoId: "QB6D-z0XnP8" },
  { videoId: "TPqjYdQeAn4" },
  { videoId: "WnVQkbx9ZHs" },
  { videoId: "fmS5gjW8tv8" },
];

const HoverVideoCard = () => {
  const containerRef = useRef(null);
  const iframeRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollInterval = useRef(null);
  const [unmutedIndex, setUnmutedIndex] = useState(null);

  /* ===========================
     YOUTUBE EMBED URL
  ============================ */
  const getYouTubeURL = (id) =>
    `https://www.youtube.com/embed/${id}?enablejsapi=1&mute=1&controls=0&rel=0&playsinline=1&modestbranding=1`;

  /* ===========================
     SCROLL HANDLING
  ============================ */
  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[index];
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    scrollInterval.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % reelsData.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) clearInterval(scrollInterval.current);
  };

  /* ===========================
     YOUTUBE PLAYER CONTROL
  ============================ */
  const playVideo = (index) => {
    iframeRefs.current.forEach((iframe, i) => {
      if (!iframe) return;

      // Pause all others
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo" }),
        "*"
      );

      // Play only hovered
      if (i === index) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "playVideo" }),
          "*"
        );
      }
    });
  };

  const pauseVideo = (index) => {
    const iframe = iframeRefs.current[index];
    if (!iframe) return;

    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "pauseVideo" }),
      "*"
    );
  };

  const unmuteVideo = (index) => {
    const iframe = iframeRefs.current[index];
    if (!iframe) return;

    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "unMute" }),
      "*"
    );

    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "playVideo" }),
      "*"
    );

    setUnmutedIndex(index);
  };

  /* ===========================
     LIFECYCLE
  ============================ */
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-2 bg-gradient-to-br from-[#FFF5F0] via-[#FFF9F5] to-[#FFFAF7] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#FFB380] to-[#FFA45C] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#090971] via-[#090971] to-[#0a0a85] bg-clip-text text-transparent leading-tight">
            Stories Of Change We're{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Proud Of
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our client believed in us and so can you. See how solar changed their lives.
          </p>
        </motion.div>

        {/* Reels */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 sm:gap-5 md:gap-6 px-2 hide-scrollbar pb-2"
          style={{ scrollBehavior: "smooth" }}
        >
          {reelsData.map((reel, index) => (
            <motion.div
              key={index}
              className="snap-start flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw] max-w-[260px] h-[420px] relative group"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => {
                stopAutoScroll();
                playVideo(index);
              }}
              onMouseLeave={() => {
                pauseVideo(index);
                startAutoScroll();
              }}
            >
              {/* Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B35] via-[#FF8C42] to-[#FFB380] p-[2px] group-hover:p-[3px] transition-all duration-300">
                  <div className="relative w-full h-full rounded-2xl bg-black overflow-hidden">
                    <iframe
                      ref={(el) => (iframeRefs.current[index] = el)}
                      src={getYouTubeURL(reel.videoId)}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      title={`testimonial-video-${index}`}
                    />

                    {/* Unmute Button */}
                    {unmutedIndex !== index && (
                      <button
                        className="absolute bottom-3 right-3 z-20 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs backdrop-blur-md hover:bg-black transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          unmuteVideo(index);
                        }}
                      >
                        🔊 Unmute
                      </button>
                    )}
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB380] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>

              {/* Scale */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {reelsData.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-8 h-3 bg-gradient-to-r from-orange-500 to-yellow-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#739131]/10 to-[#8da73f]/10 rounded-2xl blur-xl"></div>
            <p className="relative px-8 py-4 text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Aap kis cheez ka intezaar kar rahe hain? Aaj hi contact karein Divy Power ko — Trust bhi, Bachat bhi!
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default HoverVideoCard;
