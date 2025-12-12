'use client';

import { useState } from 'react';

interface NewsImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string; // Class for the placeholder container to toggle visibility
}

export function NewsImage({ src, alt, className }: NewsImageProps) {
  const [error, setError] = useState(false);

  if (error) {
     return null; // Don't render anything if error, letting the parent's placeholder show behind it or relying on parent layout
  }

  return (
    <img 
        src={src} 
        alt={alt} 
        className={className}
        onError={() => setError(true)}
    />
  );
}
