"use client";
import { useState } from "react";
import ToastProvider from "./providers/ToastProvider";
import FileUpload from "./components/FileUpload";
import EmailForm from "./components/EmailForm";

export default function Home() {
  const [files, setFiles] = useState([]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <ToastProvider />
      <div className="card w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4 text-center">File Sender</h1>
        <FileUpload files={files} setFiles={setFiles} />
        <EmailForm files={files} setFiles={setFiles} />
      </div>
    </div>
  );
}
