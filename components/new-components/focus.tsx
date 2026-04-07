import React from "react";
import { Subheading } from "./subheading";
import { Box } from "./box";
import {
  IconAppWindowFilled,
  IconPaintFilled,
  IconTools,
} from "@tabler/icons-react";

export const Focus = () => {
  const focus = [
    {
      title: "Design Engineering and Taste",
      description:
        "I break down designs, talk about developing design taste and share trends.",
      skeleton: (
        <IconPaintFilled className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-lime-400 to-lime-600 ring-offset-lime-500",
    },
    {
      title: "AI Tools, Workflows and Processes",
      description:
        "I use AI tools and check their usablility in my daily workflow. I share my learnings and tips on how to use them effectively.",
      skeleton: (
        <IconTools className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-rose-400 to-rose-600 ring-offset-rose-500",
    },
    {
      title: "SaaS and Product Development",
      description:
        "I build products and apps that can impact millions of lives. As I build, I talk about it.",
      skeleton: (
        <IconAppWindowFilled className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-fuchsia-400 to-fuchsia-600 ring-offset-fuchsia-500",
    },
  ];
  return (
    <section>
      <Subheading>Things I focus on</Subheading>
      <div className="mt-4 flex flex-col gap-4">
        {focus.map((item) => (
          <div key={item.title} className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <Box className={item.boxClassName}>{item.skeleton}</Box>
              <p className="text-foreground font-medium text-balance">
                {item.title}
              </p>
            </div>
            <p className="text-foreground/70 mt-2 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
