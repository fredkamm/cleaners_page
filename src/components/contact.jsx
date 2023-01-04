/* eslint-disable react/style-prop-object */
import React from "react";

// import contact data
import { contact } from "../data";

const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto pb-7">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[36px] font-bold py-8 text-gray-800 xl:text-[50px] lg:text-[42px] md:text-[38px]">Contact Me</h1>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div
                  className="flex lg:flex-row gap-x-4 sm:flex-row"
                  key={index}
                >
                  <div className="text-text rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-text">{subtitle}</p>
                    <p className="text-secondary font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            method="POST"
            action="https://getform.io/f/7676c069-e04f-4b7d-957f-93f542a8679b"
            className="space-y-8 w-full max-w-[780px] px-3"
          >
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your name"
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your email"
              />
            </div>
            <input
              className="input"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <textarea
              className="textarea"
              name="message"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg hover:bg-secondary-hover">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
