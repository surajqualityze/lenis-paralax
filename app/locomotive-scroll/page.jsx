"use client"
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Create a timeline for the entire sequence
    const tl = gsap.timeline();
    
    // Section One slides up
    tl.to("#section-one", {
      y: "-100vh",
      ease: "none",
      scrollTrigger: {
        trigger: "#reveal-container",
        start: "top top",
        end: "50% top",
        scrub: 1,
        id: "section-one-reveal"
      }
    });
    
    // Section Three slides over Section Two
    gsap.fromTo("#section-three", 
      { y: "100vh" },
      { 
        y: "0vh",
        ease: "none",
        scrollTrigger: {
          trigger: "#reveal-container",
          start: "50% top",
          end: "bottom top",
          scrub: 1,
          id: "section-three-cover"
        }
      }
    );
    
  }, []);

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


        {/* Section Two - Fixed background layer with image */}
        <section 
          id="section-two" 
          className="h-screen flex items-center justify-center fixed top-0 left-0 w-full z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/774548/pexels-photo-774548.jpeg')"
          }}
        >
          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-red-900/40"></div> */}
          <h1 className="text-4xl text-white font-bold relative z-10 drop-shadow-lg">
            Section Two (Revealed)
          </h1>
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
