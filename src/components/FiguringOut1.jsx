import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const reelsData = [
  {
    youtubeId: "FJL8PZF30Hs",
    username: "Riddhi Agarwal",
    caption: "Go Solar, Save Environment",
  },
  {
    youtubeId: "QB6D-z0XnP8",
    username: "Kaushlesh Sharma",
    caption: "Source of Renewable Energy",
  },
  {
    youtubeId: "TPqjYdQeAn4",
    username: "Divy Power Team",
    caption: "Save Environment With Solar",
  },
  {
    youtubeId: "WnVQkbx9ZHs",
    username: "Shivam Singh",
    caption: "Go Solar, Save Environment",
  },
  {
    youtubeId: "fmS5gjW8tv8",
    username: "Ateesh Kumar",
    caption: "Breaking The Myth About Solar",
  },
];

const FiguringOut1 = () => {
  const scrollRef = useRef(null);
  const playersRef = useRef({});
  const [unmutedIndex, setUnmutedIndex] = useState(null);

  /* ==========================
     LOAD YOUTUBE IFRAME API
  ========================== */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      reelsData.forEach((item, index) => {
        playersRef.current[index] = new window.YT.Player(
          `yt-player-${index}`,
          {
            host: "https://www.youtube-nocookie.com", // 🔥 Privacy enhanced
            videoId: item.youtubeId,
            playerVars: {
              autoplay: 0,
              controls: 0,
              mute: 1,
              rel: 0,
              playsinline: 1,
              modestbranding: 1,
              iv_load_policy: 3, // ❌ Hide annotations / hashtags
              cc_load_policy: 0, // ❌ Hide captions
              fs: 0, // ❌ Hide fullscreen
            },
          }
        );
      });
    };
  }, []);

  /* ==========================
     SCROLL CONTROLS
  ========================== */
  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  /* ==========================
     VIDEO CONTROLS
  ========================== */
  const playVideo = (index) => {
    Object.entries(playersRef.current).forEach(([i, player]) => {
      if (!player) return;
      player.pauseVideo();
      if (Number(i) === index) {
        player.playVideo();
      }
    });
  };

  const pauseVideo = (index) => {
    const player = playersRef.current[index];
    if (player?.pauseVideo) player.pauseVideo();
  };

  const unmuteVideo = (index) => {
    const player = playersRef.current[index];
    if (!player) return;

    player.unMute();
    player.playVideo();
    setUnmutedIndex(index);
  };

  return (
<div className="bg-gradient-to-b from-white via-orange-50/30 to-white py-6 md:py-10 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
  {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.06] pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-50 px-5 py-2.5 rounded-full border border-orange-200/50 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent font-bold text-sm tracking-wider uppercase">
              Customer Stories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#090971] mb-3">
            Breaking the Myth, Switch to{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Solar
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Hear from our satisfied customers who made the switch to solar energy
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scrollBy("left")}
          className="hidden sm:flex absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-xl p-3 rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 z-10 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
        </button>

        <button
          onClick={() => scrollBy("right")}
          className="hidden sm:flex absolute top-1/2 -right-6 lg:-right-12 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-xl p-3 rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 z-10 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
        </button>

        {/* Reels */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide py-6 scroll-smooth"
        >
          {reelsData.map((reel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-[280px] group relative"
              onMouseEnter={() => playVideo(index)}
              onMouseLeave={() => pauseVideo(index)}
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-500 rounded-2xl p-[2px] shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="bg-white rounded-2xl overflow-hidden h-full">
                  {/* Video */}
                  <div className="relative w-full aspect-[9/16] bg-black overflow-hidden">
                    <div
                      id={`yt-player-${index}`}
                      className="absolute top-0 left-0 w-full h-full"
                    ></div>

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* 🔊 Unmute Button */}
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

                  {/* Content */}
                  <div className="p-4 bg-gradient-to-b from-orange-50/30 to-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 text-sm font-bold">
                        {reel.username}
                      </p>
                    </div>

                    <div className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-gray-700 text-xs font-semibold leading-relaxed">
                        {reel.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {reelsData.map((_, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.5 }}
              className="w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-sm"
            ></motion.span>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-sm md:text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Share Your Solar Story
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default FiguringOut1;
