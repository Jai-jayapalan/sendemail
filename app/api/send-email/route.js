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
    const files = data.getAll("files");

    if (!email) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const fileArray = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          originalFilename: file.name, // "document.pdf"
          buffer: buffer,
          mimetype: file.type,         // "application/pdf"
        };
      })
    );

    await sendMail({
      to: email,
      files: fileArray,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail Error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}