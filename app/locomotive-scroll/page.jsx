"use client"
import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { motion } from "framer-motion"

// Enhanced Lamp Container with scroll trigger control
const LampContainer = ({ children, className, triggerAnimation }) => {
  return (
    <div className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0 ${className}`}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.2, width: "8rem" }}
          animate={triggerAnimation ? { opacity: 1, width: "30rem" } : { opacity: 0.2, width: "8rem" }}
          transition={{
            delay: triggerAnimation ? 0.1 : 0, // No delay when reversing
            duration: triggerAnimation ? 1.2 : 0.8, // Faster reverse
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.2, width: "8rem" }}
          animate={triggerAnimation ? { opacity: 1, width: "30rem" } : { opacity: 0.2, width: "8rem" }}
          transition={{
            delay: triggerAnimation ? 0.1 : 0,
            duration: triggerAnimation ? 1.2 : 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

        <motion.div
          initial={{ opacity: 0.1, scale: 0.5 }}
          animate={triggerAnimation ? { opacity: 0.5, scale: 1 } : { opacity: 0.1, scale: 0.5 }}
          transition={{
            delay: triggerAnimation ? 0.2 : 0,
            duration: triggerAnimation ? 1.0 : 0.6,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"
        />
        
        <motion.div
          initial={{ width: "4rem", opacity: 0.3 }}
          animate={triggerAnimation ? { width: "16rem", opacity: 1 } : { width: "4rem", opacity: 0.3 }}
          transition={{
            delay: triggerAnimation ? 0.3 : 0,
            duration: triggerAnimation ? 1.0 : 0.6,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>

        <motion.div
          initial={{ width: "8rem", opacity: 0.2 }}
          animate={triggerAnimation ? { width: "30rem", opacity: 1 } : { width: "8rem", opacity: 0.2 }}
          transition={{
            delay: triggerAnimation ? 0.4 : 0,
            duration: triggerAnimation ? 1.0 : 0.6,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  )
}

export default function Page() {
  const [lampAnimation, setLampAnimation] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Section One slides up with reverse capability
    gsap.to("#section-one", {
      y: "-100vh",
      ease: "none",
      scrollTrigger: {
        trigger: "#reveal-container",
        start: "top top",
        end: "50% top",
        scrub: 1, // This automatically handles reverse on scroll up
        id: "section-one-reveal"
      }
    });

    // Enhanced lamp trigger with proper reverse handling
    ScrollTrigger.create({
      trigger: "#reveal-container",
      start: "10% top",
      end: "40% top",
      onEnter: () => {
        console.log("Lamp animation triggered - forward!");
        setLampAnimation(true);
      },
      onLeave: () => {
        console.log("Lamp animation off - forward scroll continues!");
        // Keep lamp on while Section Two is visible
      },
      onEnterBack: () => {
        console.log("Lamp animation triggered - scroll back up!");
        setLampAnimation(true);
      },
      onLeaveBack: () => {
        console.log("Lamp animation off - scrolled back to top!");
        setLampAnimation(false);
      }
    });

    // Additional trigger to turn off lamp when Section Three starts covering
    ScrollTrigger.create({
      trigger: "#reveal-container",
      start: "50% top",
      end: "60% top",
      onEnter: () => {
        console.log("Section Three coming - turning off lamp!");
        setLampAnimation(false);
      },
      onLeaveBack: () => {
        console.log("Section Three going back - turning on lamp!");
        setLampAnimation(true);
      }
    });
    
    // Section Three slides over Section Two with reverse capability
    gsap.fromTo("#section-three", 
      { y: "100vh" },
      { 
        y: "0vh",
        ease: "none",
        scrollTrigger: {
          trigger: "#reveal-container",
          start: "50% top",
          end: "bottom top",
          scrub: 1, // Automatically reverses when scrolling up
          id: "section-three-cover"
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    
  }, []);

  // Debug: Log when lampAnimation state changes
  useEffect(() => {
    console.log("Lamp animation state:", lampAnimation);
  }, [lampAnimation]);

  return (
    <div>
      {/* Container for the reveal sequence */}
      <div id="reveal-container" className="relative">
        
        {/* Section One - Slides up to reveal Section Two */}
        <section 
          id="section-one" 
          className="h-screen flex items-center justify-center relative z-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/29703226/pexels-photo-29703226.png')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900/30"></div>
          <h1 className="text-4xl text-white font-bold relative z-10 drop-shadow-lg">
            Section One
          </h1>
        </section>

        {/* Section Two - Fixed background with Scroll-Triggered Lamp Effect */}
        <section 
          id="section-two" 
          className="h-screen fixed top-0 left-0 w-full z-10"
        >
          <LampContainer triggerAnimation={lampAnimation}>
            <motion.h1
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={lampAnimation ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
              transition={{
                delay: lampAnimation ? 0.8 : 0, // No delay when reversing
                duration: lampAnimation ? 1.0 : 0.5, // Faster reverse for text
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Section Two <br /> (Revealed)
            </motion.h1>
          </LampContainer>
        </section>

        {/* Spacer for scroll distance */}
        <div className="h-screen"></div>

        {/* Section Three - Slides over Section Two */}
        <section 
          id="section-three" 
          className="h-screen flex items-center justify-center relative z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/29172403/pexels-photo-29172403.jpeg')"
          }}
        >
          <div className="absolute inset-0 bg-green-900/30"></div>
          <h1 className="text-4xl text-white font-bold relative z-10 drop-shadow-lg">
            Section Three
          </h1>
        </section>
        
        
      </div>
    </div>
  )
}
