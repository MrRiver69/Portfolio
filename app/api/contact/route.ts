import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, recipient } = await request.json();
    
    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Always use riversbenjamin5@gmail.com as the recipient
    const toEmail = 'riversbenjamin5@gmail.com';
    
    // Create nodemailer transporter
    // Note: In production, you should store these credentials in environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // or another service like 'outlook', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send your message. Please try again later.' },
      { status: 500 }
    );
  }
} 