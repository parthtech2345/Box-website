"use client";

import React, { useState, useEffect, useRef } from "react";

const TOTAL_FRAMES = 80;

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Animation & Frame tracking state
  const progressRef = useRef(0); // 0.0 to 1.0
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Preload all 80 frames into memory
  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new window.Image();
      const numStr = i.toString().padStart(2, "0");
      img.src = `/home/hero-frames/frame_${numStr}.jpg`;
      img.onload = () => {
        loaded++;
        if (loaded >= 10 && !imagesLoaded) {
          setImagesLoaded(true);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [imagesLoaded]);

  // Frame drawing function - full width & height cover
  const drawFrame = (frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (img && img.complete) {
      const cw = canvas.width;
      const ch = canvas.height;
      const imgRatio = 16 / 9;
      const canvasRatio = cw / ch;

      let drawW = cw;
      let drawH = ch;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawH = cw / imgRatio;
        offsetY = (ch - drawH) / 2;
      } else {
        drawW = ch * imgRatio;
        offsetX = (cw - drawW) / 2;
      }

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    }
  };

  // Silky smooth 60fps lerp animation loop
  useEffect(() => {
    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.16;
        const frameToDraw = Math.min(
          Math.max(Math.round(currentFrameRef.current), 0),
          TOTAL_FRAMES - 1
        );
        drawFrame(frameToDraw);
      } else {
        currentFrameRef.current = targetFrameRef.current;
        drawFrame(Math.round(currentFrameRef.current));
      }
      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [imagesLoaded]);

  // Canvas resize synchronization
  useEffect(() => {
    const updateSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth * window.devicePixelRatio;
      canvas.height = parent.clientHeight * window.devicePixelRatio;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }
      drawFrame(Math.round(currentFrameRef.current));
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Freezes Hero in place: wheel event directly scrubs through all 80 frames smoothly
  // Only after video finishes (progress = 1.0) does scroll proceed downward to next section
  // When scrolling back up, video plays in reverse back to 0.0 before scrolling above
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onWheel = (e: WheelEvent) => {
      const rect = hero.getBoundingClientRect();
      const inView = rect.top <= 10 && rect.bottom >= window.innerHeight * 0.8;
      if (!inView) return;

      const delta = e.deltaY;
      const scrollingDown = delta > 0;
      const scrollingUp = delta < 0;

      if (scrollingDown && progressRef.current < 1) {
        e.preventDefault();
        const step = Math.min(Math.max(Math.abs(delta) / 1200, 0.02), 0.08);
        const next = Math.min(progressRef.current + step, 1);
        progressRef.current = next;

        targetFrameRef.current = Math.min(
          Math.floor(next * (TOTAL_FRAMES - 1)),
          TOTAL_FRAMES - 1
        );
      } else if (scrollingUp && progressRef.current > 0) {
        e.preventDefault();
        const step = Math.min(Math.max(Math.abs(delta) / 1200, 0.02), 0.08);
        const next = Math.max(progressRef.current - step, 0);
        progressRef.current = next;

        targetFrameRef.current = Math.min(
          Math.floor(next * (TOTAL_FRAMES - 1)),
          TOTAL_FRAMES - 1
        );
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-screen min-h-[600px] bg-[#1A1816] overflow-hidden select-none border-b border-[#E4DED3]"
      aria-label="Aavrit Packaging Hero Manufacturing"
    >
      {/* 100% Clean Full-Width 100vh Video Canvas (Zero text overlays, Zero black gap) */}
      <div className="absolute inset-0 w-full h-full">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover object-center block"
        />
      </div>
    </section>
  );
}
