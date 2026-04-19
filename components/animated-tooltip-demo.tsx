"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Tomas Lönnblad",
    designation: "Software Engineer",
    image:
      "https://tomaslonnblad.github.io/mountains.jpg",
  },

];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex h-[20rem] align-middle absolute bottom-0 left-40 h-16 w-16">
      <AnimatedTooltip items={people} />
    </div>
  );
}
