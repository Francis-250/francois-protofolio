import { projects } from "../assets/asset";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="flex items-center justify-center text-white">
      <div className="max-w-6xl w-full p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
