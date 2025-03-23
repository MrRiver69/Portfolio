import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Always use riversbenjamin5@gmail.com as the recipient
    const toEmail = 'riversbenjamin5@gmail.com';

    // Send form data to Web3Forms API
    const formData = new FormData();
    formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY || '');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('from_name', 'Portfolio Contact Form');
    formData.append('subject', `New Contact Form Message from ${name}`);
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Email sent successfully via Web3Forms');
      return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } else {
      console.error('Error from Web3Forms:', data.message);
      throw new Error(data.message || 'Failed to send message');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send your message. Please try again later.' },
      { status: 500 }
    );
  }
} 