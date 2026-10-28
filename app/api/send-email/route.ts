import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? '').trim().slice(0, 200);
    const email = String(body?.email ?? '').trim().slice(0, 320);
    const message = String(body?.message ?? '').trim().slice(0, 5000);

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Fill in your name, email and message.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'That email address doesn’t look right.' },
        { status: 400 }
      );
    }

    // Created per request so builds don't fail when the key isn't set
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Message not sent: email isn’t configured on the server.' },
        { status: 500 }
      );
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend's test domain
      to: [process.env.CONTACT_EMAIL || 'lakshyajain906@gmail.com'],
      replyTo: email,
      subject: `Portfolio Contact from ${name.replace(/[\r\n]/g, ' ')}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">New Contact Form Message</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #06b6d4; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #9ca3af; font-size: 12px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Message

Name: ${name}
Email: ${email}
Submitted: ${new Date().toLocaleString()}

Message:
${message}

---
This email was sent from your portfolio contact form.
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Message not sent: the mail service returned an error.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully! I will get back to you soon.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Message not sent: the server couldn’t process it.' },
      { status: 500 }
    );
  }
}
