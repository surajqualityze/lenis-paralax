"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section2() {
  const section2Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Parallax effect for section 2 background
    gsap.to(section2Ref.current, {
      yPercent: -30, // adjust to match speed
      ease: "none",
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top bottom",  // when section 2 enters viewport
        end: "bottom top",    // until it leaves
        scrub: true,          // smooth follow scroll
      },
    });

    // Text color reveal with delay
    gsap.to(textRef.current, {
      color: "#000", // black
      ease: "none",
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 70%", // start 70% into view
        end: "top 20%",
        scrub: true,
      },
      delay: 0.3, // small delay for smoother reveal
    });
  }, []);

  return (
    <div className="font-sans relative">
      {/* Section 1 */}
      <section
        className="h-screen bg-yellow-500 flex items-center justify-center"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-6xl font-bold text-white">Section 1</h1>
      </section>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        className="h-screen sticky top-0 flex items-center justify-center"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/5712529/pexels-photo-5712529.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          ref={textRef}
          className="text-6xl font-bold"
          style={{ color: "#888" }} // gray initially
        >
          Section 2 (from behind)
        </h1>
      </section>

      {/* Section 3 */}
      <section className="h-screen sticky top-0 bg-purple-700 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">Section 3 (on top)</h1>
      </section>

      {/* Section 4 */}
      <section className="h-screen sticky top-0 z-20 bg-black flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">Section 4 (from top)</h1>
      </section>

      {/* Spacer */}
      <div className="h-screen bg-black" />
    </div>
  );
}
