'use client'

export default function VideoProfile() {
  return (
    <div className="hidden dark:block w-full h-full relative overflow-hidden">
      <video 
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full scale-105"
      >
        <source src="/compressed.mp4" type="video/mp4" />
        <source src="/compressed.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gray-900/10 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/3 to-transparent mix-blend-multiply" />
    </div>
  );
} 