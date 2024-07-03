"use client";

import React from "react";
import useHoverTextAnimation from "@/hooks/useHoverTextAnimation";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
};

export default function DecodingHoverEffectText({ text, className }: Props) {
  const { displayText, hoverHandler, mouseOutHandler } =
    useHoverTextAnimation(text);

  return (
    <p
      className={cn("font-mono", className)} // 字體跟底線一樣寬
      onMouseOver={hoverHandler}
      onMouseOut={mouseOutHandler}
    >
      {displayText}
    </p>
  );
}
