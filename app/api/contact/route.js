import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if credentials exist; if not, log and mock success for demo/test purposes
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
      console.warn('GMAIL_USER or GMAIL_PASSWORD not set. Mocking email success.');
      console.log('--- MOCK EMAIL START ---');
      console.log(`From: ${email}`);
      console.log(`To: ${process.env.RECIPIENT_EMAIL || 'not-set@example.com'}`);
      console.log(`Subject: Portfolio Contact: ${name}`);
      console.log(`Message: ${message}`);
      console.log('--- MOCK EMAIL END ---');
      
      return NextResponse.json({ success: true, message: 'Mock email sent (no credentials)' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Portfolio Contact</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
