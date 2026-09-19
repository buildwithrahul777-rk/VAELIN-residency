import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Compass, Eye, ShieldCheck } from 'lucide-react';
import { ASSETS } from '../data/residences.ts';

interface HeroScrollRevealProps {
  onOpenEnquiry: () => void;
  onExploreResidences: () => void;
  videoUrl?: string;
}

export const HeroScrollReveal: React.FC<HeroScrollRevealProps> = ({
  onOpenEnquiry,
  onExploreResidences,
  videoUrl,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [progress, setProgress] = useState<number>(0);
  const [isVideoAvailable, setIsVideoAvailable] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [stageName, setStageName] = useState<string>('Atmospheric Void');

  // Animation lerp reference
  const currentProgressRef = useRef<number>(0);
  const targetProgressRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Preload architectural image for canvas reveal
  useEffect(() => {
    const img = new Image();
    img.src = ASSETS.heroFacade;
    img.onload = () => {
      imgRef.current = img;
      setImageLoaded(true);
    };
  }, []);

  // Check if video is playable if provided
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) {
      setIsVideoAvailable(false);
      return;
    }

    const handleCanPlay = () => {
      setIsVideoAvailable(true);
      video.pause();
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [videoUrl]);

  // Update stage label based on scroll progress
  const getStageLabel = (p: number) => {
    if (p < 0.2) return '1. Atmospheric Atmosphere & Veil';
    if (p < 0.45) return '2. Architectural Silhouette & Massing';
    if (p < 0.7) return '3. Façade, Lighting & Travertine Form';
    if (p < 0.95) return '4. Reflections & Landscape Clarity';
    return '5. Complete Architectural Masterpiece';
  };

  // Scroll handler calculating 0 to 1 progress within pinned container
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollDistance = containerRef.current.offsetHeight - window.innerHeight;
    if (scrollDistance <= 0) return;

    const scrolled = -rect.top;
    const clampedProgress = Math.max(0, Math.min(1, scrolled / scrollDistance));
    targetProgressRef.current = clampedProgress;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  // Render loop: Smooth lerp + Canvas Architectural Multi-Stage Reveal
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlePhase = 0;

    const render = () => {
      // Smooth interpolation for jitter-free scrub
      const diff = targetProgressRef.current - currentProgressRef.current;
      currentProgressRef.current += diff * 0.12;

      const p = currentProgressRef.current;
      setProgress(p);
      setStageName(getStageLabel(p));

      // Synchronize video currentTime if video available
      if (videoRef.current && isVideoAvailable && videoRef.current.duration) {
        videoRef.current.pause();
        const targetTime = p * videoRef.current.duration;
        if (Math.abs(videoRef.current.currentTime - targetTime) > 0.03) {
          videoRef.current.currentTime = targetTime;
        }
      }

      // Handle Canvas resize
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      // CLEAR CANVAS WITH DEEP TWILIGHT VOID
      ctx.fillStyle = '#08090a';
      ctx.fillRect(0, 0, width, height);

      particlePhase += 0.015;

      const img = imgRef.current;
      if (img && img.complete) {
        // Calculate aspect cover fit
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const screenRatio = width / height;
        let drawW = width;
        let drawH = height;
        let drawX = 0;
        let drawY = 0;

        if (screenRatio > imgRatio) {
          drawW = width;
          drawH = width / imgRatio;
          drawY = (height - drawH) / 2;
        } else {
          drawH = height;
          drawW = height * imgRatio;
          drawX = (width - drawW) / 2;
        }

        // --- STAGE 0 & 1: Architectural Silhouette & Geometry Contours (visible from 0.05 to 1.0) ---
        ctx.save();
        // Base low-opacity silhouette
        const silhouetteAlpha = Math.min(1, p * 1.5);
        ctx.globalAlpha = silhouetteAlpha;

        // Draw image with dynamic filters matching the scroll progress
        // At p = 0: very dark, high contrast silhouette with deep blue fog
        // At p = 1: 100% natural, crisp, warm architectural splendor
        const brightness = 0.15 + p * 0.85;
        const contrast = 1.3 - p * 0.3;
        const blur = Math.max(0, (1 - p) * 12);
        const saturate = 0.4 + p * 0.6;

        ctx.filter = `brightness(${brightness}) contrast(${contrast}) blur(${blur}px) saturate(${saturate})`;

        // Scale zoom subtly from 1.06 to 1.0 for cinematic inward settling
        const scale = 1.06 - p * 0.06;
        ctx.translate(width / 2, height / 2);
        ctx.scale(scale, scale);
        ctx.translate(-width / 2, -height / 2);

        ctx.drawImage(img, drawX, drawY, drawW, drawH);
        ctx.restore();

        // --- STAGE 2: Architectural Contour Glow Lines (reveals structure between 0.1 and 0.6) ---
        if (p > 0.08 && p < 0.85) {
          ctx.save();
          const wireAlpha = Math.sin(Math.PI * ((p - 0.08) / 0.77)) * 0.35;
          ctx.globalAlpha = wireAlpha;
          ctx.strokeStyle = '#c8a876';
          ctx.lineWidth = 1;
          ctx.setLineDash([6, 12]);

          // Subtle architectural grid coordinate accents
          const centerX = width * 0.5;
          const baseY = height * 0.62;
          ctx.beginPath();
          ctx.moveTo(centerX - 350, baseY);
          ctx.lineTo(centerX + 350, baseY);
          ctx.moveTo(centerX - 280, baseY - 120);
          ctx.lineTo(centerX + 280, baseY - 120);
          ctx.moveTo(centerX - 320, baseY - 240);
          ctx.lineTo(centerX + 320, baseY - 240);
          ctx.stroke();
          ctx.restore();
        }

        // --- STAGE 3: Warm Architectural Light Bloom (intensifies as p increases) ---
        if (p > 0.25) {
          ctx.save();
          const bloomAlpha = Math.min(0.4, (p - 0.25) * 0.6);
          ctx.globalAlpha = bloomAlpha;
          ctx.globalCompositeOperation = 'screen';

          const warmGradient = ctx.createRadialGradient(
            width * 0.52,
            height * 0.55,
            50,
            width * 0.52,
            height * 0.55,
            width * 0.4
          );
          warmGradient.addColorStop(0, 'rgba(235, 185, 115, 0.45)');
          warmGradient.addColorStop(0.5, 'rgba(200, 150, 80, 0.15)');
          warmGradient.addColorStop(1, 'rgba(8, 9, 10, 0)');

          ctx.fillStyle = warmGradient;
          ctx.fillRect(0, 0, width, height);
          ctx.restore();
        }

        // --- ATMOSPHERIC VEIL & FOG (dissolves as p goes from 0.0 to 0.9) ---
        const mistOpacity = Math.max(0, 1 - p * 1.15);
        if (mistOpacity > 0.01) {
          ctx.save();
          ctx.globalAlpha = mistOpacity;

          // Atmospheric dusk blue mist
          const mistGrad = ctx.createLinearGradient(0, 0, 0, height);
          mistGrad.addColorStop(0, 'rgba(8, 10, 14, 0.95)');
          mistGrad.addColorStop(0.45, 'rgba(12, 16, 22, 0.7)');
          mistGrad.addColorStop(1, 'rgba(8, 9, 10, 0.9)');

          ctx.fillStyle = mistGrad;
          ctx.fillRect(0, 0, width, height);

          // Subtle drifting atmospheric particles
          ctx.fillStyle = 'rgba(212, 175, 55, 0.25)';
          for (let i = 0; i < 28; i++) {
            const px = ((i * 137.5 + particlePhase * 35) % width);
            const py = ((i * 93.3 + Math.sin(particlePhase + i) * 20 + height * 0.4) % (height * 0.6)) + height * 0.2;
            const size = (i % 3) + 1;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }

        // Subtle vignette for cinematic letterbox framing
        ctx.save();
        const vignette = ctx.createRadialGradient(
          width / 2,
          height / 2,
          width * 0.3,
          width / 2,
          height / 2,
          width * 0.75
        );
        vignette.addColorStop(0, 'rgba(8, 9, 10, 0)');
        vignette.addColorStop(1, 'rgba(8, 9, 10, 0.75)');
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      rafIdRef.current = requestAnimationFrame(render);
    };

    rafIdRef.current = requestAnimationFrame(render);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isVideoAvailable]);

  // Typography opacities based on reveal progress
  // Editorial headline is prominent in the early-to-mid scroll, then transforms gracefully to reveal the architecture
  const headlineOpacity = Math.max(0, 1 - progress * 1.8);
  const subtitleTransform = `translateY(${-progress * 40}px)`;

  return (
    <section
      ref={containerRef}
      id="hero-track"
      className="relative w-full h-[280vh] bg-[#08090a] select-none"
      aria-label="Cinematic Building Reveal Experience"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        
        {/* Visual Engine: Scroll-Scrubbed Canvas and Video Fallback */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover block"
            aria-label="Scroll-driven architectural reveal canvas"
          />

          {/* Optional Video Element for native video scrub when provided */}
          {videoUrl ? (
            <video
              ref={videoRef}
              src={videoUrl}
              muted
              playsInline
              preload="auto"
              className="hidden"
            />
          ) : null}
        </div>

        {/* Editorial Brand Watermark & Top Accents */}
        <div className="relative z-10 pt-28 px-6 md:px-16 flex justify-between items-start pointer-events-none">
          <div className="flex items-center space-x-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#c8a876] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c8a876] font-medium">
              Architectural Reveal Experience
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-[11px] uppercase tracking-[0.25em] text-[#8e929a]">
            <span>Compound 01</span>
            <span className="text-[#3a3f47]">•</span>
            <span>Blue Hour Twilight</span>
            <span className="text-[#3a3f47]">•</span>
            <span>46°29'N 9°50'E</span>
          </div>
        </div>

        {/* Hero Editorial Typography Container */}
        <div
          className="relative z-10 px-6 md:px-16 max-w-5xl my-auto transition-all duration-300"
          style={{
            opacity: headlineOpacity,
            transform: subtitleTransform,
            pointerEvents: progress > 0.6 ? 'none' : 'auto',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center space-x-2.5 px-3 py-1 mb-6 rounded-full border border-[#c8a876]/30 bg-[#14171b]/60 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-[#c8a876]" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#e3cd9e] font-medium">
                Luxury Residences
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#f8f9fa] tracking-tight leading-[0.98] mb-6">
              WHERE <br />
              <span className="italic font-light text-[#c8a876]">ARCHITECTURE</span> <br />
              MEETS POSSIBILITY.
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-[#b0b4bc] font-light leading-relaxed mb-8">
              Thoughtfully designed residences shaped around architecture, atmosphere, and modern living.
              A monolithic synthesis of raw Roman travertine and meditative water reflections.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-explore-cta"
                onClick={onExploreResidences}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#c8a876] text-[#08090a] font-medium text-xs tracking-[0.2em] uppercase rounded-none transition-all duration-500 hover:bg-[#dfc495] shadow-lg hover:shadow-[#c8a876]/20 cursor-pointer"
              >
                <span>Explore Residences</span>
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>

              <button
                id="hero-enquiry-cta"
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#e3e4e8] font-medium text-xs tracking-[0.2em] uppercase border border-white/20 rounded-none transition-all duration-300 hover:border-[#c8a876] hover:text-[#c8a876] cursor-pointer"
              >
                Private Enquiry
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Interactive HUD: Scrub Control & Stage Indicator */}
        <div className="relative z-20 pb-8 px-6 md:px-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-auto">
          
          {/* Scroll Prompt & Stage Details */}
          <div className="flex items-center space-x-5">
            <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center bg-black/40 backdrop-blur-md">
              <ArrowDown className={`w-4 h-4 text-[#c8a876] transition-transform duration-500 ${progress > 0.9 ? 'rotate-180' : 'animate-bounce'}`} />
            </div>

            <div>
              <div className="flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase text-[#8e929a]">
                <span>Scroll Controlled Reveal</span>
                <span className="text-[#3a3f47]">•</span>
                <span className="text-[#c8a876] font-semibold">{Math.round(progress * 100)}%</span>
              </div>
              <p className="text-xs sm:text-sm font-serif text-[#f0f1f3] tracking-wide">
                {stageName}
              </p>
            </div>
          </div>

          {/* Interactive Scrub Progress Bar with Phase Points */}
          <div className="w-full md:w-96 bg-[#14171b]/80 border border-white/10 p-3 backdrop-blur-md">
            <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-[#717680] mb-2 font-mono">
              <span>0% Veil</span>
              <span>35% Silhouette</span>
              <span>70% Façade</span>
              <span>100% Reveal</span>
            </div>

            <div className="relative w-full h-1.5 bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#8f7453] via-[#c8a876] to-[#f4e2b8] transition-all duration-75"
                style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-[10px] text-[#9ca3af]">
              <span className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a876]" />
                <span className="font-mono text-[9px] text-[#c8a876]">
                  {progress < 1 ? 'SCROLL TO PROGRESSIVELY REVEAL' : 'REVEAL COMPLETE • SCROLL DOWN'}
                </span>
              </span>

              {progress > 0.95 && (
                <button
                  onClick={onExploreResidences}
                  className="text-[9px] uppercase tracking-[0.15em] text-[#e3cd9e] hover:underline cursor-pointer"
                >
                  Continue →
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
