"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const section2TextRef = useRef(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Split text into characters and wrap each in a span
    const textElement = section2TextRef.current;
    if (textElement) {
      const text = textElement.textContent;
      
      // Create spans for each character
      textElement.innerHTML = text
        .split('')
        .map((char, index) => {
          if (char === ' ') {
            return ' '; // Keep spaces as is
          }
          return `<span class="char" style="color: #d1d5db; transition: color 0.1s ease;">${char}</span>`; // gray-300 with smooth transition
        })
        .join('');

      // Get all character spans
      const charSpans = textElement.querySelectorAll('.char');

      // Mobile-optimized GSAP animation
      ScrollTrigger.create({
        trigger: section2TextRef.current,
        start: isMobile ? "top 90%" : "top 80%", // Start earlier on mobile
        end: isMobile ? "top 10%" : "top 20%", // More scroll distance on mobile
        scrub: isMobile ? 0.5 : true, // Slightly less scrubbing on mobile for performance
        onUpdate: (self) => {
          // Calculate how many characters should be black based on scroll progress
          const progress = self.progress;
          const charsToAnimate = Math.floor(progress * charSpans.length);
          
          // Use requestAnimationFrame for better mobile performance
          requestAnimationFrame(() => {
            charSpans.forEach((char, index) => {
              if (index <= charsToAnimate) {
                char.style.color = "#000"; // Black
              } else {
                char.style.color = "#d1d5db"; // Gray-300
              }
            });
          });
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div className="font-sans relative">
      {/* Section 1 - Mobile Optimized */}
      <section
        className="h-screen flex items-center px-4 md:px-10 bg-white"
        style={{
          transform: `translateY(${offsetY * (isMobile ? 0.08 : 0.12)}px)`, // Reduced parallax on mobile
          position: "relative",
          zIndex: 30,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center w-full max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-red-800 mb-4 leading-tight">
              Qualityze
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-black">
              The ultimate platform to manage and scale your SaaS business.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <video
              src="https://saasential-roan.vercel.app/videos/saasentiel-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl shadow-lg max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Mobile Optimized Text */}
      <section
        className="h-screen sticky top-0 z-10 flex items-center justify-center"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/5712529/pexels-photo-5712529.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-20"></div> {/* Overlay for better text readability */}
        <h1
          ref={section2TextRef}
          className={`
            relative z-10 font-bold px-4 sm:px-8 md:px-20 leading-relaxed
            ${isMobile 
              ? 'text-2xl sm:text-3xl' 
              : 'text-4xl md:text-5xl'
            }
          `}
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)', // Better text visibility on mobile
            lineHeight: isMobile ? '1.4' : '1.3',
          }}
        >
          Section 2 (from behind)- In this blog post, we are going to guide you through the basics of FMEA, its best applications, the guidelines that steer it, and how to perform a good analysis.
        </h1>
      </section>

      {/* Section 3 - Mobile Optimized */}
      <section className="h-screen sticky top-0 z-20 bg-purple-700 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center px-4">
          Section 3 (on top)
        </h1>
      </section>

      {/* Section 4 - Mobile Optimized */}
      <section className="h-screen sticky top-0 z-20 bg-black flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center px-4">
          Section 4 (from top)
        </h1>
      </section>

      {/* Spacer */}
      <div className="h-screen bg-black" />
    </div>
  );
}
