import { aboutContents, skills } from "../assets/asset";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex items-center justify-center text-white">
      <div className="max-w-6xl w-full p-8">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Education</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {aboutContents.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl text-[#65ED52]">{item.sub}</span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-lg text-gray-300 mb-2">{item.option}</p>
                <p className="text-sm text-gray-400 mb-4">{item.year}</p>
                <ul className="list-disc list-inside">
                  {item.tasks.map((task, idx) => (
                    <li key={idx} className="text-gray-300">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Skills</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <span className="text-4xl text-[#65ED52] mb-4">
                  {skill.icon}
                </span>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-[#65ED52] h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
