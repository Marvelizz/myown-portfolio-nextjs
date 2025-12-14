"use client";

import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

import { Typewriter } from 'react-simple-typewriter'
import ScrollReveal from "./ScrollReveal";

const HereSection = () => {
  return (
    <section id="home" className="relative pt-36 pb-24">
      <div className="mt-12 md:mt-24">
        {/* avatar and headline */}
        <ScrollReveal stagger={0.12} className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          {/* avatar and greetings */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-gradient-to-b from-[#7c3aed] via-[#6d28d9]/30 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
              <div className="relative w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[320px] lg:h-[320px] here-avatar here-anim overflow-hidden rounded-full flex items-center justify-center mx-auto md:mx-0">
                <div className="absolute -inset-6 sm:-inset-7 md:-inset-8 rounded-full bg-gradient-to-b from-[#7c3aed]/60 via-[#6d28d9]/30 to-transparent blur-3xl opacity-80 pointer-events-none"></div>
                <div className="absolute inset-0 pointer-events-none overflow-visible">
                  <span className="here-particle p1"></span>
                  <span className="here-particle p2"></span>
                  <span className="here-particle p3"></span>
                </div>
                <Image src="/images/PIC3.jpg" alt="avatar image" fill className="object-cover w-full h-full" priority/>
              </div>

                {/* small greeting with curve arrow */}
                <div  className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-xs text-white/70">
                    <div className="relative flex items-center justify-end">
                        <div className="relative w-16 h-6 md:w-24 md:h-16">
                            <Image src="/images/hero-arrow.png" alt="arrow image" fill  className="object-contain scale-x-100 -rotate-6" priority/>
                        </div>
                        <div className="-mt-6 md:-mt-10 shrink-0">
                            <span>Hello! I am {" "}</span>
                            <span className="text-[#a78bfa]">Mohammed Ansar</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* headline */}
          <div className="md:pl-2 text-center md:text-left">
            <p className="text-sm md:text-base text-white/60 mb-2">
              A Developer who
            </p>

            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15]">
              <span className="block">Judges a site</span>
              <span className="block">
                by its{" "}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#7127BA]">first load</span>
                  <span className="pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 rotate-12">
                    <Image
                      src="/images/ellipse.png"
                      alt="arrow"
                      fill
                      className="object-contain"
                      priority
                    />
                  </span>
                </span>
                ...
              </span>
            </h1>

            <p className="mt-2 text-[10px] md:text-xs text-white/50 max-w-md md:max-w-lg mx-auto md:mx-0">
              Because if it doesn’t engage instantly, what else will?
            </p>
          </div>
        </ScrollReveal>

        {/* role and description */}
        <ScrollReveal delay={0.15} className="mt-16 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
                <Typewriter 
                words={["I'm a Full Stack Developer..","I'm a Web Innovator..","I'm a Digital Problem-Solver..", "I'm a Tech Enthusiast.."]}
                typeSpeed={65}
                deleteSpeed={0}
                delaySpeed={600}
                cursor
                cursorStyle="|"
                loop={1}
                />
            </h2>
            <p>Currently, I'm work as a Freelancer  <span className="inline-flex items-center  gap-1 text-[#1877F2]">
                <FaLinkedin size={20} aria-hidden/> 
                   <a href="https://www.linkedin.com/in/mohammed-ansar-1b156533b" className="text-[#1877F2]">LinkedIn</a>
            </span></p>

            <p className="mt-6 text-white/70 leading-7">A highly motivated Full Stack Developer with a strong foundation in software development.<br></br>
            I build scalable, efficient, and user-friendly solutions backed by solid front-end and back-end expertise.<br></br>
            Adaptable to new technologies and effective in collaborative environments, I contribute to innovative projects with clarity and purpose.</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HereSection;
