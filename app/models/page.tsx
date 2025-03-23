'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import ProjectDetailModal, { ModelProjectDetails } from "@/components/ProjectDetailModal";

export default function ModelsPage() {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  
  // Sample 3D models - these would be replaced with actual models and images
  const models: ModelProjectDetails[] = [
    {
      title: "Boat Model",
      description: "Low-Poly Tug Boat Model.",
      longDescription: "This is a low-poly tug boat model that was created and textured in Blender.",
      software: ["Blender", "Unity"],
      polygons: "2,900",
      features: [
        "Fully modeled and textured in Blender",
        "Used as the players boat in Sustainable Shores",
        "Simplistic design for low-poly optimization"

      ],
      images: [
        { src: "/spaceship1.jpg", alt: "Boat Model - Exterior hull view" },
        { src: "/spaceship2.jpg", alt: "Boat Model - Cockpit interior" },
        { src: "/spaceship3.jpg", alt: "Boat Model - Engine detail" },
        { src: "/spaceship4.jpg", alt: "Boat Model - Wireframe view" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/boatmodel-18e273eae9b4e97008d048648bdb0b9c/",
      embeddedHtml: "<iframe src='https://my.spline.design/boatmodel-18e273eae9b4e97008d048648bdb0b9c/' frameborder='0' width='100%' height='100%'></iframe>"
    },
    {
      title: "Oil Rig Model",
      description: "An original fantasy creature model with detailed sculpting and texturing for use in games and cinematics.",
      longDescription: "This original fantasy creature was designed for a dark fantasy RPG. The character combines elements of traditional folklore with unique design elements to create a memorable adversary. The model features high-resolution sculpting with particular attention to surface details like scales, wrinkles, and musculature. The texturing includes subsurface scattering maps for realistic skin rendering and custom displacement maps for fine details.",
      software: ["Blender", "Substance Painter", "Unity"],
      polygons: "2.5 million (high-poly) / 85,000 (game-ready)",
      features: [
        "Detailed anatomy with accurate musculature",
        "Custom texture maps including displacement and subsurface scattering",
        "Fully rigged for animation with facial controls",
        "Multiple texture variations",
        "Game-ready version with normal maps baked from high-poly model"
      ],
      images: [
        { src: "/creature1.jpg", alt: "Oil Rig Model - Full character view" },
        { src: "/creature2.jpg", alt: "Oil Rig Model - Detail of face and head" },
        { src: "/creature3.jpg", alt: "Oil Rig Model - Texture breakdown" },
        { src: "/creature4.jpg", alt: "Oil Rig Model - Wireframe and topology" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/oilrigmodelcopy-8e96cf1b7ca5e7fed09dbc3183777984/",
      embeddedHtml: "<iframe src='https://my.spline.design/oilrigmodelcopy-8e96cf1b7ca5e7fed09dbc3183777984/' frameborder='0' width='100%' height='100%'></iframe>"
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
      images: [
        { src: "/urban1.jpg", alt: "Japanese Tea Pot Model - City block overview" },
        { src: "/urban2.jpg", alt: "Japanese Tea Pot Model - Street level detail" },
        { src: "/urban3.jpg", alt: "Japanese Tea Pot Model - Building modular pieces" },
        { src: "/urban4.jpg", alt: "Japanese Tea Pot Model - Texture sets and materials" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/teapotmodel-daec9e3405c5da821d34e8d86ba7127f/",
      embeddedHtml: "<iframe src='https://my.spline.design/teapotmodel-daec9e3405c5da821d34e8d86ba7127f/' frameborder='0' width='100%' height='100%'></iframe>"
    },
    {
      title: "Buff Character Model",
      description: "A set of fantasy and sci-fi weapons with detailed modeling and texturing for game assets.",
      longDescription: "This weapons collection features a diverse range of both fantasy and sci-fi themed arms designed for action RPGs and first-person shooters. Each weapon has been crafted with meticulous attention to detail, with realistic materials and moving parts where appropriate. The collection includes swords, axes, futuristic firearms, and energy weapons, each with multiple texture variations.",
      software: ["Blender", "Substance Painter", "Marmoset Toolbag"],
      polygons: "8,000 - 15,000 per weapon",
      features: [
        "First-person and third-person optimized versions",
        "Multiple material variations for each weapon",
        "Animated components (triggers, magazines, etc.)",
        "Impact and damage decal textures",
        "Full PBR workflow with metallic/roughness maps"
      ],
      images: [
        { src: "/weapons1.jpg", alt: "Buff Character Model - Fantasy weapons display" },
        { src: "/weapons2.jpg", alt: "Buff Character Model - Sci-fi weapons display" },
        { src: "/weapons3.jpg", alt: "Buff Character Model - Detail shots of craftsmanship" },
        { src: "/weapons4.jpg", alt: "Buff Character Model - Material variation examples" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/buffcharactermodel-de81e6f87823bfa9c6b3d1576bee8236/",
      embeddedHtml: "<iframe src='https://my.spline.design/buffcharactermodel-de81e6f87823bfa9c6b3d1576bee8236/' frameborder='0' width='100%' height='100%'></iframe>"
    },
    {
      title: "T-Rex Skull Model",
      description: "A highly detailed character model created for a AAA game project with advanced rigging and skin weighting.",
      longDescription: "This character model was designed for a major game title as one of the central player characters. The model features advanced facial topology for realistic expressions, meticulously crafted clothing with physics-enabled components, and a production-ready rig suitable for both gameplay and cinematic animations. Special attention was given to realistic skin texturing and hair rendering.",
      software: ["ZBrush", "Maya", "Substance Painter", "Marvelous Designer"],
      polygons: "80,000 (in-game model) / 5 million (cinematic version)",
      features: [
        "Advanced facial rigging with FACS-based blend shapes",
        "Physically accurate clothing simulation",
        "Detailed skin texturing with subsurface scattering",
        "Complete animation-ready skeletal structure",
        "Multiple outfit and accessory variations"
      ],
      images: [
        { src: "/character1.jpg", alt: "T-Rex Skull Model - Full body turnaround" },
        { src: "/character2.jpg", alt: "T-Rex Skull Model - Facial expression range" },
        { src: "/character3.jpg", alt: "T-Rex Skull Model - Clothing detail" },
        { src: "/character4.jpg", alt: "T-Rex Skull Model - Texturing breakdown" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/trexskullmodel-f6584b3177f8ee36b58ef09e0c78c3ab/",
      embeddedHtml: "<iframe src='https://my.spline.design/trexskullmodel-f6584b3177f8ee36b58ef09e0c78c3ab/' frameborder='0' width='100%' height='100%'></iframe>"
    },
    {
      title: "Vehicle Pack",
      description: "A collection of detailed vehicle models with interior and exterior detailing for racing and open-world games.",
      longDescription: "This comprehensive vehicle pack includes 10 highly detailed cars ranging from everyday sedans to exotic supercars. Each vehicle features a fully modeled interior with functional dashboard elements, realistic materials, and accurate proportions based on real-world references. The vehicles are rigged with animated wheels, suspension systems, and opening components like doors and hoods.",
      software: ["3ds Max", "Substance Painter", "Unreal Engine"],
      polygons: "100,000 - 200,000 per vehicle",
      features: [
        "Detailed exterior modeling with manufacturer-accurate details",
        "Fully modeled interiors with animated controls",
        "PBR materials with metallic flake paint options",
        "Animated suspension and steering systems",
        "Damage model variations for gameplay"
      ],
      images: [
        { src: "/vehicles1.jpg", alt: "Vehicle Pack - Sports car exterior" },
        { src: "/vehicles2.jpg", alt: "Vehicle Pack - Detailed interior dashboard" },
        { src: "/vehicles3.jpg", alt: "Vehicle Pack - Wheel and suspension detail" },
        { src: "/vehicles4.jpg", alt: "Vehicle Pack - Multiple vehicle lineup" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/untitled-8cd2c673fd8ac45a6e37e07f58ddc1f3/",
      embeddedHtml: '<iframe src="https://my.spline.design/untitled-8cd2c673fd8ac45a6e37e07f58ddc1f3/" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>'
    }
      
  ];

  const closeModal = () => {
    setSelectedModel(null);
  };

  return (
    <main className="min-h-screen bg-gray-50/80 dark:bg-gray-900/75 transition-colors duration-200">
      <Header />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">3D Models</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-lg"
              onClick={() => setSelectedModel(index)}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-300">[Model Render]</p>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">{model.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{model.description}</p>
                <div className="mb-2">
                  <span className="font-medium dark:text-gray-200">Polygon Count:</span> <span className="dark:text-gray-300">{model.polygons}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {model.software.map((sw, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedModel !== null && (
        <ProjectDetailModal
          isOpen={selectedModel !== null}
          onClose={closeModal}
          project={models[selectedModel]}
        />
      )}
    </main>
  );
} 