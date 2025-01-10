import React from "react";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import { BiSolidEditLocation } from "react-icons/bi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl sm:text-6xl font-bold mb-12 text-center">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <BiSolidEditLocation className="text-[#65ED52]" size={30} />
              <div>
                <p className="text-lg font-bold">Kigali, Rwanda</p>
                <p className="text-sm text-gray-400">KG 305 St</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsPhone className="text-[#65ED52]" size={30} />
              <div>
                <p className="text-lg font-bold">+250 780 1398</p>
                <p className="text-sm text-gray-400">Available Every Day</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsEnvelope className="text-[#65ED52]" size={30} />
              <div>
                <p className="text-lg font-bold">munyankindif0@gmail.com</p>
                <p className="text-sm text-gray-400">
                  Send me your message anytime!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-[#65ED52] transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-[#65ED52] transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-[#65ED52] transition-all duration-300 sm:col-span-2"
              />
              <textarea
                placeholder="Enter Your Message"
                className="w-full h-40 p-3 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-[#65ED52] transition-all duration-300 sm:col-span-2 resize-none"
              ></textarea>
              <button className="w-full sm:w-auto px-6 py-3 bg-[#65ED52] text-black rounded-lg hover:bg-transparent hover:text-[#65ED52] hover:border-2 hover:border-[#65ED52] transition-all duration-300 font-semibold sm:col-span-2">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;