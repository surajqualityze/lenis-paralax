import React from "react"
import MaskedDiv from "./ui/masked-div"

export function MaksedDivDemo() {
  return (
    <div className="items-between m-auto mt-40 flex max-w-5xl flex-wrap justify-between gap-5">
      {/* Type-1: Curved corner on RIGHT TOP */}
      <MaskedDiv maskType="type-1" size={0.45} className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>

      {/* Type-2: Curved corner on RIGHT BOTTOM */}
      <MaskedDiv maskType="type-2" size={0.45} className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069803/18069803-uhd_1440_2560_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>

      {/* Type-3: Curved corner on LEFT TOP */}
      <MaskedDiv maskType="type-3" size={0.45} className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>

      {/* Type-4: Curved corner on LEFT BOTTOM */}
      <MaskedDiv maskType="type-4" size={0.45} className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069701/18069701-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
    </div>
  )
}
