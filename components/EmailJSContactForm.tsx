'use client';

import { useState, FormEvent } from 'react';

// This is an alternative contact form that uses EmailJS for sending emails directly from the browser
// You can use this as a fallback if your server-side solution doesn't work
// To use it, you'll need to sign up at https://www.emailjs.com/ and get your service ID, template ID, and user ID

interface EmailJSContactFormProps {
  className?: string;
}

export default function EmailJSContactForm({ className }: EmailJSContactFormProps) {
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS initialization
      // You need to include the EmailJS SDK in your document:
      // <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      
      // Then load the window.emailjs object
      const emailjs = (window as any).emailjs;
      
      if (!emailjs) {
        throw new Error('EmailJS not loaded. Make sure to add the script to your document.');
      }
      
      const templateParams = {
        to_name: 'Benjamin Rivers',
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      };
      
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
      const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setFormStatus({
        message: "Thanks for your message! I'll get back to you soon.",
        isError: false,
        isSuccess: true
      });
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        isError: true,
        isSuccess: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
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
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
} 