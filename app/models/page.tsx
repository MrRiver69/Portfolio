'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import ProjectDetailModal, { ModelProjectDetails } from "@/components/ProjectDetailModal";

export default function ModelsPage() {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  
  // Sample 3D models - these would be replaced with actual models and images
  const models: ModelProjectDetails[] = [
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
      description: "High-Poly Japanese Style Teapot",
      longDescription: "This is a high-poly japanese styled teapot model that was created in Maya and textured in Substance Painter",
      software: ["Maya", "Substance Painter"],
      polygons: "18,100",
      features: [
        "Fully modelled and rendered in Maya",
        "Textured in Substance Painter",
        "High detail design for realistic render"
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
      title: "Buff Character Model",
      description: "High-Poly Stylized Character Model.",
      longDescription: "This is a high-poly stylized character model that was created in Maya and textured in Photoshop.",
      software: ["Maya", "Photoshop"],
      polygons: "158,700",
      features: [
        "Fully modelled, rigged and rendered in Maya",
        "Textured in Photoshop",
        "Designed for animation"
      ],
      thumbnailImage: "/Images/Models/Buff Character/Buff.JPG",
      images: [
        { src: "/Images/Models/Buff Character/Buff.JPG", alt: "Buff Character Model - Fantasy weapons display" },
        { src: "/Images/Models/Buff Character/BuffUntextured.JPG", alt: "Buff Character Model - Sci-fi weapons display" },
        { src: "/Images/Models/Buff Character/BuffWireframe.JPG", alt: "Buff Character Model - Detail shots of craftsmanship" },
        { src: "/Images/Models/Buff Character/BuffWireframe2.JPG", alt: "Buff Character Model - Material variation examples" }
      ],
      type: "model",
      //splineUrl: "https://my.spline.design/buffcharactermodel-de81e6f87823bfa9c6b3d1576bee8236/",
      //embeddedHtml: "<iframe src='https://my.spline.design/buffcharactermodel-de81e6f87823bfa9c6b3d1576bee8236/' frameborder='0' width='100%' height='100%'></iframe>",
      //youtubeUrl: "https://www.youtube.com/embed/vn_or9gEB6g?si=oqmxRu9XXa1I2L5E"
    },
    {
      title: "Boat Model",
      description: "Low-Poly Tug Boat Model.",
      longDescription: "This is a low-poly tug boat model that was created and textured in Blender.",
      software: ["Blender", "Unity"],
      polygons: "2,900",
      features: [
        "Fully modelled and textured in Blender",
        "Used as the players boat in Sustainable Shores",
        "Simplistic design for low-poly optimization"

      ],
      thumbnailImage: "/Images/Models/Boat/BoatTextured.JPG",
      images: [
        { src: "/Images/Models/Boat/BoatTextured.JPG", alt: "Boat Model - Exterior hull view" },
        { src: "/Images/Models/Boat/BoatUntextured.JPG", alt: "Boat Model - Cockpit interior" },
        { src: "/Images/Models/Boat/BoatWireframe.JPG", alt: "Boat Model - Engine detail" },
        { src: "/Images/Models/Boat/BoatWireframe2.JPG", alt: "Boat Model - Wireframe view" }
      ],
      type: "model",
      //splineUrl: "https://my.spline.design/boatmodel-18e273eae9b4e97008d048648bdb0b9c/",
      //embeddedHtml: "<iframe src='https://my.spline.design/boatmodel-18e273eae9b4e97008d048648bdb0b9c/' frameborder='0' width='100%' height='100%'></iframe>",
      //youtubeUrl: "https://www.youtube.com/embed/vn_or9gEB6g?si=oqmxRu9XXa1I2L5E"
    },
    {
      title: "Oil Rig Model",
      description: "Low-Poly Oil Rig Model.",
      longDescription: "This is a low-poly oil rig model that was created, rigged, and animated in Blender, and textured in Substance Painter.",
      software: ["Blender", "Substance Painter", "Unity"],
      polygons: "2,800",
      features: [
        "Fully modelled and animated in Blender",
        "Used as the outpost in Sustainable Shores",
        "Simplistic design for low-poly optimization"
      ],
      thumbnailImage: "/Images/Models/Oil Rig/OilRig.jpg",
      images: [
        { src: "/Images/Models/Oil Rig/OilRig.jpg", alt: "Oil Rig Model - Full character view" },
        { src: "/Images/Models/Oil Rig/OilRigUntextured.JPG", alt: "Oil Rig Model - Detail of face and head" },
        { src: "/Images/Models/Oil Rig/OilRigWireframe.JPG", alt: "Oil Rig Model - Texture breakdown" },
        { src: "/Images/Models/Oil Rig/OilRigWireframe2.JPG", alt: "Oil Rig Model - Wireframe and topology" }
      ],
      type: "model",
      //splineUrl: "https://my.spline.design/oilrigmodelcopy-8e96cf1b7ca5e7fed09dbc3183777984/",
      //embeddedHtml: "<iframe src='https://my.spline.design/oilrigmodelcopy-8e96cf1b7ca5e7fed09dbc3183777984/' frameborder='0' width='100%' height='100%'></iframe>",
      youtubeUrl: "https://www.youtube.com/embed/Z9C4lYa-RWM?si=zxpCI_BPV5hCh7WA"
    },
    {
      title: "T-Rex Skull Model",
      description: "High-Poly Realistic T-Rex Skull Model.",
      longDescription: "This is a high-poly realistic t-rex skull model that was created in Blender, textured in Substance Painter, and rendered in Unreal Engine.",
      software: ["Blender", "Substance Painter", "Unreal Engine"],
      polygons: "22,000 (game-ready model) / 797,000 (High-Poly)",
      features: [
        "Fully modelled in Blender",
        "Textured in Substance Painter",
        "Used for a live scene in UE5"
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
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden">
                {((model.thumbnailImage || (model.images && model.images.length > 0))) ? (
                  <img 
                    src={model.thumbnailImage || model.images[0].src}
                    alt={model.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const container = target.parentElement;
                      if (container) {
                        const fallback = document.createElement('p');
                        fallback.className = 'text-gray-600 dark:text-gray-300';
                        fallback.textContent = '[Model Render]';
                        container.appendChild(fallback);
                      }
                    }}
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">[Model Render]</p>
                )}
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