'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import ProjectDetailModal, { ModelProjectDetails } from "@/components/ProjectDetailModal";

export default function ModelsPage() {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  
  // Sample 3D models - these would be replaced with actual models and images
  const models: ModelProjectDetails[] = [
    {
      title: "Sci-Fi Spaceship",
      description: "A detailed model of a futuristic spacecraft with intricate detailing and realistic textures.",
      longDescription: "This high-fidelity spacecraft model was designed for next-generation space simulation games. It features meticulously detailed exterior paneling, a fully modeled cockpit interior, and realistic engine components. The model includes PBR textures with normal, roughness, and metallic maps for photorealistic rendering. Special attention was given to aerodynamic design principles while maintaining a believable sci-fi aesthetic.",
      software: ["Blender", "ZBrush", "Substance Painter"],
      polygons: "120,000",
      features: [
        "Fully modeled interior cockpit with controls",
        "Animated engine thrusters with particle effects",
        "Detailed undercarriage with landing gear",
        "Separate LOD models for optimization",
        "PBR texture maps for realistic materials"
      ],
      images: [
        { src: "/spaceship1.jpg", alt: "Sci-Fi Spaceship - Exterior hull view" },
        { src: "/spaceship2.jpg", alt: "Sci-Fi Spaceship - Cockpit interior" },
        { src: "/spaceship3.jpg", alt: "Sci-Fi Spaceship - Engine detail" },
        { src: "/spaceship4.jpg", alt: "Sci-Fi Spaceship - Wireframe view" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/boatmodel-18e273eae9b4e97008d048648bdb0b9c/",
      embeddedHtml: "<iframe src='https://my.spline.design/boatmodel-18e273eae9b4e97008d048648bdb0b9c/' frameborder='0' width='100%' height='100%'></iframe>"
    },
    {
      title: "Fantasy Creature",
      description: "An original fantasy creature model with detailed sculpting and texturing for use in games and cinematics.",
      longDescription: "This original fantasy creature was designed for a dark fantasy RPG. The character combines elements of traditional folklore with unique design elements to create a memorable adversary. The model features high-resolution sculpting with particular attention to surface details like scales, wrinkles, and musculature. The texturing includes subsurface scattering maps for realistic skin rendering and custom displacement maps for fine details.",
      software: ["ZBrush", "Maya", "Substance Painter"],
      polygons: "2.5 million (high-poly) / 85,000 (game-ready)",
      features: [
        "Detailed anatomy with accurate musculature",
        "Custom texture maps including displacement and subsurface scattering",
        "Fully rigged for animation with facial controls",
        "Multiple texture variations",
        "Game-ready version with normal maps baked from high-poly model"
      ],
      images: [
        { src: "/creature1.jpg", alt: "Fantasy Creature - Full character view" },
        { src: "/creature2.jpg", alt: "Fantasy Creature - Detail of face and head" },
        { src: "/creature3.jpg", alt: "Fantasy Creature - Texture breakdown" },
        { src: "/creature4.jpg", alt: "Fantasy Creature - Wireframe and topology" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/oilrigmodelcopy-8e96cf1b7ca5e7fed09dbc3183777984/",
      embeddedHtml: "<iframe src='https://my.spline.design/oilrigmodelcopy-8e96cf1b7ca5e7fed09dbc3183777984/' frameborder='0' width='100%' height='100%'></iframe>"
    },
    {
      title: "Urban Environment",
      description: "A modular urban environment set with multiple building types, street furniture, and vegetation.",
      longDescription: "This comprehensive urban environment asset pack was designed for open-world games and architectural visualization. The modular system includes multiple building types that can be combined to create diverse cityscapes, along with detailed street furniture, vehicles, and vegetation. All assets are optimized for real-time rendering while maintaining high visual fidelity.",
      software: ["Blender", "Substance Designer", "Unity"],
      polygons: "Variable (1,000 - 15,000 per asset)",
      features: [
        "Modular building system with over 50 unique pieces",
        "PBR materials with environmental damage variations",
        "Integrated LOD system for performance optimization",
        "Seamless texture atlases for efficient memory usage",
        "Ambient occlusion and light maps baked in"
      ],
      images: [
        { src: "/urban1.jpg", alt: "Urban Environment - City block overview" },
        { src: "/urban2.jpg", alt: "Urban Environment - Street level detail" },
        { src: "/urban3.jpg", alt: "Urban Environment - Building modular pieces" },
        { src: "/urban4.jpg", alt: "Urban Environment - Texture sets and materials" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/teapotmodel-daec9e3405c5da821d34e8d86ba7127f/",
      embeddedHtml: "<iframe src='https://my.spline.design/teapotmodel-daec9e3405c5da821d34e8d86ba7127f/' frameborder='0' width='100%' height='100%'></iframe>"
    },
    {
      title: "Weapon Collection",
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
        { src: "/weapons1.jpg", alt: "Weapon Collection - Fantasy weapons display" },
        { src: "/weapons2.jpg", alt: "Weapon Collection - Sci-fi weapons display" },
        { src: "/weapons3.jpg", alt: "Weapon Collection - Detail shots of craftsmanship" },
        { src: "/weapons4.jpg", alt: "Weapon Collection - Material variation examples" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/untitled-5fcddc50a63ad2d0ee81ec3aaa4b84d4/",
      embeddedHtml: '<iframe src="https://my.spline.design/untitled-5fcddc50a63ad2d0ee81ec3aaa4b84d4/" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>'
    },
    {
      title: "Character Model",
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
        { src: "/character1.jpg", alt: "Character Model - Full body turnaround" },
        { src: "/character2.jpg", alt: "Character Model - Facial expression range" },
        { src: "/character3.jpg", alt: "Character Model - Clothing detail" },
        { src: "/character4.jpg", alt: "Character Model - Texturing breakdown" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/copyof3dbasicshapes-7c6b6f1f5ef04e835fdbcf4a5a8dc85b/",
      embeddedHtml: '<iframe src="https://my.spline.design/copyof3dbasicshapes-7c6b6f1f5ef04e835fdbcf4a5a8dc85b/" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>'
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
    },
    {
      title: "Boat Model",
      description: "A detailed model of a boat with realistic textures and animations.",
      longDescription: "This boat model features realistic textures and animations for a variety of watercraft.",
      software: ["Blender", "Substance Painter", "ZBrush"],
      polygons: "Variable (10,000 - 50,000 per boat)",
      features: [
        "Realistic watercraft textures",
        "Animated water effects",
        "Detailed interior and exterior modeling",
        "PBR materials for realistic reflections",
        "Damage model for gameplay"
      ],
      images: [
        { src: "/boat1.jpg", alt: "Boat Model - Front view" },
        { src: "/boat2.jpg", alt: "Boat Model - Side view" },
        { src: "/boat3.jpg", alt: "Boat Model - Rear view" },
        { src: "/boat4.jpg", alt: "Boat Model - Interior detail" }
      ],
      type: "model",
      splineUrl: "https://my.spline.design/boatmodel-18e273eae9b4e97008d048648bdb0b9c/",
      embeddedHtml: "<iframe src='https://my.spline.design/boatmodel-18e273eae9b4e97008d048648bdb0b9c/' frameborder='0' width='100%' height='100%'></iframe>"
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