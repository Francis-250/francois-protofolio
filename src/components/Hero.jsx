import { FaDownload } from "react-icons/fa";
import { homeContents, asset, social } from "../assets/asset";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full flex sm:flex-row flex-col items-center justify-between sm:p-8 p-4 gap-8 sm:gap-0">
        {homeContents.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:w-[60%] w-full px-4 sm:px-0 mt-20 sm:mt-0"
            key={index}
          >
            <span className="text-2xl sm:text-3xl text-gray-400 font-light mb-4">
              Hi, I'm
            </span>
            <span className="sm:text-6xl text-4xl text-[#65ED52] font-bold mb-4">
              {item.myName}
            </span>
            <span className="text-2xl sm:text-3xl text-gray-300 mb-4">
              {item.title}
            </span>
            <span className="text-lg sm:text-xl text-gray-400 mb-8 text-justify">
              {item.description}
            </span>
            <div className="flex items-center gap-5 mt-6">
              <button className="px-6 py-3 hover:bg-[#65ED52] rounded-lg hover:text-black bg-transparent border-2 border-[#65ED52] text-[#65ED52] transition-all duration-500 ease-in-out font-semibold">
                Hire me !
              </button>
              <a
                href="#"
                download
                className="px-6 py-3 bg-[#65ED52] flex gap-2 items-center justify-center rounded-lg hover:bg-[#65ED52] bg-transparent border-2 border-[#65ED52] text-[#65ED52] bg-transparent transition-all duration-500 ease-in-out font-semibold"
              >
                <FaDownload />
                Resume
              </a>
            </div>
          </motion.div>
        ))}
        <div className="sm:w-[40%] w-full flex justify-center items-center">
          <img
            src={asset.myImage}
            className="w-[340px] h-[340px] object-cover rounded-full hover:rotate-90 border-4 border-[#65ED52] transition-all duration-1000 ease-in-out"
            alt="Profile"
          />
        </div>
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }} className="flex sm:flex-col flex-row items-center gap-5">
          {social.map((social, idx) => (
            <span key={idx}>{social}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
