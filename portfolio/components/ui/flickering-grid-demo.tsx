"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";

export function FlickeringGridDemo() {
  return (
    <div className="relative h-[500px] rounded-lg w-full bg-background overflow-hidden border">
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={6}
        gridGap={8}
        color="#3B82F6"
        maxOpacity={0.6}
        flickerChance={0.2}
      />
    </div>
  );
} 