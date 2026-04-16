import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/lib/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend inside the function (runtime, not build time)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();

    // Validate form data
    const validatedData = contactFormSchema.parse(body);

    // Store in Firebase
    const contactRef = collection(db, "contacts");
    const docRef = await addDoc(contactRef, {
      ...validatedData,
      createdAt: serverTimestamp(),
      status: "new",
    });

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "DevRhylme Foundation <noreply@devrhylme.org>",
      to: [process.env.CONTACT_EMAIL_TO || "contact@devrhylme.org"],
      replyTo: validatedData.email,
      subject: `Contact Form: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0284c7;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "DevRhylme Foundation <noreply@devrhylme.org>",
      to: [validatedData.email],
      subject: "Thank you for contacting DevRhylme Foundation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0284c7;">Thank You for Reaching Out!</h2>
          <p>Hi ${validatedData.name},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          <p>Best regards,<br/>DevRhylme Foundation Team</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      id: docRef.id,
    });
  } catch (error: unknown) {
    console.error("Contact form error:", error);

    if (
      typeof error === "object" &&
      error !== null &&
      "name" in error &&
      (error as { name?: string }).name === "ZodError"
    ) {
      return NextResponse.json(
        { error: "Invalid form data", details: (error as import("zod").ZodError).issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}