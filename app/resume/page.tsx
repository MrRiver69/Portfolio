'use client';

import { useState } from 'react';
import Header from "@/components/Header";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-50/90 dark:bg-gray-900/90 transition-colors duration-200">
      <Header />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          
          {/* Header/Profile */}
          <div className="text-center mb-8 border-b pb-6 border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold dark:text-white mb-2">Benjamin Rivers</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Kelvin Grove, QLD • <a href="mailto:riversbenjamin5@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">riversbenjamin5@gmail.com</a> • +04 0394 4818
            </p>
          </div>
          
          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">EDUCATION</h2>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold dark:text-white">Griffith University</h3>
                <span className="text-gray-600 dark:text-gray-400">February 2022</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Bachelor of Games Design</p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li className="mb-1">Griffith Award for Academic Excellence - 2024</li>
                <li className="mb-1">Griffith University Tabletop Guild - Executive Treasurer - 2023</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold dark:text-white">Kuranda District State College</h3>
                <span className="text-gray-600 dark:text-gray-400">January 2008 - November 2021</span>
              </div>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li className="mb-1">Queensland Certificate of Education (QCE)</li>
                <li className="mb-1">Cert 2 - Engineering Pathways</li>
                <li className="mb-1">Cert 2 - Skills for Work and Vocational Pathways</li>
              </ul>
            </div>
          </div>
          
          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">EXPERIENCE</h2>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <div>
                  <h3 className="font-semibold dark:text-white">Dominos</h3>
                  <p className="text-gray-700 dark:text-gray-300">Delivery Driver</p>
                  <p className="text-gray-600 dark:text-gray-400">Cairns, QLD</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400">October 2022 - March 2023</span>
              </div>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mt-2">
                <li className="mb-1">Primary duty - Delivery Driver employing time management and navigation skills, driving safely, friendly and courteous customer interaction, problem solving</li>
                <li className="mb-1">Strict adherence to workplace health and safety and food hygiene protocols</li>
                <li className="mb-1">Taking customer's orders either over the phone or in-person</li>
                <li className="mb-1">Working flexibly and supportively in a team motivated to provide excellent product and service</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <div>
                  <h3 className="font-semibold dark:text-white">Kuranda Farm Supplies</h3>
                  <p className="text-gray-700 dark:text-gray-300">Storeman</p>
                  <p className="text-gray-600 dark:text-gray-400">Kuranda, QLD</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400">February 2018 - July 2021</span>
              </div>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mt-2">
                <li className="mb-1">Restocking shelves and checking use by dates</li>
                <li className="mb-1">Cash handling / EFTPOS</li>
                <li className="mb-1">Daily housekeeping and store security</li>
              </ul>
            </div>
          </div>
          
          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>Fast Food Service</li>
                <li>Retail Assistant</li>
                <li>Front line customer service</li>
                <li>Food safety and hygiene</li>
                <li>Kitchen duties / dishwashing</li>
              </ul>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>Food preparation</li>
                <li>Cash handling / EFTPOS</li>
                <li>Workplace health & safety awareness</li>
                <li>Console operation</li>
                <li>Telephone answering</li>
              </ul>
            </div>
          </div>
          
          {/* References */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">REFERENCE</h2>
            <div className="text-gray-600 dark:text-gray-400">
              <p className="font-semibold dark:text-gray-300">Paige Kojin</p>
              <p>Manager Dominos</p>
              <p>+04 0702 1634</p>
            </div>
          </div>
          
          {/* Download Button */}
          <div className="mt-10 text-center">
            <a 
              href="/B_Rivers_Resume.pdf" 
              download
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              Download PDF Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 