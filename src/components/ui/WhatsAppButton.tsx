"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = "201000000000",
  message = "مرحباً، أريد الاستفسار عن منتجات AURA",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصلي مع مستشارة AURA عبر واتساب"
      initial={{ opacity: 0, scale: 0.88, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: 0.6 },
        scale: { duration: 0.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ y: -5, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-24 right-5 z-40 md:bottom-10 md:right-8 inline-flex items-center gap-3 border border-brand-border bg-background-secondary/95 px-4 py-3 text-text-primary shadow-[0_8px_30px_rgba(154,115,85,0.16)] transition-colors duration-300 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4EFE8] text-accent">
        <MessageCircle className="h-4 w-4 stroke-[1.6]" aria-hidden="true" />
      </span>
      <span className="hidden flex-col text-right sm:flex">
        <span className="font-sans text-[10px] font-bold text-accent">مستشارة AURA</span>
        <span className="font-sans text-[11px] font-light text-text-secondary">استفسار خاص عبر واتساب</span>
      </span>
    </motion.a>
  );
}