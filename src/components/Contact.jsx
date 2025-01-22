import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
      return (
            <div className="flex flex-col items-center justify-center bg-neutral-100 px-8 py-24 text-neutral-800">
                  {/* Contact  */}
                  <ContactPage />
                  <BlockInTextCard
                        text={
                              <>
                                    <strong>Have questions?</strong> Feel free to reach out to me on my socials. Thank you for visiting my website.
                                    <br />I'm always happy to see you.

                              </>
                        }

                  />
            </div>
      );
};


const ContactPage = () => {
      return (
            <>
                  <div className="mb-20">
                        <img src="/logo.png" className="size-20 mx-auto " alt="logo" />
                        <h2 className="text-zinc-950 text-6xl font-extrabold text-center">Contact Me Girl</h2>
                        <p className="text-center m-10">Let me know if I can help you</p>
                  </div>

                  <div className="md:grid md:grid-cols-4 gap-10">
                        {/* card here */}
                        <Card
                              title="Facebook"
                              subtitle="add me as a 'friend' :( at facebook dot com "
                              href="https://www.facebook.com/J.blasco20"
                              Icon={FaFacebook}
                              gif={'/fb.gif'}
                        />
                        <Card
                              title="Instagram"
                              subtitle="Ig moots? hehe "
                              href="https://www.instagram.com/lasika.spur"
                              Icon={FaInstagram}
                              gif={'/instagram.gif'}
                        />
                        <Card
                              title="Github"
                              subtitle="Follow me  on Github 💻"
                              href="https://github.com/johnasblasco"
                              Icon={FaGithub}
                              gif={'/github.gif'}
                        />
                        <Card
                              title="Linkedin"
                              subtitle="Let's connect on Linkedin ugh"
                              href="https://www.linkedin.com/in/johnasblasco/"
                              Icon={FaLinkedin}
                              gif={'/linkedin.gif'}
                        />
                  </div>



            </>
      );
}

const Card = ({ title, subtitle, href, Icon, gif }) => {
      return (
            <>
                  <div a>
                        <a
                              href={href}
                              target="_blank"
                              className="h-64 text-zinc-950 my-10 font-bold w-full p-4 rounded border-zinc-900 relative overflow-hidden group bg-white flex flex-col items-center justify-center text-center"
                        >
                              <div className="absolute inset-0 bg-white text-white translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300">
                                    <img src={gif} alt="" className="w-full h-full object-cover" />
                              </div>
                              <div className="border-2 border-pink-600 p-2 rounded-md w-fit">
                                    <Icon className="text-3xl text-pink-600 z-10" />
                              </div>
                              <p className="text-2xl mt-10 ">{title}</p>
                              <p className="text-md text-zinc-600 m-4">{subtitle}</p>
                        </a>
                  </div>
            </>
      )
};




const BlockInTextCard = ({ text }) => {
      return (
            <div className="w-full max-w-xl space-y-6">
                  <div>
                        <hr className="border-neutral-700" />
                  </div>
                  <p className="max-w-lg text-xl leading-relaxed">{text}</p>

                  <a href="#">
                        <button className="mt-10 w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100">
                              Contact Me
                        </button>
                  </a>
            </div>
      );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

