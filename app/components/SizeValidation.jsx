"use client";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";

export default function SizeValidation({ files, limitMB = 10 }) {
  const limitBytes = limitMB * 1024 * 1024;
  const totalBytes = files.reduce((acc, file) => acc + file.size, 0);
  const isOverLimit = totalBytes > limitBytes;
  const percentage = Math.min((totalBytes / limitBytes) * 100, 100);

  if (files.length === 0) return null;

  return (
    <div className="mt-2 p-3 rounded-xl border border-slate-200 bg-slate-50">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-slate-600">
          Total Storage ({limitMB}MB Limit)
        </span>
        <span className={`text-xs font-bold ${isOverLimit ? 'text-red-500' : 'text-indigo-600'}`}>
          {(totalBytes / (1024 * 1024)).toFixed(2)} MB
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 ${isOverLimit ? 'bg-red-500' : 'bg-indigo-500'}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Warning Message */}
      {isOverLimit && (
        <div className="flex items-center gap-2 mt-2 text-red-600 animate-pulse">
          <FiAlertCircle size={14} />
          <p className="text-[10px] font-semibold">Total size exceeds {limitMB}MB. Please remove some files.</p>
        </div>
      )}
      {!isOverLimit && totalBytes > 0 && (
        <div className="flex items-center gap-2 mt-2 text-emerald-600">
          <FiCheckCircle size={14} />
          <p className="text-[10px] font-semibold">Size is within limits.</p>
        </div>
      )}
    </div>
  );
}