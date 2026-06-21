"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  
  // GPU-optimized scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Extremely subtle, luxurious parallax depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  return (
    <section ref={ref} className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-[#E9E8E4] flex items-end justify-center">
      
      {/* Background Image Container */}
      <motion.div
        className="absolute inset-0 w-full h-full origin-[50%_40%] will-change-transform"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.33, 1, 0.68, 1] }}
        style={{ y: backgroundY }}
      >
        <Image
          src="/aura_hero_campaign.png"
          alt="AURA Luxury Campaign"
          fill
          priority
          quality={100}
          className="object-cover object-[center_18%] sm:object-[center_20%]"
          sizes="100vw"
        />
        
        {/* Refined gradient overlay: deep contrast only at the bottom text area */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-[60vh] md:h-[70vh] bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
      </motion.div>

      {/* Foreground Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center w-full max-w-[1440px] px-6 sm:px-12 pb-[12vh] md:pb-[14vh] will-change-transform"
        style={{ y: contentY }}
      >
        
        {/* Label */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-center gap-3 mb-5 md:mb-6"
        >
          <span className="font-english text-[9px] md:text-[10px] text-white/90 tracking-[0.4em] uppercase">
            AURA ATELIER
          </span>
          <span className="text-white/60 text-[10px]">|</span>
          <span className="font-sans text-[10px] md:text-[11px] text-white/90 font-medium">
            تشكيلة محدودة
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-white font-light leading-[1.2] mb-5 md:mb-8"
          style={{ 
            textShadow: "0 2px 20px rgba(0,0,0,0.15)",
            wordSpacing: "0.05em"
          }}
        >
          AURA صُممت لأجلك
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-sans text-xs sm:text-sm md:text-base text-white/85 max-w-[280px] sm:max-w-md md:max-w-xl leading-[1.8] md:leading-[2] mb-10 md:mb-14 font-light"
        >
          تصميمات محدودة من أتيلييه AURA. قطع نسائية راقية تُراجع بعناية في المقاس والخامة قبل اعتماد الطلب.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Link href="/shop" className="w-full sm:w-auto">
            <button className="relative overflow-hidden w-full sm:w-auto px-10 py-[14px] md:px-14 md:py-4 bg-white text-[#1a1a1a] border-[0.5px] border-white font-sans text-[10px] md:text-[11px] uppercase transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-transparent hover:text-white hover:border-white/60 group">
              <span className="relative z-10 transition-transform duration-700 group-hover:scale-105 inline-block">تسوقي التشكيلة</span>
            </button>
          </Link>
          <Link href="/shop" className="w-full sm:w-auto">
            <button className="relative overflow-hidden w-full sm:w-auto px-10 py-[14px] md:px-14 md:py-4 bg-transparent text-white border-[0.5px] border-white/60 font-sans text-[10px] md:text-[11px] uppercase transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-white hover:text-[#1a1a1a] hover:border-white group">
              <span className="relative z-10 transition-transform duration-700 group-hover:scale-105 inline-block">تسوقي الآن</span>
            </button>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
