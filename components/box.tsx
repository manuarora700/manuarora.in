"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "relative flex aspect-square size-8 items-center justify-center rounded-sm bg-linear-to-b from-blue-400 to-blue-600 align-middle shadow-lg ring-1 ring-white/20 ring-offset-2 ring-offset-blue-500 ring-inset",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
