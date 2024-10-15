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

  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #f8f8f8; border-radius: 5px; padding: 20px; border: 1px solid #e0e0e0;">
          <h1 style="color: #c41e3a; border-bottom: 2px solid #c41e3a; padding-bottom: 10px;">Real Estate Developers Inquiry</h1>
          <p style="font-weight: bold;">You have received a new inquiry from:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${email}" style="color: #c41e3a;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${phone}</td>
            </tr>
          </table>
          <h2 style="color: #c41e3a; margin-top: 20px;">Message:</h2>
          <p style="background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">${message}</p>
          <p style="font-style: italic; margin-top: 20px; text-align: center;">This email was sent from the Alliance Realtors Group website contact form.</p>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.ZOHO_EMAIL_USERNAME,
    to: "thealliancerealtorsgroup@gmail.com",
    subject: "Real Estate Developers Inquiry",
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Email sending failed", error);
    return NextResponse.json({ status: "error", message: error });
  }
}
