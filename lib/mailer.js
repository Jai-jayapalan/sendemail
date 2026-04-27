import nodemailer from "nodemailer";

export const sendMail = async ({ to, attachments }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Files from Next.js App Jai",
    text: "Please find the attached files.",
    attachments: attachments.map((file) => ({
      filename: file.originalname,
      content: file.buffer,
    })),
  });
};