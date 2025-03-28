'use client';

import { useState, useRef, useEffect } from 'react';
import Header from "@/components/Header";
import ProjectDetailModal, { GameProjectDetails } from "@/components/ProjectDetailModal";

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<GameProjectDetails | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionStyles, setTransitionStyles] = useState({});
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const mainViewRef = useRef<HTMLDivElement | null>(null);

  const games: GameProjectDetails[] = [
    {
      title: "Sustainable Shores",
      description: "A fishing game with a focus on sustainability and conservation.",
      longDescription: "Sustainable Shores is an open-world ocean exploration game where player, after getting lost at sea, finds an island with a starving population and must learn how to sustainable fish the area to prevent the island from starving.",
      technologies: ["Unity", "C#", "Blender"],
      role: "Lead 3D Modeler",
      thumbnailImage: "/Images/Games/Sustainable_Shores/thumbnail.jpg",
      features: [
        "Procedurally generated ocean wave system",
        "Dynamic day and night cycle",
        "Procedurally animated fish models",
        "Logbook for caught fish history",
        "Fishing mini-game mechanic"
      ],
      images: [
        { src: "/cosmic1.jpg", alt: "Sustainable Shores - Spacecraft approaching a ringed planet" },
        { src: "/cosmic2.jpg", alt: "Sustainable Shores - Space station exterior" },
        { src: "/cosmic3.jpg", alt: "Sustainable Shores - Alien landscape with unique flora" },
        { src: "/cosmic4.jpg", alt: "Sustainable Shores - Trading interface and economy screen" },
        { src: "/cosmic5.jpg", alt: "Sustainable Shores - Character customization interface" }
      ],
      type: "game"
    },
    {
      title: "Cyber Ninja",
      description: "A game about a futuristic ninja.",
      longDescription: "Cyber Ninja is a game about a ninja from the future who has the abilty to hack and take control of robotic devices.",
      technologies: ["Unity", "C#", "Blender"],
      role: "3D Artist and Level Designer",
      thumbnailImage: "/Images/Games/Cyber_Ninja/thumbnail.jpg",
      features: [
        "Fast paced puzzle platformer",
        "Double jump",
        "2D and 3D design elements",
        "Speed runner aspects",
        "Unique visuals and stylization"
      ],
      images: [
        { src: "/mythic1.jpg", alt: "Cyber Ninja - Character customization screen" },
        { src: "/mythic2.jpg", alt: "Cyber Ninja - Ancient temple dungeon" },
        { src: "/mythic3.jpg", alt: "Cyber Ninja - Combat with a dragon" },
        { src: "/mythic4.jpg", alt: "Cyber Ninja - Enchanted forest environment" },
        { src: "/mythic5.jpg", alt: "Cyber Ninja - Inventory and crafting system" }
      ],
      type: "game"
    },
    {
      title: "Door Horror",
      description: "A mirco puzzle horror experience.",
      longDescription: "Door Horror is a short horror game where the player must solve a series of puzzles to unlock various doors to find the exit.",
      technologies: ["Unity", "C#", "Blender", "Substance Painter"],
      role: "Lead Programmer and Game Designer",
      thumbnailImage: "/Images/Games/Door_Horror/thumbnail.jpg",
      features: [
        "Features four unique puzzles for the player to solve",
        "Unique stylized model textures",
        "Ramping difficulty curve and horror elements",
        "Each level has a unique theme and atmosphere",
        "Minimalistic UI and HUD"
      ],
      images: [
        { src: "/urban1.jpg", alt: "Door Horror - Neon-lit cityscape view" },
        { src: "/urban2.jpg", alt: "Door Horror - Character dialogue system" },
        { src: "/urban3.jpg", alt: "Door Horror - Evidence board investigation" },
        { src: "/urban4.jpg", alt: "Door Horror - Abandoned subway environment" },
        { src: "/urban5.jpg", alt: "Door Horror - Night club scene with unique lighting" }
      ],
      type: "game"
    },
    {
      title: "A Space Moment",
      description: "A short space experience.",
      longDescription: "A space moment is a short expeirence that aims to capture the feeling of being in space within the player.",
      technologies: ["Unity", "C#", "Blender"],
      role: "Solo Developer",
      thumbnailImage: "/Images/Games/Space_Moment/thumbnail.jpg",
      features: [
        "A space atmospheric feeling",
        "Simplistic game mechanics",
        "Minimalistic UI and HUD",
        "Delicious audio",
        "Variable gravity"
      ],
      images: [
        { src: "/urban1.jpg", alt: "A Space Moment - Neon-lit cityscape view" },
        { src: "/urban2.jpg", alt: "A Space Moment - Character dialogue system" },
        { src: "/urban3.jpg", alt: "A Space Moment - Evidence board investigation" },
        { src: "/urban4.jpg", alt: "A Space Moment - Abandoned subway environment" },
        { src: "/urban5.jpg", alt: "A Space Moment - Night club scene with unique lighting" }
      ],
      type: "game"
    },
    {
      title: "Lagoon Experience",
      description: "A short water simulation experience.",
      longDescription: "The lagoon experience is a short experience that aims to capture the feeling of being in the Brisbane Southbank lagoon, with three unique interactions for the player to experience.",
      technologies: ["UE5", "Blueprint"],
      role: "Solo Developer",
      thumbnailImage: "/Images/Games/Lagoon_Experience/thumbnail.jpg",
      features: [
        "Virtual Reality experience",
        "Advanced water simulation interactions",
        "Three interactive experiences",
        "Minimalistic UI and HUD",
        "Rubber Ducks"
      ],
      images: [
        { src: "/urban1.jpg", alt: "Lagoon Experience - Neon-lit cityscape view" },
        { src: "/urban2.jpg", alt: "Lagoon Experience - Character dialogue system" },
        { src: "/urban3.jpg", alt: "Lagoon Experience - Evidence board investigation" },
        { src: "/urban4.jpg", alt: "Lagoon Experience - Abandoned subway environment" },
        { src: "/urban5.jpg", alt: "Lagoon Experience - Night club scene with unique lighting" }
      ],
      type: "game"
    }
  ];

  const closeModal = () => {
    setSelectedGame(null);
    setActiveImageIndex(0);
  };

  return (
    <main className="min-h-screen bg-gray-50/80 dark:bg-gray-900/75 transition-colors duration-200">
      <Header />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Games</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedGame(game)}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden">
                {((game.thumbnailImage || (game.images && game.images.length > 0))) ? (
                  <img 
                    src={game.thumbnailImage || game.images[0].src}
                    alt={game.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const container = target.parentElement;
                      if (container) {
                        const fallback = document.createElement('p');
                        fallback.className = 'text-gray-600 dark:text-gray-300';
                        fallback.textContent = `[${game.title}]`;
                        container.appendChild(fallback);
                      }
                    }}
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">[{game.title}]</p>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">{game.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{game.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {game.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedGame && (
        <ProjectDetailModal
          isOpen={!!selectedGame}
          onClose={closeModal}
          project={selectedGame}
        />
      )}
    </main>
  );
} 