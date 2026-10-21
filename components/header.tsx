import React from "react";
import { LinkPreview } from "./link-preview";

export const Header = () => {
  return (
    <div>
      <p className="text-foreground pt-4 text-base text-pretty">
        I make videos on{" "}
        <LinkPreview url="https://www.youtube.com/@manuarora">
          YouTube
        </LinkPreview>{" "}
        about design engineering and building beautiful interfaces with AI. Most
        days, I'm shipping new components to{" "}
        <LinkPreview url="https://ui.aceternity.com">Aceternity UI</LinkPreview>{" "}
        or adding sites to{" "}
        <span className="whitespace-nowrap">
          <LinkPreview url="https://vibrant.design">Vibrant</LinkPreview>,
        </span>{" "}
        my collection of the best-looking websites on the internet.
      </p>
      <p className="text-foreground pt-4 text-base text-pretty">
        Need a website built? My studio{" "}
        <LinkPreview url="https://aceternity.com">Aceternity</LinkPreview> does
        that. Want a second pair of eyes on your product?{" "}
        <LinkPreview url="https://cal.com/manu-arora-lacvgj/hour">
          Book a call
        </LinkPreview>{" "}
        with me.
      </p>
    </div>
  );
};
