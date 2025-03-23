'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Carousel from "@/components/Carousel";
import ProjectDetailModal, { GameProjectDetails, ModelProjectDetails } from "@/components/ProjectDetailModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<{ id: number, type: 'game' | 'model' } | null>(null);
  
  // Sample projects and models data - these would normally be fetched from a database or API
  const gameProjects: GameProjectDetails[] = [
    {
      title: "Cosmic Odyssey",
      description: "A space exploration game with procedurally generated worlds. Players can explore different planets, discover alien species, and build their own space stations.",
      longDescription: "Cosmic Odyssey is an open-world space exploration game where players embark on an interstellar journey through a vast, procedurally generated universe. As the captain of your own customizable spacecraft, you'll discover uncharted planets, encounter diverse alien civilizations, and unravel the mysteries of the cosmos. The game features a dynamic economy, complex diplomacy systems, and the ability to build and manage your own space stations and colonies.",
      technologies: ["Unity", "C#", "Blender"],
      role: "Lead Game Designer & 3D Modeler",
      features: [
        "Procedurally generated solar systems with unique planets and moons",
        "Dynamic weather and environmental systems",
        "Complex space economy with trading, mining, and manufacturing",
        "Base building and colony management",
        "Multiple factions with diplomacy and reputation systems"
      ],
      images: [
        { src: "/cosmic1.jpg", alt: "Cosmic Odyssey - Spacecraft approaching a ringed planet" },
        { src: "/cosmic2.jpg", alt: "Cosmic Odyssey - Space station exterior" },
        { src: "/cosmic3.jpg", alt: "Cosmic Odyssey - Alien landscape with unique flora" },
        { src: "/cosmic4.jpg", alt: "Cosmic Odyssey - Trading interface and economy screen" },
        { src: "/cosmic5.jpg", alt: "Cosmic Odyssey - Character customization interface" }
      ],
      type: "game",
      thumbnailImage: "/Images/Games/Cosmic_Odyssey/thumbnail.jpg"
    },
    {
      title: "Mythic Realms",
      description: "Fantasy RPG with dynamic character progression system. Set in a vast open world filled with magical creatures and ancient mysteries.",
      longDescription: "Mythic Realms is an immersive fantasy RPG where players create their own hero and embark on an epic journey through a world shaped by ancient myths and legends. The game features a non-linear narrative that adapts to player choices, and a dynamic character progression system that allows for countless unique builds and playstyles. Explore forgotten ruins, battle legendary creatures, and uncover the secrets of a world on the brink of catastrophe.",
      technologies: ["Unreal Engine", "Blueprint", "Maya"],
      role: "Game Designer & Level Artist",
      features: [
        "Open world with diverse environments and biomes",
        "Branching narrative with meaningful player choices",
        "Advanced combat system with hundreds of abilities and spells",
        "Crafting system with thousands of recipes",
        "Extensive character customization and progression options"
      ],
      images: [
        { src: "/mythic1.jpg", alt: "Mythic Realms - Character customization screen" },
        { src: "/mythic2.jpg", alt: "Mythic Realms - Ancient temple dungeon" },
        { src: "/mythic3.jpg", alt: "Mythic Realms - Combat with a dragon" },
        { src: "/mythic4.jpg", alt: "Mythic Realms - Enchanted forest environment" },
        { src: "/mythic5.jpg", alt: "Mythic Realms - Inventory and crafting system" }
      ],
      type: "game",
      thumbnailImage: "/Images/Games/Mythic_Realms/thumbnail.jpg"
    },
    {
      title: "Urban Legends",
      description: "A narrative-driven adventure set in a dystopian cityscape. Players navigate a complex story with multiple endings based on their choices.",
      longDescription: "Urban Legends is a story-rich adventure game set in a near-future dystopian metropolis where the line between reality and urban myth has blurred. As a journalist investigating a series of strange occurrences, players will interview witnesses, collect evidence, and make difficult moral choices that shape the narrative. The game features a unique 'truth system' where player decisions determine which version of reality ultimately prevails, leading to one of twelve possible endings.",
      technologies: ["Unity", "C#", "ZBrush"],
      role: "Narrative Designer & Environment Artist",
      features: [
        "Branching narrative with twelve distinct endings",
        "Investigation mechanics with evidence collection and analysis",
        "Dialogue system with over 10,000 lines of voiced dialogue",
        "Atmospheric dystopian city with distinct districts",
        "Dynamic day/night cycle affecting gameplay and story events"
      ],
      images: [
        { src: "/urban1.jpg", alt: "Urban Legends - Neon-lit cityscape view" },
        { src: "/urban2.jpg", alt: "Urban Legends - Character dialogue system" },
        { src: "/urban3.jpg", alt: "Urban Legends - Evidence board investigation" },
        { src: "/urban4.jpg", alt: "Urban Legends - Abandoned subway environment" },
        { src: "/urban5.jpg", alt: "Urban Legends - Night club scene with unique lighting" }
      ],
      type: "game",
      thumbnailImage: "/Images/Games/Urban_Legends/thumbnail.jpg"
    }
  ];

  const modelProjects: ModelProjectDetails[] = [
    {
      title: "Sci-Fi Spaceship",
      description: "A detailed model of a futuristic spaceship designed for the Cosmic Odyssey game. Features multiple textures and complex geometry.",
      longDescription: "This high-fidelity spaceship model was designed as the player's main vessel for the Cosmic Odyssey game. The design combines sleek aerodynamics with functional elements to create a believable spacecraft. The model includes a fully detailed exterior hull with modular components, detailed cockpit interior, engine bay, and cargo hold. Multiple texture sets allow for ship customization in-game.",
      software: ["Blender", "Substance Painter"],
      polygons: "15,000",
      features: [
        "Fully modeled interior spaces",
        "PBR materials with wear and tear effects",
        "Modular components for game customization",
        "Rigged landing gear and moving parts",
        "Optimized for real-time rendering"
      ],
      thumbnailImage: "/Images/Models/Spaceship/thumbnail.jpg",
      images: [
        { src: "/spaceship1.jpg", alt: "Sci-Fi Spaceship - Exterior profile view" },
        { src: "/spaceship2.jpg", alt: "Sci-Fi Spaceship - Cockpit interior detail" },
        { src: "/spaceship3.jpg", alt: "Sci-Fi Spaceship - Engine thruster closeup" },
        { src: "/spaceship4.jpg", alt: "Sci-Fi Spaceship - Wireframe view showing topology" },
        { src: "/spaceship5.jpg", alt: "Sci-Fi Spaceship - Texture and materials breakdown" }
      ],
      type: "model"
    },
    {
      title: "Fantasy Creature",
      description: "A detailed character model created for Mythic Realms. This mythical creature combines elements of different animals with fantasy aesthetics.",
      longDescription: "This fantasy creature was designed for the Mythic Realms game as one of the unique encounters in the enchanted forest biome. The design combines elements of deer, wolf, and mystical features to create a creature that feels both familiar and otherworldly. Special attention was paid to the anatomical structure, fur texturing, and animation rigging to ensure the creature moves naturally in-game.",
      software: ["ZBrush", "Maya", "Substance Painter"],
      polygons: "32,000",
      features: [
        "Highly detailed sculpt with realistic anatomy",
        "Advanced fur and skin texturing",
        "Complete animation rig with facial expressions",
        "Multiple texture variations for different biomes",
        "LOD system for optimal game performance"
      ],
      thumbnailImage: "/Images/Models/Fantasy_Creature/thumbnail.jpg",
      images: [
        { src: "/fantasy-creature1.jpg", alt: "Fantasy Creature - Full model render in forest setting" },
        { src: "/fantasy-creature2.jpg", alt: "Fantasy Creature - Close-up of head detail" },
        { src: "/fantasy-creature3.jpg", alt: "Fantasy Creature - Wireframe showing topology" },
        { src: "/fantasy-creature4.jpg", alt: "Fantasy Creature - Texture maps and materials" },
        { src: "/fantasy-creature5.jpg", alt: "Fantasy Creature - Animation pose examples" }
      ],
      type: "model"
    }
  ];
  
  // Featured projects for the carousel
  const featuredProjects = [
    {
      src: gameProjects[0].thumbnailImage || gameProjects[0].images[0].src,
      alt: gameProjects[0].title + " - " + gameProjects[0].description,
      id: 0,
      type: 'game' as const
    },
    {
      src: gameProjects[1].thumbnailImage || gameProjects[1].images[0].src,
      alt: gameProjects[1].title + " - " + gameProjects[1].description,
      id: 1,
      type: 'game' as const
    },
    {
      src: gameProjects[2].thumbnailImage || gameProjects[2].images[0].src,
      alt: gameProjects[2].title + " - " + gameProjects[2].description,
      id: 2,
      type: 'game' as const
    },
    {
      src: modelProjects[0].thumbnailImage || modelProjects[0].images[0].src,
      alt: modelProjects[0].title + " - " + modelProjects[0].description,
      id: 0,
      type: 'model' as const
    },
    {
      src: modelProjects[1].thumbnailImage || modelProjects[1].images[0].src,
      alt: modelProjects[1].title + " - " + modelProjects[1].description,
      id: 1, 
      type: 'model' as const
    }
  ];

  const handleCarouselClick = (id: number, type: 'game' | 'model') => {
    setSelectedProject({ id, type });
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getSelectedProject = () => {
    if (!selectedProject) return null;
    
    if (selectedProject.type === 'game') {
      return gameProjects[selectedProject.id];
    } else {
      return modelProjects[selectedProject.id];
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/80 dark:bg-gray-900/75 transition-colors duration-200">
      <Header />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">About Me</h2>
          <AboutMe />
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Featured Projects</h2>
          <Carousel 
            images={featuredProjects} 
            onImageClick={handleCarouselClick}
          />
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2 dark:text-white">Best Indie Game Design</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Independent Game Developers Association, 2023</p>
              <p className="text-gray-700 dark:text-gray-300">
                Awarded for "Cosmic Odyssey" - recognized for innovative procedural generation techniques and player-driven narrative.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2 dark:text-white">Excellence in 3D Character Modeling</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Digital Arts International Showcase, 2022</p>
              <p className="text-gray-700 dark:text-gray-300">
                Recognized for the creature design collection in "Mythic Realms" - praised for anatomical accuracy and fantasy aesthetics.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2 dark:text-white">Rising Star in Game Development</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">GameDev Spotlight Awards, 2021</p>
              <p className="text-gray-700 dark:text-gray-300">
                Selected as one of the top emerging talents in the indie game development scene for innovative approach to game mechanics and storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {selectedProject && (
        <ProjectDetailModal
          isOpen={!!selectedProject}
          onClose={closeModal}
          project={getSelectedProject()!}
        />
      )}
    </main>
  );
}
