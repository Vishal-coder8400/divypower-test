import React, { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";
import solarChachaImg from "../Images/chacha.png";
import roshniDidiImg from "../Images/didi.png";
import "./Home.css";

const conversationData = [
  { sender: "roshni", text: "Mera bijli ka bill iss baar bhi ₹3500 aa gaya" },
  { sender: "chacha", text: "Beti, is desh mein har family agle 5 saal mein ₹3 lakh se zyada sirf bijli mein gawa degi. Aur milta kya hai? Power cut aur mehenga bijli." },
  { sender: "roshni", text: "Toh phir hum karein kya? Bijli toh chahiye na." },
  { sender: "chacha", text: "Isiliye toh keh raha hoon. Chhat pe jo suraj chamak raha hai, woh muft hai. Solar laga lo. Apni bijli khud banao. Har din jo paisa jaa raha hai, woh bachao." },
];

const Conversation = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < conversationData.length) {
      setIsTyping(true);

      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, conversationData[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 1800);

      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex]);

  return (
    <div className="w-full bg-gradient-to-br from-[#090971] via-[#0a0a80] to-[#090971] relative overflow-hidden py-12">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
      
      {/* Animated Floating Circles */}
      <div className="absolute top-10 right-10 w-16 h-16 border-2 border-orange-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6">
        
        {/* Header Section - Compact */}
        <div className="text-center mb-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm px-5 py-1.5 rounded-full border border-orange-400/30 mb-3">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-orange-300 font-semibold text-xs uppercase tracking-wider">Live Conversation</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Real Talk About <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Solar Power</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">Watch Solar Chacha and Roshni Didi discuss the benefits</p>
        </div>

        {/* Chat Container - Compact */}
        <div className="wp w-full max-w-3xl bg-gradient-to-br from-[#0a5f47] to-[#075e44] rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xl border border-orange-500/20 backdrop-blur-sm">
          
          {/* Decorative Header Bar - Compact */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-xs font-medium">Active Now</span>
            </div>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-3">
            {messages.map((msg, i) => (
              <MessageBubble
                key={i}
                sender={msg.sender}
                text={msg.text}
                avatar={msg.sender === "chacha" ? solarChachaImg : roshniDidiImg}
              />
            ))}

            {isTyping && currentIndex < conversationData.length && (
              <MessageBubble
                sender={conversationData[currentIndex].sender}
                typing={true}
                avatar={
                  conversationData[currentIndex].sender === "chacha"
                    ? solarChachaImg
                    : roshniDidiImg
                }
              />
            )}
          </div>
        </div>

        {/* Bottom Info - Compact */}
        
      </div>
    </div>
  );
};

export default Conversation;