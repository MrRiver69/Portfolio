'use client';

import Header from "@/components/Header";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function FlickeringExamplePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 dark:text-white relative z-10">Flickering Grid Example</h1>
        
        <div className="grid gap-8 mb-10">
          <div className="relative h-[400px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <FlickeringGrid
              squareSize={6}
              gridGap={8}
              color="#3B82F6"
              maxOpacity={0.8}
              flickerChance={0.2}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-bold dark:text-white bg-white/70 dark:bg-black/70 px-4 py-2 rounded">
                Blue Flickering Grid
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <FlickeringGrid
              squareSize={8}
              gridGap={10}
              color="#10B981"
              maxOpacity={0.8}
              flickerChance={0.15}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-bold dark:text-white bg-white/70 dark:bg-black/70 px-4 py-2 rounded">
                Green Flickering Grid
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <FlickeringGrid
              squareSize={4}
              gridGap={6}
              color="#EC4899"
              maxOpacity={0.8}
              flickerChance={0.25}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-bold dark:text-white bg-white/70 dark:bg-black/70 px-4 py-2 rounded">
                Pink Flickering Grid
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 