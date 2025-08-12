"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function FlowingMenu({ items = [], speed = 12000, gap = "2rem" }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} speed={speed} gap={gap} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image, speed = 12000, gap = "2rem" }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const marqueeContentRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  // Pure JavaScript marquee animation
  useEffect(() => {
    if (!marqueeContentRef.current || !isHovered) return;

    const element = marqueeContentRef.current;
    const containerWidth = element.parentElement.offsetWidth;
    const contentWidth = element.scrollWidth;
    
    // Only animate if content is wider than container
    if (contentWidth > containerWidth) {
      const animateMarquee = () => {
        gsap.set(element, { x: containerWidth });
        gsap.to(element, {
          x: -contentWidth,
          duration: speed / 1000,
          ease: "none",
          repeat: -1,
        });
      };

      animateMarquee();
      animationRef.current = true;
    }

    return () => {
      gsap.killTweensOf(element);
      animationRef.current = null;
    };
  }, [isHovered, speed]);

  const handleMouseEnter = (ev) => {
    setIsHovered(true);
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev) => {
    setIsHovered(false);
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
  };

  // Clean up animations
  useEffect(() => {
    return () => {
      gsap.killTweensOf(marqueeRef.current);
      gsap.killTweensOf(marqueeInnerRef.current);
      gsap.killTweensOf(marqueeContentRef.current);
    };
  }, []);

  // Create marquee content
  const marqueeContent = Array.from({ length: 6 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span 
        className="text-[#060010] uppercase font-normal text-[4vh] leading-[1.2] inline-block"
        style={{ 
          paddingLeft: gap, 
          paddingRight: gap,
        }}
      >
        {text}
      </span>
      <div
        className="w-[200px] h-[7vh] rounded-[50px] bg-cover bg-center inline-block align-middle"
        style={{ 
          backgroundImage: `url(${image})`,
          marginLeft: gap,
          marginRight: gap,
        }}
      />
    </React.Fragment>
  ));

  return (
    <div
      ref={itemRef}
      className="flex-1 relative overflow-hidden text-center"
      style={{ boxShadow: '0 -1px 0 0 #fff' }}
    >
      <a
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[4vh] transition-colors duration-300"
        style={{ 
          color: isHovered ? '#060010' : 'white'
        }}
      >
        {text}
      </a>

      {/* Marquee */}
      <div
        ref={marqueeRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white"
        style={{ transform: 'translateY(101%)' }}
      >
        <div 
          ref={marqueeInnerRef} 
          className="h-full w-full flex items-center overflow-hidden"
          style={{ transform: 'translateY(101%)' }}
        >
          <div 
            ref={marqueeContentRef}
            className="flex items-center h-full whitespace-nowrap"
            style={{ minWidth: 'max-content' }}
          >
            {marqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}
