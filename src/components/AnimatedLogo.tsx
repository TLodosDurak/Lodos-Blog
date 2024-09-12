"use client";
import React from "react";
import { JSX, SVGProps } from "react";

function AnimatedLogo(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="50"
      height="50"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <title>Layer 1</title>
        <g id="svg_7">
          <line stroke="currentColor" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" id="svg_1" y2="149.5" x2="504.49999" y1="149.5" x1="138.5" fill="none" />
          <line transform="rotate(90 323.5 298)" stroke="currentColor" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" id="svg_2" y2="298" x2="495.99999" y1="298" x1="151" fill="none" />
          <line stroke="currentColor" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" id="svg_3" y2="470.5" x2="661.49999" y1="470.5" x1="298.5" fill="none" />
          <path id="svg_4" d="m424.5,278.5l236.99999,0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="50" stroke="currentColor" fill="none" />
          <line transform="rotate(90 449.5 377)" stroke="currentColor" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" id="svg_5" y2="377" x2="546" y1="377" x1="352.99999" fill="none" />
          <line transform="rotate(90 636.5 376.5)" stroke="currentColor" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" id="svg_6" y2="376.5" x2="734.49999" y1="376.5" x1="538.50001" fill="none" />
        </g>
      </g>
    </svg>
  );
}

export default AnimatedLogo;


