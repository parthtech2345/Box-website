"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/galleryData";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prev = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prev);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const next = (currentIndex + 1) % items.length;
    onNavigate(next);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#202A2E]/95 backdrop-blur-md p-3 sm:p-6 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Lightbox Container - stopPropagation so clicking inside does not close */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#202A2E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D1B48C] bg-[#D1B48C]/15 px-3 py-1 rounded-full border border-[#D1B48C]/30">
              {currentItem.category}
            </span>
            <span className="text-xs text-[#A6B2B8] font-medium hidden sm:inline">
              Image {currentIndex + 1} of {items.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Image Area */}
        <div className="relative flex-1 w-full min-h-[300px] max-h-[64vh] sm:max-h-[68vh] flex items-center justify-center p-3 sm:p-6 bg-black/40">
          <div className="relative w-full h-full max-w-4xl max-h-[62vh] aspect-[16/10] sm:aspect-auto">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              sizes="(max-width: 1024px) 100vw, 85vw"
              className="object-contain object-center"
              priority
            />
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#202A2E]/80 hover:bg-[#E97835] text-white border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#202A2E]/80 hover:bg-[#E97835] text-white border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Details Bar */}
        <div className="px-5 sm:px-7 py-4 bg-white/5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-base sm:text-lg text-white">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#A6B2B8] max-w-2xl leading-relaxed">
              {currentItem.description}
            </p>
          </div>

          <span className="text-xs font-mono text-[#D1B48C] sm:hidden">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
