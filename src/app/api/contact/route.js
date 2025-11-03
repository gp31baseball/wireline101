import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // change if using another provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the mail
    await transporter.sendMail({
      from: email,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `Ask Snell – Message from ${name}`,
      text: `
From: ${name}
Email: ${email}

${message}
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json({ success: false }, { status: 500 });
  }
}


