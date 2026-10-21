// @ts-nocheck
import { Link } from "@tanstack/react-router";

import StepLarge from "@/components/step-large";
import StepLargeCustom from "@/components/step-large-custom";
import HighlightBox from "@/components/highlight-box";
import StepCheck from "@/components/step-check";
import Divider from "@/components/divider";
import VideoDemo from "./video-demo";
import VideoComponent from "./video-component";
import Button from "./button";

const TweetEmbed = () => null;

const MdxImage = ({ alt = "", priority, ...props }) => (
  <img alt={alt} loading="lazy" decoding="async" {...props} />
);

const CustomLink = ({ href, ...props }) => {
  if (href?.startsWith("#")) {
    return <a href={href} {...props} />;
  }

  if (href?.startsWith("/")) {
    return <Link to={href} {...props}></Link>;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image: MdxImage,
  a: CustomLink,
  StepLarge,
  StepCheck,
  Tweet: TweetEmbed,
  VideoDemo,
  HighlightBox,
  Divider,
  StepLargeCustom,
  VideoComponent,
  Button,
};

export default MDXComponents;
