import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const data = await req.formData();
    const email = data.get("email");
    const files = data.getAll("files"); // Gets all uploaded files

    if (!email) return NextResponse.json({ error: "No email" }, { status: 400 });

    // Convert files to buffers for Nodemailer
    const attachments = await Promise.all(files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
    })));

    await sendMail({ to: email, attachments });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}