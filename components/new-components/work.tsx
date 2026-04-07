import React from "react";
import { Box } from "./box";
import Link from "next/link";
import { IconBrandYoutube } from "@tabler/icons-react";
import { Subheading } from "./subheading";

export const Work = () => {
  return (
    <div>
      <Subheading>Things I do</Subheading>
      <div className="mt-4 flex flex-col gap-4">
        <Link
          href="https://aceternity.com"
          target="__blank"
          className="flex items-center gap-2"
        >
          <Box className="mr-4">
            <LogoSVGNew className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
          </Box>
          <p className="text-foreground font-medium">Aceternity</p>
          <div className="size-1 rounded-full bg-neutral-200"></div>
          <p className="text-foreground/70">
            Design + Dev studio for startups and enterprises.
          </p>
        </Link>
        <Link
          href="https://ui.aceternity.com"
          target="__blank"
          className="flex items-center gap-2"
        >
          <Box className="mr-4 bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500">
            <LogoSVGNew className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
          </Box>
          <p className="text-foreground font-medium">Aceternity UI</p>
          <div className="size-1 rounded-full bg-neutral-200"></div>
          <p className="text-foreground/70">
            Component library for modern websites.
          </p>
        </Link>
        <Link
          href="https://youtube.com/@manuarora"
          target="__blank"
          className="flex items-center gap-2"
        >
          <Box className="mr-4 bg-linear-to-b from-red-400 to-red-600 ring-offset-red-500">
            <IconBrandYoutube className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
          </Box>
          <p className="text-foreground font-medium">YouTube</p>
          <div className="size-1 rounded-full bg-neutral-200"></div>
          <p className="text-foreground/70">
            I talk about design enginering and SaaS.
          </p>
        </Link>
      </div>
    </div>
  );
};

const LogoSVGNew = ({ className }: { className?: string }) => {
  return (
    <svg
      width="208"
      height="160"
      viewBox="48 48 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M146 48H106.136L48 208H87.8644L116.932 128C116.932 128 122 114.5 124.4 108L131.466 88L146 48Z"
        fill="currentColor"
      />
      <path d="M110 48H149.864L168.032 98H127.84L110 48Z" fill="currentColor" />
      <path
        d="M139.587 113.833L171.458 208H208L172.807 113.833H139.587Z"
        fill="currentColor"
      />
      <path d="M173 114L140.8 208H104L139.545 114H173Z" fill="currentColor" />
    </svg>
  );
};
