"use clinet";
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { GoArrowRight } from "react-icons/go";
// import { FaFacebookMessenger } from "react-icons/fa6";
// import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import "./Contact.css";

const Contact = () => {
  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     emailjs.sendForm("service_8ypysck", "template_k185ai4", form.current, {
  //       publicKey: "bcimoRsAcGpt5y8t8",
  //     });
  //     e.target.reset();
  //   };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title text-xl sm:text-2xl md:text-3xl lg:text-3xl  xl:text-4xl text-center font-bold mt-40 ">Contact Me</h2>
      <span className="section-subtitle text-sm text-center mb-10">Get in Touch</span>

      <div className="contact-container  flex justify-center items-center flex-col gap-24 container ">
        {/* <div className="contact-content">
          <h3 className="contact-title text-center text-xl md:text-2xl mb-5 font-medium">Talk To Me</h3>
          <div className="contact-info grid gap-1 grid-cols-1">
            <div className="contact-card bg-white border text-center rounded-sm p-1">
              <div className="flex justify-center items-center flex-col">
                <MdEmail className="contact-card-icon text-2xl text-[#333] mb-2 hover:text-black" />
                <h3 className="contact-card-title text-xs">Email</h3>
                <span className="contact-card-data text-xs mb-3">
                  msalman221020@gmailcom
                </span>
              </div>
              <a
                href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act"
                className="contact-btn flex justify-center items-center"
              >
                Write me <GoArrowRight className="contact-button-icon" />
              </a>
            </div>
            <div className="contact-card bg-white border text-center rounded-sm p-1">
              <div className="flex justify-center items-center flex-col">
                <IoLogoWhatsapp className="contact-card-icon text-2xl text-[#333] mb-2 hover:text-black" />
                <h3 className="contact-card-title text-xs">WhatsApp</h3>
                <span className="contact-card-data text-xs mb-3">+92 324 8275845</span>
              </div>
              <a
                href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act"
                className="contact-btn flex justify-center items-center"
              >
                Write me <GoArrowRight className="contact-button-icon" />
              </a>
            </div>
            <div className="contact-card bg-white border text-center rounded-sm p-1">
              <div className="flex justify-center items-center flex-col">
                <IoLogoWhatsapp className="contact-card-icon text-2xl text-[#333] mb-2 hover:text-black" />
                <h3 className="contact-card-title text-xs">Messanger</h3>
                <span className="contact-card-data text-xs block mb-3">m.me/SalmanO4</span>
              </div>
              <a
                href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act"
                className="contact-btn flex justify-center items-center gap-1"
              >
                Write me <GoArrowRight className="contact-button-icon" />
              </a>
            </div>
          </div>
        </div> */}

        <div className="contact-content">
          <form /*  ref={form} onSubmit={sendEmail} */ className="contact-form sm:w-[500px]">
            <div className="contact-form-div  mb-6 h-16">
              <label className="contact-form-tag pl-3">Name</label>
              <input
                type="text"
                required
                name="name"
                className="contact-input  w-full h-[40px] border bg-none rounded-lg pl-4"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="contact-form-div mb-6 h-16">
              <label className="contact-form-tag pl-3">Email</label>
              <input
                type="email"
                required
                name="email"
                className="contact-input  w-full h-[40px] border bg-none rounded-lg pl-4"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="contact-form-div contact-form-area mb-6 h-16">
              <label className="contact-form-tag pl-3 flex items-center">Your Message</label>
              <textarea
                name="message"
                required
                cols={30}
                rows={10}
                className="contact-input w-full h-[80px]  border bg-none rounded-lg pl-4"
                placeholder="Somthing You Want to Write for me"
              ></textarea>
            </div>
            <button className="px-4 bg-black mt-16  text-white rounded-md py-2 flex justify-center items-center gap-1">
              Send Message
              <FaLocationArrow className="home-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
