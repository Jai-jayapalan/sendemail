"use client";

export default function Loader() {
  return (
    <div className="flex items-center justify-center p-1">
      <div className="relative flex h-6 w-6 items-center justify-center">
        {/* Outer pulse ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        {/* Inner solid spinning ring */}
        <div className="relative inline-flex h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
      </div>
    </div>
  );
}