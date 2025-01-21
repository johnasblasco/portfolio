import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

export const Contact = () => {
      return (
            <div className="flex flex-col items-center justify-center bg-neutral-100 px-8 py-24 text-neutral-800">
                  {/* Contact  */}
                  <ContactPage />
                  <BlockInTextCard
                        tag="/ CONTACT"
                        text={
                              <>
                                    <strong>Have questions?</strong> Feel free to reach out to me on my socials. Thank you for visiting my website.
                                    <br />I'm always happy to see you.

                              </>
                        }
                        examples={[
                              "Are you looking for a job?",
                              "What is your favorite color?",
                              "How old are you?",
                              "Are you still single?",
                        ]}
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
                              subtitle="add me as a 'friend' 🥹 at facebook dot com "
                              href="#"
                              Icon={FiUser}
                        />
                        <Card
                              title="Facebook"
                              subtitle="add me as a 'friend' 🥹 at facebook dot com "
                              href="#"
                              Icon={FiUser}
                        />
                        <Card
                              title="Facebook"
                              subtitle="add me as a 'friend' 🥹 at facebook dot com "
                              href="#"
                              Icon={FiUser}
                        />
                        <Card
                              title="Facebook"
                              subtitle="add me as a 'friend' 🥹 at facebook dot com "
                              href="#"
                              Icon={FiUser}
                        />
                  </div>



            </>
      );
}

const Card = ({ title, subtitle, href, Icon }) => {
      return (
            <>
                  <div>
                        <a
                              href={href}
                              className="text-zinc-950 my-10 font-bold w-full p-4 rounded border-zinc-900 relative overflow-hidden group bg-white flex flex-col items-center justify-center text-center"
                        >
                              <div className="absolute inset-0 bg-zinc-900 text-white translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300">
                                    HEHE kopal!
                              </div>
                              <div className="border-2 border-zinc-400 p-2 rounded-md w-fit">
                                    <Icon className="text-3xl text-pink-600 z-10" />
                              </div>
                              <p className="text-2xl mt-10 ">{title}</p>
                              <p className="text-md text-zinc-600 m-4">{subtitle}</p>
                        </a>
                  </div>
            </>
      )
};




const BlockInTextCard = ({ tag, text, examples }) => {
      return (
            <div className="w-full max-w-xl space-y-6">
                  <div>
                        <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
                        <hr className="border-neutral-700" />
                  </div>
                  <p className="max-w-lg text-xl leading-relaxed">{text}</p>
                  <div>
                        <Typewrite examples={examples} />
                        <hr className="border-neutral-300" />
                  </div>
                  <Link to='/contact'>
                        <button className="w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100">
                              Contact Me
                        </button>
                  </Link>
            </div>
      );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
      const [exampleIndex, setExampleIndex] = useState(0);

      useEffect(() => {
            const intervalId = setInterval(() => {
                  setExampleIndex((pv) => (pv + 1) % examples.length);
            }, SWAP_DELAY_IN_MS);

            return () => clearInterval(intervalId);
      }, []);

      return (
            <p className="mb-2.5 text-sm font-light uppercase">
                  <span className="inline-block size-2 bg-neutral-950" />
                  <span className="ml-3">
                        EXAMPLE:{" "}
                        {examples[exampleIndex].split("").map((l, i) => (
                              <motion.span
                                    initial={{
                                          opacity: 1,
                                    }}
                                    animate={{
                                          opacity: 0,
                                    }}
                                    transition={{
                                          delay: FADE_DELAY,
                                          duration: MAIN_FADE_DURATION,
                                          ease: "easeInOut",
                                    }}
                                    key={`${exampleIndex}-${i}`}
                                    className="relative"
                              >
                                    <motion.span
                                          initial={{
                                                opacity: 0,
                                          }}
                                          animate={{
                                                opacity: 1,
                                          }}
                                          transition={{
                                                delay: i * LETTER_DELAY,
                                                duration: 0,
                                          }}
                                    >
                                          {l}
                                    </motion.span>
                                    <motion.span
                                          initial={{
                                                opacity: 0,
                                          }}
                                          animate={{
                                                opacity: [0, 1, 0],
                                          }}
                                          transition={{
                                                delay: i * LETTER_DELAY,
                                                times: [0, 0.1, 1],
                                                duration: BOX_FADE_DURATION,
                                                ease: "easeInOut",
                                          }}
                                          className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
                                    />
                              </motion.span>
                        ))}
                  </span>
            </p>
      );
};