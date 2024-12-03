import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faHtml5,
  faGit,
  faReact,
  faJs,
  faJsSquare,
  faCss,
  faNodeJs,
  faPhp,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons/faUniversity";
import { faPhotoFilm, faSchool } from "@fortawesome/free-solid-svg-icons";

function About() {
  const contents = [
    {
      title: "high school",
      sub: faSchool,
      option: "Software development",
      year: "2020-2023",
      tasks: [
        "build news website with php,mysql,html,css",
        "Learned basics database management with MySQL",
      ],
    },
    {
      title: "College",
      sub: faUniversity,
      option: "Information Communication Technology",
      year: "2024-",
      tasks: [
        "Built an online ticket booking system using React and Node.js",
        "Learned advanced database management with MySQL",
      ],
    },
  ];

  const skills = [
    {
      icon: faHtml5,
      title: "Html",
      level: 80,
    },
    {
      icon: faCss,
      title: "Css",
      level: 85,
    },
    {
      icon: faJs,
      title: "Javascript",
      level: 50,
    },
    {
      icon: faReact,
      title: "react Js",
      level: 55,
    },
    {
      icon: faNodeJs,
      title: "Node JS",
      level: 50,
    },
    {
      icon: faPhp,
      title: "Php",
      level: 70,
    },
    {
      icon: faFigma,
      title: "Figma",
      level: 70,
    },
    {
      icon: faPhotoFilm,
      title: "Node JS",
      level: 60,
    },
  ];

  return (
    <div className="flex items-center justify-center px-4 md:mt-20 md:mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 w-[90%] max-w-4xl">
        <div className="p-6 bg-white text-black rounded-lg">
          <div className="mb-3 text-center font-bold uppercase">Skills</div>
          {skills.map((s, i) => (
            <div
              key={i}
              className="gap-3 flex justify-between items-center bg-[#FAFAFA] rounded w-[100%] border p-2 text-lg font-bold mb-3"
            >
              <FontAwesomeIcon icon={s.icon} />
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="h-2 rounded-full bg-green-500"
                  style={{ width: `${s.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 bg-white text-black rounded-lg">
          <div className="mb-1 text-center font-bold uppercase">Education</div>
          {contents.map((data, index) => (
            <div
              className="mb-6 text-left bg-[#FAFAFA] rounded w-full p-4 border"
              key={index}
            >
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={data.sub}
                  className="text-2xl text-blue-600"
                />
                <div>
                  <h2 className="font-bold text-xl capitalize">{data.title}</h2>
                  <p className="text-sm text-gray-500">{data.year}</p>
                </div>
              </div>
              <p className="mt-2 text-md font-semibold">{data.option}</p>
              {data.tasks && (
                <ul className="mt-2 list-disc list-inside text-gray-700 text-sm">
                  {data.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
