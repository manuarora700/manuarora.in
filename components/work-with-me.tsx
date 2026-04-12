"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Subheading } from "./subheading";
import Link from "next/link";
import { Box } from "./box";
import { cn } from "@/lib/utils";
import {
  IconAppWindowFilled,
  IconBrandZoom,
  IconVideoFilled,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { SPRING_CONFIG } from "@/lib/motion-config";

type WorkItem = {
  title: string;
  description: string;
  boxClassName: string;
  skeleton: React.ReactNode;
} & ({ type: "link"; href: string } | { type: "copyEmail"; email: string });

export const WorkWithMe = () => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  const work: WorkItem[] = [
    {
      title: "Consultation",
      description: "Get on a paid call with me to discuss your things.",
      type: "link",
      href: "https://cal.com/manu-arora-lacvgj/hour",
      boxClassName:
        "bg-linear-to-b from-blue-400 to-blue-600 ring-offset-blue-500",
      skeleton: (
        <IconBrandZoom className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
    },
    {
      title: "Hire me and my team",
      description: "Let's build a world class website for your business.",
      type: "link",
      href: "https://aceternity.com",
      boxClassName:
        "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
      skeleton: (
        <IconAppWindowFilled className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
    },
    {
      title: "Sponsor my video",
      description: "Get your brand in front of my audience.",
      type: "copyEmail",
      email: "manu@aceternity.com",
      boxClassName:
        "bg-linear-to-b from-emerald-400 to-emerald-600 ring-offset-emerald-500",
      skeleton: (
        <IconVideoFilled className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
    },
  ];

  const toast = (
    <AnimatePresence mode="wait">
      {copied ? <CopyAnimation key="copy-email-toast" /> : null}
    </AnimatePresence>
  );

  return (
    <section className="">
      <Subheading>Work with me</Subheading>
      {mounted ? createPortal(toast, document.body) : null}
      <div className="mt-8 flex flex-col gap-6">
        {work.map((item) => {
          if (item.type === "copyEmail") {
            return (
              <button
                type="button"
                onClick={() => handleCopyEmail(item.email)}
                className="flex w-full cursor-pointer flex-col items-start gap-1 text-left md:flex-row md:items-center md:gap-2"
                key={item.title}
              >
                <Box className={cn("", item.boxClassName)}>{item.skeleton}</Box>
                <p className="text-foreground shrink-0 font-medium">
                  {item.title}
                </p>
                <div className="hidden size-1 rounded-full bg-neutral-200 md:block"></div>
                <p className="text-foreground/70">{item.description}</p>
              </button>
            );
          }

          return (
            <Link
              href={item.href}
              target="_blank"
              className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2"
              key={item.title}
            >
              <Box className={cn("", item.boxClassName)}>{item.skeleton}</Box>
              <p className="text-foreground shrink-0 font-medium">
                {item.title}
              </p>
              <div className="hidden size-1 rounded-full bg-neutral-200 md:block"></div>
              <p className="text-foreground/70">{item.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

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
