'use client';

import { useState, useRef, useEffect } from 'react';
import Modal from './Modal';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface BaseProjectDetails {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  images: ProjectImage[];
}

export interface GameProjectDetails extends BaseProjectDetails {
  technologies: string[];
  role: string;
  type: 'game';
  thumbnailImage?: string;
}

export interface ModelProjectDetails extends BaseProjectDetails {
  software: string[];
  polygons: string;
  type: 'model';
  splineUrl?: string;
  embeddedHtml?: string;
  thumbnailImage?: string;
}

export type ProjectDetails = GameProjectDetails | ModelProjectDetails;

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails;
}

export default function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showSpline, setShowSpline] = useState(project.type === 'model');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionStyles, setTransitionStyles] = useState({});
  const [targetThumbnail, setTargetThumbnail] = useState<number | null>(null);
  
  const mainViewRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Show Spline button for model projects
  const showSplineButton = project.type === 'model';
  
  const animateTransition = (idx: number | null) => {
    if (!mainViewRef.current) return;

    setIsTransitioning(true);
    
    // Get the starting position (main showcase)
    const mainRect = mainViewRef.current.getBoundingClientRect();
    
    // Create a downward shrinking animation
    setTransitionStyles({
      transform: `translateY(${mainRect.height * 0.5}px) scale(0.1, 0.1)`,
      opacity: 0,
    });
    
    // Store target thumbnail for the next view
    setTargetThumbnail(idx);
    
    // Reset after animation completes
    setTimeout(() => {
      if (idx === null) {
        setShowSpline(true);
      } else {
        setActiveImageIndex(idx);
        setShowSpline(false);
      }
      setTransitionStyles({});
      setIsTransitioning(false);
      setTargetThumbnail(null);
    }, 300);
  };

  const handleThumbnailClick = (idx: number) => {
    if (isTransitioning) return;
    if (!showSpline && idx === activeImageIndex) return;
    
    animateTransition(idx);
  };

  const handleSplineButtonClick = () => {
    if (isTransitioning) return;
    if (showSpline) return;
    
    animateTransition(null);
  };

  // Reset refs array when number of thumbnails changes
  useEffect(() => {
    thumbnailRefs.current = thumbnailRefs.current.slice(0, (project.images.length + (showSplineButton ? 1 : 0)));
  }, [project.images.length, showSplineButton]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="grid grid-cols-1 gap-8">
        <div className="col-span-1">
          <div 
            ref={mainViewRef}
            className="mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative h-[600px] w-full"
          >
            <div
              className={`absolute inset-0 transition-all duration-300 ease-in-out ${isTransitioning ? 'z-10' : 'z-0'}`}
              style={transitionStyles}
            >
              {(project.type === 'model' && showSpline) || (targetThumbnail === null && isTransitioning) ? (
                <div className="relative w-full h-full">
                  {project.type === 'model' && (project as ModelProjectDetails).embeddedHtml ? (
                    <div 
                      className="absolute inset-0 w-full h-full"
                      dangerouslySetInnerHTML={{ __html: (project as ModelProjectDetails).embeddedHtml || '' }}
                    />
                  ) : (
                    <iframe 
                      src={(project.type === 'model' && (project as ModelProjectDetails).splineUrl) || 'https://my.spline.design/froggoblincopy-6ce34334990ce4639fb63cd75f2f976e/'} 
                      frameBorder='0' 
                      width='100%' 
                      height='100%'
                      title={project.title}
                      className="absolute inset-0"
                      loading="lazy"
                      style={{ pointerEvents: 'auto' }}
                      allow="autoplay; fullscreen"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-200 dark:bg-gray-700 z-10"></div>
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={project.images[isTransitioning && targetThumbnail !== null ? targetThumbnail : activeImageIndex].src}
                    alt={project.images[isTransitioning && targetThumbnail !== null ? targetThumbnail : activeImageIndex].alt}
                    className="max-w-full max-h-full p-4 object-contain"
                    onError={(e) => {
                      console.error('Error loading image:', 
                        project.images[isTransitioning && targetThumbnail !== null ? targetThumbnail : activeImageIndex].src);
                      // Show fallback content on error
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const container = target.parentElement;
                      if (container) {
                        const fallback = document.createElement('div');
                        fallback.className = 'text-center';
                        fallback.innerHTML = `
                          <p class="text-gray-600 dark:text-gray-300 mb-2">Failed to load image</p>
                          <p class="text-gray-500 dark:text-gray-400 text-sm">
                            Path: ${project.images[isTransitioning && targetThumbnail !== null ? targetThumbnail : activeImageIndex].src}
                          </p>
                        `;
                        container.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-5 gap-2">
            {showSplineButton && (
              <button
                ref={(el) => {
                  thumbnailRefs.current[0] = el;
                }}
                onClick={handleSplineButtonClick}
                className={`bg-gray-200 dark:bg-gray-700 rounded aspect-square overflow-hidden relative ${
                  showSpline ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-blue-500/10 dark:bg-blue-400/20 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-600 dark:text-blue-400">
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="w-full h-full bg-gray-300 dark:bg-gray-600 opacity-30">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-200">3D</span>
                  </div>
                </div>
              </button>
            )}
            
            {project.images.map((image, idx) => (
              <button
                key={idx}
                ref={(el) => {
                  thumbnailRefs.current[showSplineButton ? idx + 1 : idx] = el;
                }}
                onClick={() => handleThumbnailClick(idx)}
                className={`bg-gray-200 dark:bg-gray-700 rounded aspect-square overflow-hidden relative ${
                  !showSpline && idx === activeImageIndex ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">
                    <img
                      src={image.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Error loading thumbnail:', image.src);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const container = target.parentElement;
                        if (container) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center';
                          fallback.innerHTML = `<span class="text-xs text-gray-700 dark:text-gray-200 text-center px-1">${idx + 1}</span>`;
                          container.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h3>
          
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.longDescription || project.description}
            </p>
            
            {project.features && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2 dark:text-white">Key Features</h4>
                <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {'role' in project && (
            <div className="mb-4">
              <span className="font-medium dark:text-gray-200">Role:</span>{' '}
              <span className="dark:text-gray-300">{project.role}</span>
            </div>
          )}
          
          {'polygons' in project && (
            <div className="mb-4">
              <span className="font-medium dark:text-gray-200">Polygon Count:</span>{' '}
              <span className="dark:text-gray-300">{project.polygons}</span>
            </div>
          )}
          
          {(('technologies' in project) || ('software' in project)) && (
            <div className="mb-4">
              <h4 className="text-md font-semibold mb-2 dark:text-white">
                {project.type === 'game' ? 'Technologies Used' : 'Software Used'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {('technologies' in project) && project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
                {('software' in project) && project.software.map((sw, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {project.type === 'model' && (
        <style jsx global>{`
          iframe[src*="spline.design"] + div:last-child {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
        `}</style>
      )}
    </Modal>
  );
} 