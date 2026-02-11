import React from "react";

const reelsData = [
  {
    role: "Solar Specialist",
    reel: "https://www.youtube.com/embed/FJL8PZF30Hs",
  },
  {
    role: "Solar Specialist",
    reel: "https://www.youtube.com/embed/QB6D-z0XnP8",
  },
  {
    role: "Solar Specialist",
    reel: "https://www.youtube.com/embed/TPqjYdQeAn4",
  },
  {
    role: "Solar Specialist",
    reel: "https://www.youtube.com/embed/WnVQkbx9ZHs",
  },
  {
    role: "Solar Specialist",
    reel: "https://www.youtube.com/embed/fmS5gjW8tv8",
  },
];


const HoverVideoCard3 = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#090971] mb-10">
          Growth At <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Divy Power</span>
        </h2>

        {/* Scroll Area */}
        <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="
                bg-[#f0f0f0]
                rounded-xl 
                shadow-md 
            w-[180px]      /* Increased width mobile */
                sm:w-[200px]   /* Increased width tablet */
                md:w-[220px]   /* Increased width desktop */
                flex-shrink-0 
                hover:shadow-xl 
                transition-all
                p-2
              "
            >
              <div className="relative overflow-hidden rounded-lg w-full aspect-[9/16]">
                <iframe
                  src={`${reel.reel}?mute=1`}
                  title={reel.role}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoverVideoCard3;
