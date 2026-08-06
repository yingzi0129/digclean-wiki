"use client";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 text-center flex flex-col items-center gap-6">
      <div className="w-24 h-24 rounded-full bg-water/10 text-water flex items-center justify-center text-5xl font-bold">
        ?
      </div>
      <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-dirt">Page Not Found</h1>
      <p className="text-lg text-dirt/80 max-w-md">
        Oops! This treasure spot is empty. The page you’re looking for doesn’t exist or may have moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/" className="inline-flex items-center gap-2 bg-water text-white font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/90 transition-colors">
          Back to Home
        </a>
        <a href="/items/" className="inline-flex items-center gap-2 bg-transparent border-2 border-water text-water font-headline font-bold px-6 py-3 rounded-xl hover:bg-water/10 transition-colors">
          Open Item Database
        </a>
      </div>
    </div>
  );
}
