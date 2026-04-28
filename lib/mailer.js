import nodemailer from "nodemailer";

export const sendMail = async ({ to, files }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const attachments = files.map((file) => ({
    // Ensure filename includes the extension (e.g., "report.pdf")
    filename: file.originalFilename || file.name, 
    // Passing the buffer directly
    content: file.buffer,
    // Explicitly set the MIME type (e.g., "application/pdf")
    contentType: file.mimetype || file.type, 
  }));

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Files Shared via FileFlow",
    text: "Please find the attached files (PDF/DOCX).",
    attachments,
  });
};
