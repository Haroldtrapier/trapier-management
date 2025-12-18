import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

async function sendWithGmail(name: string, email: string, company: string, phone: string, message: string) {
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
  const TO_EMAIL = process.env.CONTACT_EMAIL_TO || GMAIL_USER;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    throw new Error('Gmail credentials not configured');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  await transporter.sendMail({
    from: `"Trapier Management" <${GMAIL_USER}>`,
    to: TO_EMAIL,
    subject: `New Contact Form: ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
    `,
  });

  return { success: true };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      await sendWithGmail(name, email, company, phone, message);
      return NextResponse.json({ success: true, message: 'Thank you for your message!' }, { status: 200 });
    }

    console.log('Contact form submission:', { name, email, company, phone, message, timestamp: new Date().toISOString() });
    return NextResponse.json({ success: true, message: 'Thank you for your message!' }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}