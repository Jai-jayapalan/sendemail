"use client";

export default function Loader() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="relative flex h-5 w-5 items-center justify-center">
        {/* Outer pulse ring - uses indigo for contrast on light blue */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-20"></span>
        
        {/* Inner solid spinning ring */}
        <div className="relative inline-flex h-5 w-5 rounded-full border-2 border-slate-900/20 border-t-slate-900 animate-spin"></div>
      </div>
      
      {/* Loading Text */}
      <span className="text-sm font-bold text-slate-900 tracking-wide uppercase italic">
        Sending...
      </span>
    </div>
  );
}