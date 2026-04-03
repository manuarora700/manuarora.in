import React from "react";
import { LinkPreview } from "./link-preview";

export const Header = () => {
  return (
    <div className="">
      
      <p className="text-base text-foreground pt-4">
        I'm am a software engineer at heart, tinkering with AI and code almost
        90% of the time.
      </p>
      <div className="text-base text-foreground pt-4">
        When I'm not coding, I usally talk about Design Engineering, AI Tools
        and Front-end design taste at my{" "}
        <LinkPreview url="https://www.youtube.com/@manuarora">
          YouTube Channel.
        </LinkPreview>
      </div>
      <div className="text-base text-foreground pt-4">
        I've been building my own component library <LinkPreview url="https://ui.aceternity.com">Aceternity UI</LinkPreview> for the past 4 years. It has got around 3M page views and 200k unique visitors a month. My favourite thing is to update this library everyday with new components and features.
      </div>
    </div>
  );
};
