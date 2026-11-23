import React from "react";
import Image from "next/image";

interface BlogCoverImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function BlogCoverImage({
  src,
  alt,
  caption,
}: BlogCoverImageProps) {
  return (
    <div className="w-full mb-10">
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-[#FAF7F2] border border-[#E4DED3] shadow-xs">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1100px"
          className="object-cover"
        />
      </div>
      {caption && (
        <p className="text-xs text-[#8C989E] text-center mt-2.5 italic">
          {caption}
        </p>
      )}
    </div>
  );
}
