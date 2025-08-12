"use client";
import { useEffect, useState } from "react";

export default function About() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans relative">
      {/* Section 1 — scrolls slower */}
      <section
        className="h-[100vh] bg-yellow-500 flex items-center justify-center"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg")`,
           backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offsetY * 0.12}px)`, // 0.4 = slower scroll
          position: "relative",
          zIndex: 30,
        }}
      >
        <h1 className="text-6xl font-bold text-white">Section 1</h1>
      </section>

      {/* Section 2 — sticky behind Section 1 */}
      <section
        className="h-screen sticky top-0 z-10 bg-white flex items-center justify-center"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/5712529/pexels-photo-5712529.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-6xl font-bold text-black">
          Section 2 (from behind)
        </h1>
      </section>

      {/* Section 3 — on top */}
      <section className="h-screen sticky top-0 z-20 bg-purple-700 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">Section 3 (on top)</h1>
      </section>

      {/* Section 4 — on top */}
      <section className="h-screen sticky top-0 z-20 bg-black flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">Section 4 (from top)</h1>
      </section>

      {/* Spacer */}
      <div className="h-screen bg-black" />
    </div>
  );
}
