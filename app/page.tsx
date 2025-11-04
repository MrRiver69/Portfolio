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
      title: "Vumpkin",
      description: "A Pumpkin farming sim developed in a 24hr Game Jam.",
      longDescription: "GROW pumpkins for your friends! Stack them into the car!! THEN GROW SOME MORE!!!! BUT BEWARE OF THE EVIL VUMPKINS!!.",
      technologies: ["Unity", "C#", "Blender", "Substance Painter"],
      role: "3D Modeler & Texture Artist",
      thumbnailImage: "/Images/Games/Vum/Vum.png",
      features: [
        "Stylised PSX style textures",
        "Physics based interaction system",
        "Vertical gameplay",
        "Vumpkin grinder",
        "VUMPKINSS!!!!!"
      ],
      images: [
        { src: "/Images/Games/Vum/Vum2.png", alt: "Vumpkin" },
        { src: "/Images/Games/Vum/Vum4.png", alt: "Vumpkin" },
        { src: "/Images/Games/Vum/Vum5.png", alt: "Vumpkin" },
        { src: "/Images/Games/Vum/Vum6.png", alt: "Vumpkin" },
        { src: "/Images/Games/Vum/Vum7.png", alt: "Vumpkin" },
        { src: "/Images/Games/Vum/Vum1.png", alt: "Vumpkin" }

      ],
      type: "game",
      //youtubeUrl: "https://www.youtube.com/embed/vn_or9gEB6g?si=oqmxRu9XXa1I2L5E"
    },
    {
      title: "Sustainable Shores",
      description: "A fishing game with a focus on sustainability and conservation.",
      longDescription: "Sustainable Shores is an open-world ocean exploration game where player, after getting lost at sea, finds an island with a starving population and must learn how to sustainable fish the area to prevent the island from starving.",
      technologies: ["Unity", "C#", "Blender"],
      role: "Lead 3D Modeler",
      thumbnailImage: "/Images/Games/Fish/Fish6.JPG",
      features: [
        "Procedurally generated ocean wave system",
        "Dynamic day and night cycle",
        "Procedurally animated fish models",
        "Logbook for caught fish history",
        "Fishing mini-game mechanic"
      ],
      images: [
        { src: "/Images/Games/Fish/Fish6.JPG", alt: "Sustainable Shores - Character customization interface" },
        { src: "/Images/Games/Fish/Fish1.JPG", alt: "Sustainable Shores - Spacecraft approaching a ringed planet" },
        { src: "/Images/Games/Fish/Fish2.JPG", alt: "Sustainable Shores - Space station exterior" },
        { src: "/Images/Games/Fish/Fish3.JPG", alt: "Sustainable Shores - Alien landscape with unique flora" },
        { src: "/Images/Games/Fish/Fish4.JPG", alt: "Sustainable Shores - Trading interface and economy screen" },
        { src: "/Images/Games/Fish/Fish5.JPG", alt: "Sustainable Shores - Character customization interface" }
      ],
      type: "game",
      //youtubeUrl: "https://www.youtube.com/embed/vn_or9gEB6g?si=oqmxRu9XXa1I2L5E"
    },
    {
      title: "Cyber Ninja",
      description: "A game about a futuristic ninja.",
      longDescription: "Cyber Ninja is a game about a ninja from the future who has the abilty to hack and take control of robotic devices.",
      technologies: ["Unity", "C#", "Blender"],
      role: "3D Artist and Level Designer",
      thumbnailImage: "Images/Games/Cyber/Cyber1.JPG",
      features: [
        "Fast paced puzzle platformer",
        "Double jump",
        "2D and 3D design elements",
        "Speed runner aspects",
        "Unique visuals and stylization"
      ],
      images: [
        { src: "Images/Games/Cyber/Cyber1.JPG", alt: "Cyber Ninja - Character customization screen" },
        { src: "Images/Games/Cyber/Cyber2.JPG", alt: "Cyber Ninja - Ancient temple dungeon" },
        { src: "Images/Games/Cyber/Cyber3.JPG", alt: "Cyber Ninja - Combat with a dragon" },
        { src: "Images/Games/Cyber/Cyber4.JPG", alt: "Cyber Ninja - Enchanted forest environment" },
        { src: "Images/Games/Cyber/Cyber5.JPG", alt: "Cyber Ninja - Inventory and crafting system" },
        { src: "Images/Games/Cyber/Cyber6.JPG", alt: "Cyber Ninja - Inventory and crafting system" }
      ],
      type: "game",
      youtubeUrl: "https://www.youtube.com/embed/a602Y2chA3k?si=jrwXIyWr1ssvdnCO"
    }
  ];

  const modelProjects: ModelProjectDetails[] = [
    {
      title: "Hollow Knight Model",
      description: "High-Poly Hollow Knight Model.",
      longDescription: "This is a high-poly hollow knight model, featuring the Knight, Hornet, and the Grub was created and textured in Blender for the purpose of 3d printing.",
      software: ["Blender"],
      polygons: "14,300,000",
      features: [
        "Fully modelled and textured in Blender",
        "Finalised as high-poly for 3d printing",
        "No smooth shading was used for rendered images"

      ],
      thumbnailImage: "/Images/Models/Hollow/Hollow.JPG",
      images: [
        { src: "/Images/Models/Hollow/Hollow.JPG", alt: "Hollow Knight" },
        { src: "/Images/Models/Hollow/Hollow1.JPG", alt: "Hollow Knight" },
        { src: "/Images/Models/Hollow/Hollow2.JPG", alt: "Hollow Knight" },
        { src: "/Images/Models/Hollow/Hollow3.JPG", alt: "Hollow Knight" }
      ],
      type: "model",
      //splineUrl: "https://my.spline.design/boatmodel-18e273eae9b4e97008d048648bdb0b9c/",
      //embeddedHtml: "<iframe src='https://my.spline.design/boatmodel-18e273eae9b4e97008d048648bdb0b9c/' frameborder='0' width='100%' height='100%'></iframe>",
      //youtubeUrl: "https://www.youtube.com/embed/vn_or9gEB6g?si=oqmxRu9XXa1I2L5E"
    },
    {
      title: "Japanese Tea Pot Model",
      description: "A modular urban environment set with multiple building types, street furniture, and vegetation.",
      longDescription: "This comprehensive urban environment asset pack was designed for open-world games and architectural visualization. The modular system includes multiple building types that can be combined to create diverse cityscapes, along with detailed street furniture, vehicles, and vegetation. All assets are optimized for real-time rendering while maintaining high visual fidelity.",
      software: ["Maya", "Substance Painter"],
      polygons: "Variable (1,000 - 15,000 per asset)",
      features: [
        "Modular building system with over 50 unique pieces",
        "PBR materials with environmental damage variations",
        "Integrated LOD system for performance optimization",
        "Seamless texture atlases for efficient memory usage",
        "Ambient occlusion and light maps baked in"
      ],
      thumbnailImage: "/Images/Models/TeaPot/TeaPot.jpg",
      images: [
        { src: "/Images/Models/TeaPot/TeaPot.jpg", alt: "Japanese Tea Pot Model - Tea House Interior" },
        { src: "/Images/Models/TeaPot/Untextured.jpg", alt: "Japanese Tea Pot Model - Untextured model" },
        { src: "/Images/Models/TeaPot/Textured.jpg", alt: "Japanese Tea Pot Model - Textured model" },
        { src: "/Images/Models/TeaPot/PostProcessed.jpg", alt: "Japanese Tea Pot Model - Tea House Environment" }
      ],
      type: "model",
      //splineUrl: "https://my.spline.design/teapotmodel-daec9e3405c5da821d34e8d86ba7127f/",
      //embeddedHtml: "<iframe src='https://my.spline.design/teapotmodel-daec9e3405c5da821d34e8d86ba7127f/' frameborder='0' width='100%' height='100%'></iframe>",
      //youtubeUrl: "https://www.youtube.com/embed/vn_or9gEB6g?si=oqmxRu9XXa1I2L5E"
    },
    {
      title: "T-Rex Skull Model",
      description: "A highly detailed character model created for a AAA game project with advanced rigging and skin weighting.",
      longDescription: "This character model was designed for a major game title as one of the central player characters. The model features advanced facial topology for realistic expressions, meticulously crafted clothing with physics-enabled components, and a production-ready rig suitable for both gameplay and cinematic animations. Special attention was given to realistic skin texturing and hair rendering.",
      software: ["Blender", "Substance Painter", "Unreal Engine"],
      polygons: "80,000 (in-game model) / 5 million (cinematic version)",
      features: [
        "Advanced facial rigging with FACS-based blend shapes",
        "Physically accurate clothing simulation",
        "Detailed skin texturing with subsurface scattering",
        "Complete animation-ready skeletal structure",
        "Multiple outfit and accessory variations"
      ],
      thumbnailImage: "/Images/Models/T-Rex Skull/TrexSkull.jpg",
      images: [
        { src: "/Images/Models/T-Rex Skull/TrexSkull.jpg", alt: "T-Rex Skull Model - Full body turnaround" },
        { src: "/Images/Models/T-Rex Skull/TrexHP.png", alt: "T-Rex Skull Model - Facial expression range" },
        { src: "/Images/Models/T-Rex Skull/TrexHPWire.png", alt: "T-Rex Skull Model - Clothing detail" },
        { src: "/Images/Models/T-Rex Skull/TrexWire.png", alt: "T-Rex Skull Model - Texturing breakdown" }
      ],
      type: "model",
      //splineUrl: "https://my.spline.design/trexskullmodel-f6584b3177f8ee36b58ef09e0c78c3ab/",
      //embeddedHtml: "<iframe src='https://my.spline.design/trexskullmodel-f6584b3177f8ee36b58ef09e0c78c3ab/' frameborder='0' width='100%' height='100%'></iframe>",
      //youtubeUrl: "https://www.youtube.com/embed/vn_or9gEB6g?si=oqmxRu9XXa1I2L5E"
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
    },
    {
      src: modelProjects[2].thumbnailImage || modelProjects[2].images[0].src,
      alt: modelProjects[2].title + " - " + modelProjects[2].description,
      id: 2, 
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
              <h3 className="text-xl font-medium mb-2 dark:text-white">Academic Excelence</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Griffith Award for Academic Excellence, 2024</p>
              <p className="text-gray-700 dark:text-gray-300">
                Awarded for a cumulative GPA of at least 6.0, calculated over the academic year.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2 dark:text-white">People&apos;s Choice Award</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">2025 GFS 24hr Game Jam</p>
              <p className="text-gray-700 dark:text-gray-300">
                Vumpkin received the People&apos;s Choice Award from the 2025 GFS 24hr game jam.
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
