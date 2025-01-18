import React from "react";
import { motion } from "framer-motion";

export const BouncyCardsFeatures = () => {
      return (
            <section className="mx-auto max-w-7xl px-4 py-12 text-slate-100">
                  <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
                        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
                              Experience and Certifications
                              <span className="text-pink-400"> of "4" years progress</span>
                        </h2>
                        <a href="https://www.linkedin.com/in/johnasblasco/" target="_blank" rel="noopener noreferrer"><motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="whitespace-nowrap rounded-lg bg-slate-100 px-4 py-2 font-medium text-zinc-950 shadow-xl transition-colors hover:bg-pink-500 hover:text-white"
                        >
                              Visit Linkedin
                        </motion.button></a>
                  </div>
                  <div className="mb-4 grid grid-cols-12 gap-4">
                        <BounceCard className="col-span-12 md:col-span-4">
                              <CardTitle>Python for Beginners 2023</CardTitle>
                              <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                                    <span className="block text-center font-semibold text-indigo-50">
                                          <a href="https://www.udemy.com/certificate/UC-dfa0a2f9-6be8-471f-be30-a2902ba3aa94/" target="_blank" rel="noopener noreferrer"><img src="/c1.jpg" alt="" /></a>
                                    </span>
                              </div>
                        </BounceCard>
                        <BounceCard className="col-span-12 md:col-span-8">
                              <CardTitle>SQL Server and Management Studio with AzureStudio</CardTitle>
                              <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                                    <span className="block text-center font-semibold text-orange-50">
                                          <a href="https://www.udemy.com/certificate/UC-9977b337-cf3b-455a-b25d-10ae5de325f5/" target="_blank" rel="noopener noreferrer"><img src="/c2.png" alt="" className="bg-bottom" />    </a>
                                    </span>
                              </div>
                        </BounceCard>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                        <BounceCard className="col-span-12 md:col-span-8">
                              <CardTitle>Frontend Development - HTML </CardTitle>
                              <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                                    <span className="block text-center font-semibold text-emerald-50">
                                          <a href="https://www.mygreatlearning.com/certificate/KINHEHHC" target="_blank" rel="noopener noreferrer"><img src="c3.jpg" alt="" /></a>
                                    </span>
                              </div>
                        </BounceCard>
                        <BounceCard className="col-span-12 md:col-span-4">
                              <CardTitle>Introduction to Machine Learning</CardTitle>
                              <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                                    <span className="block text-center font-semibold text-red-50">
                                          <a href="https://www.mygreatlearning.com/certificate/VZFEZYJU" target="_blank" rel="noopener noreferrer"><img src="/c4.jpg" alt="" /></a>
                                    </span>
                              </div>
                        </BounceCard>
                  </div>
            </section>
      );
};

const BounceCard = ({ className, children }) => {
      return (
            <motion.div
                  whileHover={{ scale: 0.95, rotate: "-1deg" }}
                  className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
            >
                  {children}
            </motion.div>
      );
};

const CardTitle = ({ children }) => {
      return (
            <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
      );
};