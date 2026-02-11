import React, { useState } from "react";
import solarg from "../Images/SolarChahaFront.png";
import Loader from "../Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [billFile, setBillFile] = useState(null);
  const [loading, setLoading] = useState(false);

const handelSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {

    const formData = new FormData();

    formData.append("formType", "solar");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phoneNo);
    formData.append("message", message);

    // IMPORTANT — same name as Apps Script (billFile)
    if (billFile) {
      formData.append("billFile", billFile);
    }

    const res = await fetch(import.meta.env.VITE_CAREER_SCRIPT_URL, {
      method: "POST",
      body: formData
    });

    const text = await res.text();

    if (!text.includes("success")) throw new Error("Script failed");

    toast.success("Message sent successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setBillFile(null);

  } catch (error) {
    console.error(error);
    toast.error("Submission failed. Please try again.");
  } finally {
    setLoading(false);
  }
};



  return (
    <main className="px-4 sm:px-6 lg:px-12 py-4 bg-gradient-to-br from-orange-50/40 via-white to-yellow-50/40 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-20 h-20 border-2 border-orange-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 border-2 border-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <ToastContainer position="top-right" autoClose={3000} />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* TOP HEADING */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-50 px-5 py-2.5 rounded-full border border-orange-200/50 mb-4">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent font-bold text-sm tracking-wider uppercase">
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-[#090971]">Contact with Solar </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Chacha
            </span>
          </h2>
          <p className="text-gray-600 mt-3 text-base lg:text-lg">
            Your trusted solar energy expert is here to help
          </p>
        </div>

        {/* MAIN SECTION */}
       <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16">


          {/* LEFT — FORM CARD */}
          <form
            onSubmit={handelSubmit}
            className="bg-white w-full lg:w-[55%] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-orange-200/50 relative overflow-hidden"
          >
            
            {/* Decorative Corner Gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-bl-full"></div>

            {/* FORM HEAD */}
            <div className="relative z-10 text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                <span className="text-[#090971]">Get Your Best Solar </span>
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Solution
                </span>
              </h3>
              <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                Bijli ka bill bhejiye and Solar Chacha se janiye apne <br className="hidden sm:block" />
                rooftop ke liye Best Solar Solution
              </p>
            </div>

            {/* INPUT FIELDS */}
            <div className="space-y-4 relative z-10">
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="relative w-full rounded-2xl py-4 px-6 border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors bg-white"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  required
                  value={phoneNo}
                  onChange={(e) => setPhone(e.target.value)}
                  className="relative w-full rounded-2xl py-4 px-6 border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors bg-white"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative w-full rounded-2xl py-4 px-6 border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors bg-white"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="relative w-full rounded-2xl py-4 px-6 border-2 border-gray-200 focus:border-orange-400 focus:outline-none resize-none transition-colors bg-white"
                ></textarea>
              </div>

              {/* FILE UPLOAD */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <label className="bg-gradient-to-r from-orange-100 to-yellow-50 hover:from-orange-200 hover:to-yellow-100 rounded-full px-6 py-3 cursor-pointer text-gray-800 font-semibold shadow-md hover:shadow-lg transition-all border border-orange-200/50 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Upload Your Bijli Bill
                  <input
                    type="file"
                    onChange={(e) => setBillFile(e.target.files[0])}
                    className="hidden"
                  />
                </label>
                <span className="text-gray-600 text-sm flex items-center gap-2">
                  {billFile ? (
                    <>
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {billFile.name}
                    </>
                  ) : (
                    "No file chosen"
                  )}
                </span>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 hover:from-orange-600 hover:via-orange-500 hover:to-yellow-600 text-white py-4 rounded-full font-bold text-base sm:text-lg shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group mt-6"
              >
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    SUBMIT NOW
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* RIGHT SIDE — SOLAR CHACHA + CONTACT INFO */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-[45%] space-y-8">

            {/* IMAGE WITH GRADIENT BACKGROUND */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
              <img
                src={solarg}
                alt="Solar Chacha"
                className="relative w-[240px] sm:w-[280px] lg:w-[320px] mx-auto drop-shadow-2xl"
              />
            </div>

            {/* CONTACT DETAILS CARD */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-200/50 w-full relative overflow-hidden">
              
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-br-full"></div>

              <h4 className="text-xl font-bold text-[#090971] mb-6 relative z-10 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                Contact Information
              </h4>

              <div className="space-y-6 relative z-10">

                <div className="flex items-center gap-4 group hover:bg-orange-50 p-4 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-semibold text-base">
                    +91 9310259325
                  </p>
                </div>

                <div className="flex items-start gap-4 group hover:bg-orange-50 p-4 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-medium text-base leading-relaxed">
                    53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar, <br />
                    Nai Basti Dundaher Ghaziabad, <br />
                    Uttar Pradesh 201001
                  </p>
                </div>

                <div className="flex items-center gap-4 group hover:bg-orange-50 p-4 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-semibold text-base">
                    sales@divypower.com
                  </p>
                </div>

              </div>

              {/* Decorative Bottom Element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-400/20 to-yellow-400/20 rounded-tl-full"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;