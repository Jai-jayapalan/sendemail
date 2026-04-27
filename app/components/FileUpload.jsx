"use client";
import { useState, useRef } from "react";
import { FiUploadCloud, FiFile, FiX } from "react-icons/fi";

export default function FileUpload({ files, setFiles }) {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef();

    const handleChange = (e) => {
        const newFiles = Array.from(e.target.files);
        if (newFiles.length > 0) {
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index) => {
        const updated = files.filter((_, i) => i !== index);
        setFiles(updated);
    };

    return (
        <div className="space-y-4">
            {/* Constant Upload Trigger */}
            <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    const droppedFiles = Array.from(e.dataTransfer.files);
                    setFiles(prev => [...prev, ...droppedFiles]);
                }}
                onClick={() => inputRef.current.click()}
                className={`cursor-pointer rounded-2xl border-2 border-dashed p-6 transition-all duration-300 flex flex-col items-center justify-center
                    ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-slate-300 hover:border-indigo-400 bg-slate-50"}`}
            >
                <input ref={inputRef} type="file" multiple onChange={handleChange} className="hidden" />
                <div className="rounded-full bg-indigo-100 p-3 text-indigo-600 mb-2">
                    <FiUploadCloud size={24} />
                </div>
                <h3 className="text-sm font-semibold text-slate-800">Add more files</h3>
                <p className="text-xs text-slate-500">Drag & drop or click to browse</p>
            </div>

            {/* Scrollable File List Container */}
            {files.length > 0 && (
                <div className="grid grid-cols-1 gap-2 max-h-[180px] overflow-y-auto pr-1 custom-scrollbar transition-all">
                    {files.map((file, index) => (
                        <div key={`${file.name}-${index}`} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <FiFile className="text-indigo-500 flex-shrink-0" />
                                <div className="flex flex-col truncate">
                                    <span className="text-xs font-medium text-slate-700 truncate">{file.name}</span>
                                    <span className="text-[10px] text-slate-400">{(file.size / 1024).toFixed(1)} KB</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => removeFile(index)}
                                className="text-slate-400 hover:text-red-500 p-1"
                            >
                                <FiX size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}