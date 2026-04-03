// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import Footer from "@/components/Footer";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={cn("max-w-2xl mx-auto", className)} {...rest}>
      {children}
    </main>
  );
}
