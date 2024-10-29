/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sdaja6t",
        "template_fpxcs18",
        form.current,
        "XPLhZWqZiViboQP7x"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="w-[100%] py-10 flex flex-col items-center  text-white">
      <h1 className="text-4xl font-bold mb-8">Let's Connect With Me</h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
      >
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full p-3 bg-gray-700 rounded-lg border-none text-white"
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            className="w-full p-3 bg-gray-700 rounded-lg border-none text-white"
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            className="w-full p-3 bg-gray-700 rounded-lg border-none text-white"
            name="message"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-white font-semibold bg-gray-900 
      rounded-md shadow-[0_0_15px_5px_rgba(0,125,255,0.5)]
       hover:shadow-[0_0_20px_8px_rgba(0,125,255,0.7)] 
       focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>

      <div className="flex space-x-8 mt-8">
        <a
          href="https://www.linkedin.com/in/khalid-chouhan-427a222a6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-gray-400 text-4xl transition-all hover:text-blue-500"
          />
        </a>
        <a
          href="https://github.com/KHALIDCHOUHANGUJJAR/khalidchouhandeveloper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-gray-400 text-4xl transition-all hover:text-gray-600"
          />
        </a>
        <a
          href="https://wa.me/923485020076"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-gray-400 text-4xl transition-all hover:text-green-500"
          />
        </a>
        <a href="mailto:Khalidchuhan7886@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-400 text-4xl transition-all hover:text-red-500"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
