import Hero from '@/components/landingPage/Hero'
import Section2 from '@/components/landingPage/Section2'
import { MaksedDivDemo } from '@/components/MaksedDivDemo'
import { MaskedDivSwiperCarousel } from '@/components/MaskedDivSwiperCarousel'
import React from 'react'

export default function LandingPage() {
  return (
    <div>
      <Hero />
      {/* <Section2 /> */}
      {/* <MaksedDivDemo/> */}
      <MaskedDivSwiperCarousel />
    </div>
  )
}
