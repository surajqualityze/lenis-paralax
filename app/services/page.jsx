"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const containerRef = useRef(null);

  const sections = [
    {
      id: 1,
      heading: "Welcome to Our Platform",
      paragraph:
        "Discover amazing features that will transform your workflow. Our cutting-edge technology provides seamless integration and powerful tools to boost your productivity.",
      buttonText: "Get Started",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    },
    {
      id: 2,
      heading: "Advanced Analytics",
      paragraph:
        "Gain deep insights into your data with our comprehensive analytics dashboard. Track performance, identify trends, and make data-driven decisions with confidence.",
      buttonText: "View Analytics",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    },
    {
      id: 3,
      heading: "Seamless Integration",
      paragraph:
        "Connect with your favorite tools and services effortlessly. Our platform supports hundreds of integrations to streamline your existing workflow.",
      buttonText: "Browse Integrations",
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".image-container").forEach((img) => {
        gsap.to(img, {
          y: "-100vh", // full viewport height scroll
          ease: "none",
          scrollTrigger: {
            trigger: img.closest("section"),
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative gradient-container">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={section.id}
            className="h-screen w-full flex items-center justify-between px-8 lg:px-16 sticky top-0 z-10"
          >
            {isEven ? (
              <>
                {/* TEXT stays fixed */}
                <div className="flex-1 pr-8 z-20">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                    {section.heading}
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                    {section.paragraph}
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                    {section.buttonText}
                  </button>
                </div>

                {/* IMAGE scrolls across viewport */}
                {/* IMAGE scrolls across viewport */}
                <div className="flex-1 flex items-center justify-center overflow-hidden relative h-screen ">
                  <div className="image-container flex items-center justify-center h-full">
                    <img
                      src={section.imageUrl}
                      alt={section.heading}
                      className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-lg mx-auto"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>

                {/* IMAGE scrolls across viewport */}
                <div className="flex-1 flex items-center justify-center overflow-hidden relative h-screen ">
                  <div className="image-container flex items-center justify-center h-full">
                    <img
                      src={section.imageUrl}
                      alt={section.heading}
                      className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-lg mx-auto"
                    />
                  </div>
                </div>

                {/* TEXT stays fixed */}
                <div className="flex-1 pl-8 z-20">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                    {section.heading}
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                    {section.paragraph}
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                    {section.buttonText}
                  </button>
                </div>
              </>
            )}
          </section>
        );
      })}
    </div>
  );
}
