import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faGoogle,
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleForm = (e) => {
    e.preventDefault();

    const newErrors = {
      name: !name,
      email: !email,
      message: !message,
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      alert("Message sent successfully!");
    }
  };

  return (
    <div className="h-[90.6vh] flex items-center justify-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-[90%] mt-[450px] md:mt-[0px]">
        <div className="bg-white text-black flex justify-center p-4 flex-col">
          <div className="ml-4">
            <header className="uppercase mb-3 mt-3 text-[#637EEE] font-bold text-3xl">
              contact us
            </header>
            <header className="mb-4 font-bold text-2xl">
              Get in touch today
            </header>
            <p className="mb-3">
              Have a project in mind, a question, or just want to say hello?
              Fill out the form below, and I'll get back to you as soon as I
              can!
            </p>
          </div>
          <div className="mt-3 ml-4">
            <div className="flex justify-between items-center p-2 bg-[#FAFAFA] rounded md:w-[80%] w-[100%] border">
              <FontAwesomeIcon
                className="p-2 bg-[#EBE6F8] rounded text-[#637EEE] text-2xl"
                icon={faEnvelope}
              />
              <div className="">
                <p className="">Email:</p>
                <p className="font-bold text-lg">munyankindif0@gmail.com</p>
              </div>
            </div>
            <br />
            <div className="flex justify-between items-center p-2 bg-[#FAFAFA] rounded md:w-[80%] w-[100%] border">
              <FontAwesomeIcon
                className="p-2 bg-[#EBE6F8] rounded text-[#637EEE] text-2xl"
                icon={faPhone}
              />
              <div className="">
                <p className="">phone:</p>
                <p className="font-bold text-lg">+250780414398</p>
              </div>
            </div>
            <br />
            <div className="flex justify-between items-center p-2 w-[80%]">
              <header className="">Reach out to us on:</header>
              <div className="flex gap-2">
                <a href="https://github.com/Francis-250">
                  <FontAwesomeIcon
                    className="p-2 bg-[#EBE6F8] rounded-lg cursor-pointer text-[#000] text-2xl"
                    icon={faGithub}
                  />
                </a>
                <a href="https://www.linkedin.com/in/munyankindi-fran%C3%A7ois-94a137296/">
                  <FontAwesomeIcon
                    className="p-2 bg-[#EBE6F8] rounded-lg cursor-pointer text-[#000] text-2xl"
                    icon={faLinkedin}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] p-4 flex items-center">
          <form className="w-[100%]" onSubmit={handleForm}>
            <div className="mb-3">
              <label className="text-black">Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                className={`w-full border-2 outline-none p-[10px] rounded text-black ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            <div className="mb-3">
              <label className="text-black">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className={`w-full border-2 outline-none p-[10px] rounded text-black ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            <div className="mb-3">
              <label className="text-black">Leave a message</label>
              <br />
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here...."
                className={`w-full border-2 outline-none p-[10px] rounded text-black resize-none h-[200px] ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
            </div>
            <div className="mb-3">
              <button className="rounded bg-[#637EEE] p-[15px] w-[100%] md:w-[30%] text-xl font-bold">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
