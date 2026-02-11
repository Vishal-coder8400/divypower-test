import React from "react";
import { motion } from "framer-motion";

const MessageBubble = ({ sender, text, typing, avatar }) => {
  const isChacha = sender === "chacha";
  const isRight = sender === "roshni"; // Right align for Roshni Didi

  return (
    <motion.div
      className={`flex w-full ${isRight ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {!isRight && avatar && (
        <motion.div
          className="relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {/* Avatar Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-md opacity-40"></div>
          <img
            src={avatar}
            alt="avatar"
            className="relative w-11 h-11 mr-3 rounded-full object-cover shadow-lg border-2 border-white/20"
          />
        </motion.div>
      )}

      <div className="relative max-w-[75%]">
        <motion.div
          className={`px-5 py-3.5 rounded-2xl text-sm sm:text-base shadow-2xl whitespace-pre-line backdrop-blur-sm
            ${
              isRight
                ? "bg-gradient-to-br from-white to-gray-50 text-gray-800 rounded-br-none border border-orange-200/50"
                : "bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-bl-none shadow-orange-500/50"
            }
          `}
          layout
        >
          {typing ? (
            <div className="flex flex-col">
              <p className={`mb-2 text-xs font-medium ${isRight ? "text-gray-500" : "text-orange-100"}`}>
                {isRight ? "Roshni Didi is typing..." : "Solar Chacha is typing..."}
              </p>
              <div className="flex space-x-1.5 items-center h-6">
                <motion.span
                  className={`w-2.5 h-2.5 rounded-full ${isRight ? "bg-orange-400" : "bg-white"}`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                />
                <motion.span
                  className={`w-2.5 h-2.5 rounded-full ${isRight ? "bg-orange-400" : "bg-white"}`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                />
                <motion.span
                  className={`w-2.5 h-2.5 rounded-full ${isRight ? "bg-orange-400" : "bg-white"}`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                />
              </div>
            </div>
          ) : (
            <p className={`leading-relaxed ${isRight ? "text-gray-800" : "text-white"}`}>
              {text}
            </p>
          )}
        </motion.div>

        {/* Enhanced Chat Pointer Tail */}
        <div
          className={`absolute w-0 h-0 border-8 border-transparent
            ${
              isRight
                ? "bottom-0 right-0 translate-x-2 translate-y-1 border-l-white border-t-white"
                : "bottom-0 left-0 -translate-x-2 translate-y-1 border-r-orange-500 border-t-orange-500"
            }
          `}
          style={{
            filter: isRight ? 'none' : 'drop-shadow(0 4px 6px rgba(249, 115, 22, 0.3))'
          }}
        />
      </div>

      {isRight && avatar && (
        <motion.div
          className="relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {/* Avatar Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-md opacity-40"></div>
          <img
            src={avatar}
            alt="avatar"
            className="relative w-11 h-11 ml-3 rounded-full object-cover shadow-lg border-2 border-white/20"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default MessageBubble;