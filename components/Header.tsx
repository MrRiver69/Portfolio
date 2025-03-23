'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'About Me', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'Models', path: '/models' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="w-full py-6 border-b dark:border-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">Ben D Rivers</h1>
        <div className="flex justify-between items-center">
          <nav className="flex justify-center flex-1">
            <ul className="flex space-x-8 items-center">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    className={`transition-colors ${
                      isActive(item.path)
                        ? 'text-blue-600 dark:text-blue-400 font-medium'
                        : 'hover:text-blue-500 dark:hover:text-blue-300 dark:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="https://www.linkedin.com/in/ben-rivers-881b72233/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="hover:text-blue-500 dark:hover:text-blue-300 dark:text-gray-300 transition-colors"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
} 