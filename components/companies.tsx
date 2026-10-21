import React from "react";
import { Subheading } from "./subheading";

export const Companies = () => {
  const companies = [
    {
      title: "Cursor",
      description: "AI first code editor and development environment.",
      icon: "/static/images/companies/cursor.png",
    },
    {
      title: "Figma",
      description: "Collaborative design and prototyping platform.",
      icon: "/static/images/companies/figma.png",
    },
    {
      title: "Replit",
      description: "AI-powered platform to build and ship software.",
      icon: "/static/images/companies/replit.png",
    },
    {
      title: "Neon",
      description: "Fast Postgres Databases for Teams and Agents.",
      icon: "/static/images/companies/neon.png",
    },
    {
      title: "Strapi",
      description: "Open-Source headless CMS for apps.",
      icon: "/static/images/companies/strapi.png",
    },
    {
      title: "Hostinger",
      description: "Web hosting and domains platform.",
      icon: "/static/images/companies/hostinger.png",
    },
    {
      title: "Posthog",
      description: "Open-Source product analytics platform.",
      icon: "/static/images/companies/posthog.png",
    },
    {
      title: "Fireworks",
      description: "Open-source AI models at blazing speed.",
      icon: "/static/images/companies/fireworks.png",
    },
  ];
  return (
    <section>
      <Subheading>Companies I've worked with</Subheading>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        {companies.map((company) => (
          <div key={company.title} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src={company.icon}
                alt={`${company.title} logo`}
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="size-8 rounded-md shadow-sm outline outline-1 -outline-offset-1 outline-black/10"
              />
              <p className="text-foreground text-sm font-medium">
                {company.title}
              </p>
            </div>
            <p className="text-foreground/70 text-sm text-pretty">
              {company.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
