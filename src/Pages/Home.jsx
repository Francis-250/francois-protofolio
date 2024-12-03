import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import myImage from "./img/myImg.jpg";

function Home() {
  const contents = [
    {
      myName: "Munyankindi Francois",
      title: "Froatend developer",
      description:
        "Junior Frontend Developer passionate about creating engaging and visually appealing web applications. With a strong foundation in HTML, CSS, JavaScript, and modern tools like React and Tailwind CSS, I specialize in building responsive, user-friendly interfaces that deliver great experiences on any device.",
    },
  ];

  return (
    <div className="h-[90.6vh] flex items-center justify-center px-4">
      <div className="h-[100%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex justify-center items-center gap-4 p-20">
          <div className="flex items-center justify-center flex-col mt-20 gap-4 mr-5">
            <a href="https://www.linkedin.com/in/munyankindi-fran%C3%A7ois-94a137296/" className="text-red-400">
              <FontAwesomeIcon
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-lg"
                icon={faLinkedin}
              />
            </a>
            <a href="https://github.com/Francis-250" className="">
              <FontAwesomeIcon
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-lg"
                icon={faGithub}
              />
            </a>
          </div>
          <div className="">
            <header className="text-2xl font-bold mb-2">
              Hi, Iam <span className="text-4xl">Munyankindi François</span>
            </header>
            <p className="text-2xl text-gray-400 capitalize mb-3">
              Froatend developer
            </p>
            <p className="text">
              Junior Frontend Developer passionate about creating engaging and
              visually appealing web applications. With a strong foundation in
              HTML, CSS, JavaScript, and modern tools like React and Tailwind
              CSS, I specialize in building responsive, user-friendly interfaces
              that deliver great experiences on any device.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 p-20">
          <div className="border-2 hover:border-0">
            <img src={myImage} className="w-[340px] bottom-5 right-5 relative border-2 border-cyan-200 hover:bottom-0 hover:right-0 transition-all duration-1000 ease-in-out" />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
