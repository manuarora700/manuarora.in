"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { SPRING_CONFIG } from "@/lib/motion-config";

type CopyEmailInlineProps = {
  children: React.ReactNode;
  email?: string;
};

export function CopyEmailInline({
  children,
  email = "manu@aceternity.com",
}: CopyEmailInlineProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  const toast = (
    <AnimatePresence mode="popLayout">
      {copied ? <CopyAnimation key="copy-email-toast" /> : null}
    </AnimatePresence>
  );

  return (
    <>
      {mounted ? createPortal(toast, document.body) : null}
      <button
        type="button"
        onClick={handleCopyEmail}
        className="font-inherit relative inline cursor-pointer border-0 bg-transparent p-0 text-inherit underline decoration-neutral-400 decoration-dotted underline-offset-[0.2em]"
        aria-label={`Copy ${email} to clipboard`}
      >
        {children}
      </button>
    </>
  );
}

const CopyAnimation = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
      }}
      transition={SPRING_CONFIG}
      className="pointer-events-none fixed inset-x-0 bottom-20 z-200 mx-auto flex w-fit items-center justify-center gap-2 rounded-lg bg-linear-to-b from-blue-400 to-blue-600 p-4 text-center text-white shadow-lg ring-1 shadow-black/10 ring-white/50 ring-offset-2 ring-offset-blue-500 ring-inset"
    >
      <EmailIcon /> Email Copied to clipboard
    </motion.div>
  );
};

const EmailIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4 perspective-distant"
      initial={{
        scale: 0.8,
      }}
      animate={{
        scale: [0.8, 1, 1.2, 1],
      }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
      <motion.path
        initial={{
          rotateX: 40,
        }}
        animate={{
          rotateX: [40, 0, 40],
        }}
        style={{
          transformOrigin: "top",
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
      />
    </motion.svg>
  );
};
