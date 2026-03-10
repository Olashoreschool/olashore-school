import FindUs from "@/components/FindUs";
import Map from "@/components/Map";
import { NextSeo } from "next-seo";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const createMailtoLink = () => {
    const mailto = "info@olashoreschool.com";
    const subjectParam = encodeURIComponent(subject);
    const bodyParam = encodeURIComponent(`Hello, I'm ${name}.\n${message}`);

    return `mailto:${mailto}?subject=${subjectParam}&body=${bodyParam}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = createMailtoLink();
    window.open(mailtoLink, "_blank");
  };

  return (
    <>
      <NextSeo title="Contact - Olashore International School" />
      <div>
        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="text-center mb-20">
            <h1 className="text-2xl md:text-4xl font-bold text-[var(--primary-color)]">
              Get In Touch
            </h1>
            <p className="mt-4 text-gray-500">
              We would love to hear from you.
            </p>
          </div>

          <form
            className="bg-[#AFA2A6] p-10 md:p-20 rounded-lg text-black"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-10">
              <aside className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="Your Name"
                    required
                    className="outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="Your Email"
                    required
                    className="outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="Subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    className="outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </aside>

              <aside>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm">
                    Enter Message
                  </label>
                  <textarea
                    required
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Write a message"
                    className="outline-none border-none resize-none text-black p-3 rounded-lg text-sm tracking-[1.5px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </aside>
            </div>

            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-[var(--yellow-color)] p-3 rounded-lg hover:opacity-80"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-[var(--primary-color)] text-center mb-10">
            Find Us
          </h1>

          <FindUs />
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <Map />
        </section>
      </div>
    </>
  );
};

export default Contact;
