import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    auth: {
      user: process.env.ZOHO_EMAIL_USERNAME,
      pass: process.env.ZOHO_EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.ZOHO_EMAIL_USERNAME,
    to: "thealliancerealtorsgroup@gmail.com",
    subject: "Real Estate Developers Inquiry",
    text: `From: ${name} <${email}>\nPhone: ${phone}\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Email sending failed", error);
    return NextResponse.json({ status: "error", message: error });
  }
}
