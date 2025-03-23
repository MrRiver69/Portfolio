'use client';

import { useState } from 'react';
import Header from "@/components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSuccess: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate a successful form submission
    setFormStatus({
      message: 'Thanks for your message! I\'ll get back to you soon.',
      isError: false,
      isSuccess: true
    });
    
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <main className="min-h-screen bg-gray-50/80 dark:bg-gray-900/75 transition-colors duration-200">
      <Header />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Contact Me</h1>
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          {formStatus.isSuccess && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md">
              {formStatus.message}
            </div>
          )}
          
          {formStatus.isError && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md">
              {formStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Other Ways to Connect</h2>
            <p className="mb-2 dark:text-gray-300">
              <span className="font-medium dark:text-gray-200">Email:</span> ben.d.rivers@example.com
            </p>
            <p className="mb-2 dark:text-gray-300">
              <span className="font-medium dark:text-gray-200">LinkedIn:</span>{' '}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                linkedin.com/in/bendrivers
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 