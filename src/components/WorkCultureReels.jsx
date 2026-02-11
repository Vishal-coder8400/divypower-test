import React from "react";

const videoData = [
  { name: "Vivek", video: "https://www.youtube.com/embed/SHORTS_ID_1" },
  { name: "Rajeev Arora - Teamwork", video: "https://www.youtube.com/embed/SHORTS_ID_2" },
  { name: "Lal Singh", video: "https://www.youtube.com/embed/SHORTS_ID_3" },
  { name: "Shivam", video: "https://www.youtube.com/embed/SHORTS_ID_4" },
  { name: "Riddhi", video: "https://www.youtube.com/embed/SHORTS_ID_5" },
  { name: "Rajeev Arora - Legacy", video: "https://www.youtube.com/embed/SHORTS_ID_6" },
  { name: "Asha", video: "https://www.youtube.com/embed/SHORTS_ID_7" },
  { name: "Kaushlesh Singh", video: "https://www.youtube.com/embed/SHORTS_ID_8" },
  { name: "Bhawna", video: "https://www.youtube.com/embed/SHORTS_ID_9" },
];

const WorkCultureReels = () => {
  return (
    <section className="bg-white py-12 px-6 w-full mt-12">
      <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#090971] mb-8">
        Work Culture <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">at DIVY POWER</span>
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-5 pb-4 px-2 scroll-smooth snap-x snap-mandatory no-scrollbar">

        {videoData.map((item, index) => (
          <div
            key={index}
            className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] bg-white shadow-lg rounded-xl overflow-hidden snap-center border border-gray-200 hover:shadow-xl transition-all"
          >
            {/* YOUTUBE SHORTS (iframe) */}
            <div className="relative w-full h-[280px] sm:h-[300px] overflow-hidden bg-black">
              <iframe
                src={item.video}
                title={item.name}
                className="w-full h-full object-cover"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* NAME */}
            <p className="text-center text-[13px] sm:text-sm bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent font-semibold py-2">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkCultureReels;
