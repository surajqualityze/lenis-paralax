import React from "react";
import FlowingMenu from "./FlowingMenu";

const demoItems = [
  { link: "#", text: "Mojave", image: "https://picsum.photos/600/400?random=1" },
  { link: "#", text: "Sonoma", image: "https://picsum.photos/600/400?random=2" },
  { link: "#", text: "Monterey", image: "https://picsum.photos/600/400?random=3" },
  { link: "#", text: "Sequoia", image: "https://picsum.photos/600/400?random=4" },
];

export default function FlowingMenuDemo() {
  return (
    <div className="h-[600px] flex items-center justify-center bg-black">
      <FlowingMenu items={demoItems} speed="12s" gap="2rem" />
    </div>
  );
}
