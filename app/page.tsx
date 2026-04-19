"use client"
import Component from '@/components/animated-tooltip-demo'
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"

export default function ShaderShowcase() {
  return (
 
    <ShaderBackground>
      <Component />
      <Header />
      <HeroContent />
      <PulsingCircle />
    </ShaderBackground>
    
    
  )
}
