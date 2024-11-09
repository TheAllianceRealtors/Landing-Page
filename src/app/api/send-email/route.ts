import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let requestData;
  try {
    requestData = await req.formData();
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return NextResponse.json(
      { status: "error", message: "Invalid JSON in request body" },
      { status: 400 }
    );
  }

  const formData = requestData;
  const companyName = formData.get("companyName");
  const contactPerson = formData.get("contactPerson");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const companyProfileDocument = formData.get("companyProfileDocument");
  const certificateOfIncorporation = formData.get("certificateOfIncorporation");
  const portfolioOrSampleProperties = formData.get(
    "portfolioOrSampleProperties"
  );
  const briefOverviewOfPartnershipInterest = formData.get(
    "briefOverviewOfPartnershipInterest"
  );

  // Validate required fields
  if (
    !companyName ||
    !contactPerson ||
    !email ||
    !phone ||
    !briefOverviewOfPartnershipInterest
  ) {
    return NextResponse.json(
      { status: "error", message: "Missing required fields" },
      { status: 400 }
    );
  }

  // Ensure attachments are filtered out properly, only including valid entries
  const attachments = [
    companyProfileDocument,
    certificateOfIncorporation,
    portfolioOrSampleProperties,
  ]
    .filter((attachment) => attachment !== null)
    .map(async (attachment) => {
      // Convert File object to Buffer
      if (attachment instanceof File) {
        const buffer = Buffer.from(await attachment.arrayBuffer());
        return {
          filename: attachment.name,
          content: buffer, // Convert the File to Buffer
        };
      }
      return null;
    });

  // Resolve all the promises inside the attachments array
  const resolvedAttachments = await Promise.all(attachments);

  // Filter out any null values that may have been returned by the map
  const validAttachments = resolvedAttachments.filter(
    (attachment) => attachment !== null
  ) as {
    filename: string;
    content: Buffer;
  }[];

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
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><strong>Company Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${companyName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><strong>Contact Person:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${contactPerson}</td>
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
          <h2 style="color: #c41e3a; margin-top: 20px;">Brief Overview of Partnership Interest:</h2>
          <p style="background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
            ${briefOverviewOfPartnershipInterest}
          </p>
          <p style="font-style: italic; margin-top: 20px; text-align: center;">
            This email was sent from the Alliance Realtors Group website contact form.
          </p>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.ZOHO_EMAIL_USERNAME as string,
    to: "techmornach@gmail.com",
    subject: "Real Estate Developers Inquiry",
    html: htmlContent,
    attachments: validAttachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Email sending failed", error);
    return NextResponse.json(
      { status: "error", message: "Failed to send email" },
      { status: 500 }
    );
  }
}
