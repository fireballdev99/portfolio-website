"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import FacebookIcon from "../../../public/facebook-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = "service_fz9gxg6";
    const templateID = "template_mitc8jb";
    const publicKey = "MlDHvsACdCLPb72hT";
    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEmailSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-gradient-radial from-primary-900 to-transparent rounded-full h-96 w-96 z-0 blur-lg absolute top-3/4 -left-4 xl:-left-48 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-5">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Currently on the lookout for fresh opportunities, my inbox eagerly
          awaits your messages. Whether you're curious or just fancy a friendly
          greeting, I'm committed to being responsive and getting back to you as
          soon as possible!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link
            href="https://github.com/fireballdev99"
            className="w-[48px]"
            target="_blank"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vvachxra/"
            className="w-[48px]"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkdein Icon" />
          </Link>
        </div>
      </div>
      <div className="">
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hello!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSent && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
