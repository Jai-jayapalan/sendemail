"use client";
import { useState, useMemo } from "react";
import { toast } from "react-toastify";
import { FiSend, FiMail } from "react-icons/fi";
import Loader from "./Loader";

export default function EmailForm({ files, setFiles }) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    // Inside EmailForm.jsx
    const TOTAL_LIMIT = 10 * 1024 * 1024; // 10MB
    const totalSize = useMemo(() => files.reduce((acc, f) => acc + f.size, 0), [files]);

    const isEmailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);

    // Add totalSize check to canSend
    const canSend = isEmailValid && files.length > 0 && totalSize <= TOTAL_LIMIT && !loading;

    const handleSubmit = async () => {
        if (!canSend) return;
        setLoading(true);

        const formData = new FormData();
        formData.append("email", email);
        files.forEach((file) => formData.append("files", file));

        try {
            const res = await fetch("/api/send-email", { method: "POST", body: formData });
            const data = await res.json();

            if (data.success) {
                toast.success("Files sent successfully!");
                // FIX: Clear both email and files on success
                setEmail("");
                setFiles([]);
            } else {
                toast.error("Failed to send email");
            }
        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-4 space-y-3">
            <div className="relative group">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500" />
                <input
                    type="email"
                    placeholder="recipient@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                />
            </div>

            <button
                onClick={handleSubmit}
                disabled={!canSend}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all cursor-pointer
                    ${canSend ? "bg-indigo-600 text-white shadow-lg active:scale-95" : "bg-slate-100 text-slate-400"}`}
            >
                {loading ? <Loader /> : <><FiSend /> <span>Send Files</span></>}
            </button>
        </div>
    );
}