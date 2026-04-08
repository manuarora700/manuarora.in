"use client";
import { SPRING_CONFIG } from "@/lib/motion-config";
import { cn } from "@/lib/utils";
import { IconSettingsFilled, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type FontOption = "inter" | "schibsted" | "geist";
type ColorOption = "regular" | "rose" | "emerald" | "blue";

const FONTS: { id: FontOption; label: string; variable: string }[] = [
  { id: "inter", label: "Inter", variable: "var(--font-inter)" },
  {
    id: "schibsted",
    label: "Schibsted",
    variable: "var(--font-schibsted-grotesk)",
  },
  { id: "geist", label: "Geist", variable: "var(--font-geist-sans)" },
];

const COLORS: {
  id: ColorOption;
  label: string;
  swatch: string;
  bg: string;
  primary: string;
  foreground: string;
  gradientFrom: string;
  gradientTo: string;
  ringOffset: string;
  activeRing: string;
}[] = [
  {
    id: "regular",
    label: "Regular",
    swatch: "bg-neutral-500",
    bg: "var(--color-white)",
    primary: "var(--color-neutral-700)",
    foreground: "var(--color-neutral-500)",
    gradientFrom: "from-blue-400",
    gradientTo: "to-blue-600",
    ringOffset: "ring-offset-blue-500",
    activeRing: "ring-blue-500",
  },
  {
    id: "rose",
    label: "Rose",
    swatch: "bg-rose-500",
    bg: "var(--color-rose-50)",
    primary: "var(--color-rose-700)",
    foreground: "var(--color-rose-500)",
    gradientFrom: "from-rose-400",
    gradientTo: "to-rose-600",
    ringOffset: "ring-offset-rose-500",
    activeRing: "ring-rose-500",
  },
  {
    id: "emerald",
    label: "Emerald",
    swatch: "bg-emerald-500",
    bg: "var(--color-emerald-50)",
    primary: "var(--color-emerald-700)",
    foreground: "var(--color-emerald-500)",
    gradientFrom: "from-emerald-400",
    gradientTo: "to-emerald-600",
    ringOffset: "ring-offset-emerald-500",
    activeRing: "ring-emerald-500",
  },
  {
    id: "blue",
    label: "Blue",
    swatch: "bg-blue-500",
    bg: "var(--color-blue-50)",
    primary: "var(--color-blue-700)",
    foreground: "var(--color-blue-500)",
    gradientFrom: "from-blue-400",
    gradientTo: "to-blue-600",
    ringOffset: "ring-offset-blue-500",
    activeRing: "ring-blue-500",
  },
];

const STORAGE_KEY = "site-settings";

function loadSettings(): { font: FontOption; color: ColorOption } {
  if (typeof window === "undefined")
    return { font: "schibsted", color: "regular" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { font: "schibsted", color: "regular" };
}

function saveSettings(font: FontOption, color: ColorOption) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ font, color }));
}

function applySettings(font: FontOption, color: ColorOption) {
  const root = document.documentElement;
  const fontConfig = FONTS.find((f) => f.id === font)!;
  const colorConfig = COLORS.find((c) => c.id === color)!;

  root.style.setProperty("--primary-font", fontConfig.variable);
  root.style.setProperty("--theme-bg", colorConfig.bg);
  root.style.setProperty("--primary", colorConfig.primary);
  root.style.setProperty("--foreground", colorConfig.foreground);
}

export const Settings = () => {
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState<FontOption>("schibsted");
  const [color, setColor] = useState<ColorOption>("regular");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = loadSettings();
    setFont(saved.font);
    setColor(saved.color);
    applySettings(saved.font, saved.color);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleFont = (f: FontOption) => {
    setFont(f);
    applySettings(f, color);
    saveSettings(f, color);
  };

  const handleColor = (c: ColorOption) => {
    setColor(c);
    applySettings(font, c);
    saveSettings(font, c);
  };

  const colorConfig = COLORS.find((c) => c.id === color)!;

  return (
    <div
      ref={containerRef}
      className="fixed top-4 right-4 z-50 flex flex-col items-end"
    >
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="trigger"
            layoutId="settings-container"
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "fixed top-5 right-5 flex aspect-square size-8 items-center justify-center rounded-lg bg-white bg-linear-to-b align-middle ring-1 ring-white/20 ring-offset-2 ring-inset",
              colorConfig.gradientFrom,
              colorConfig.gradientTo,
              colorConfig.ringOffset,
            )}
          >
            <IconSettingsFilled className="size-4 shrink-0 text-white drop-shadow-xl drop-shadow-black/40" />
          </motion.button>
        ) : (
          <motion.div
            key="panel"
            layoutId="settings-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "fixed top-4 right-4 w-56 rounded-xl border border-neutral-200 bg-white bg-linear-to-b p-4 shadow-sm ring-1 ring-white/20 ring-offset-2 ring-inset",
              colorConfig.gradientFrom,
              colorConfig.gradientTo,
              colorConfig.ringOffset,
            )}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.15 }}
            >
              <div className="mb-3">
                <p className="mb-1.5 text-xs font-medium text-white">Font</p>
                <div className="flex items-start gap-1.5">
                  {FONTS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => handleFont(f.id)}
                      style={{ fontFamily: f.variable }}
                      className={cn(
                        `rounded-md bg-white/80 px-2 py-1 text-xs font-bold shadow-sm ring-1 shadow-black/10 ring-black/10 transition-colors`,
                        font === f.id &&
                          "bg-neutral-100 shadow-black/15 ring-black/15",
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-1.5 text-xs font-medium text-white">Color</p>
                <div className="flex gap-2">
                  {COLORS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleColor(c.id)}
                      className="group flex flex-col items-center gap-1"
                    >
                      <div
                        className={cn(
                          `size-4 rounded-full transition-all`,
                          c.swatch,
                          color === c.id
                            ? `ring-2 ring-offset-2 ${c.activeRing}`
                            : "ring-1 ring-neutral-200 group-hover:ring-neutral-400",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
