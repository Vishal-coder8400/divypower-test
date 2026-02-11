import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  { name: "Ateesh Kumar", role: "TATA Solar Partner", youtubeId: "FJL8PZF30Hs" },
  { name: "Shivam Singh", role: "Solar Consultant", youtubeId: "QB6D-z0XnP8" },
  { name: "Kaushlesh Sharma", role: "Solar Analyst", youtubeId: "TPqjYdQeAn4" },
  { name: "Asha Gupta", role: "Warranty Expert", youtubeId: "WnVQkbx9ZHs" },
  { name: "Rajeev Arora", role: "Quality Head", youtubeId: "fmS5gjW8tv8" },
];

// Duplicate data for infinite loop
const infiniteData = [...teamMembers, ...teamMembers, ...teamMembers];

const HoverVideoCard1 = () => {
  const scrollRef = useRef(null);
  const playersRef = useRef({});
  const [cardWidth, setCardWidth] = useState(260);
  const [unmutedIndex, setUnmutedIndex] = useState(null);

  /* ==========================
     LOAD YOUTUBE IFRAME API
  ========================== */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      infiniteData.forEach((item, index) => {
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
              iv_load_policy: 3,
              cc_load_policy: 0,
              fs: 0,
            },
          }
        );
      });
    };
  }, []);

  /* ==========================
     SCROLL BY ONE CARD
  ========================== */
  const scrollBy = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  /* ==========================
     INFINITE LOOP HANDLER
  ========================== */
  const handleInfiniteScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScrollLeft - cardWidth) {
      container.scrollLeft = container.scrollWidth / 3 - container.clientWidth;
    }

    if (container.scrollLeft <= cardWidth) {
      container.scrollLeft = container.scrollWidth / 3;
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollLeft = container.scrollWidth / 3;
    container.addEventListener("scroll", handleInfiniteScroll);

    return () =>
      container.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

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
   <div className="bg-white py-4 md:py-8 px-4 sm:px-6 lg:px-12">

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-2xl lg:text-[30px] font-bold text-[#090971] mb-10 About1">
          Choose DIVY POWER as your{" "}
          <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Solar Partner
          </span>
        </h2>

        {/* Left Arrow */}
        <button
          onClick={() => scrollBy("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white shadow-xl p-3 rounded-full z-20 border hover:bg-green-600 hover:text-white transition"
        >
          <ChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollBy("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white shadow-xl p-3 rounded-full z-20 border hover:bg-green-600 hover:text-white transition"
        >
          <ChevronRight />
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-6 px-2"
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`::-webkit-scrollbar { display: none; }`}</style>

          {infiniteData.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] bg-white rounded-3xl shadow-lg border 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              onMouseEnter={() => playVideo(index)}
              onMouseLeave={() => pauseVideo(index)}
            >
              {/* Video */}
              <div className="relative w-full aspect-[9/16] overflow-hidden">
                <div
                  id={`yt-player-${index}`}
                  className="absolute top-0 left-0 w-full h-full"
                ></div>

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

              {/* Info */}
              <div className="px-4 py-3 bg-white">
                <p className="font-semibold text-[#C4302C] text-sm">
                  {member.name}
                </p>
                <p className="text-xs text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverVideoCard1;
