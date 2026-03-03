// @ts-nocheck
"use client";

import Link from "next/link";
import NextImage from "next/image";

import ProsCard from "@/components/ProsCard";
import ConsCard from "@/components/ConsCard";
// import Gumroad from "@/components/metrics/Gumroad";
// import Unsplash from "@/components/metrics/Unsplash";
// import Analytics from "@/components/metrics/Analytics";
// import YouTube from "@/components/metrics/Youtube";
import Step from "@/components/Step";
import StepLarge from "@/components/StepLarge";
import StepLargeCustom from "@/components/StepLargeCustom";
import HighlightBox from "@/components/HighlightBox";
import StepCheck from "@/components/StepCheck";
import Divider from "@/components/Divider";
import Table from "@/components/Table";
import VideoDemo from "./VideoDemo";
import VideoComponent from "./VideoComponent";
import Button from "./Button";
import AnimatedGradient from "./SnippetsComponents/AnimatedGradient";
import TwitterCardsFramerMotionExample from "./SnippetsComponents/TwitterCardsFramerMotionExample";
import MeteorEffect from "./MeteorEffect/MeteorEffect";
import { CardHoverEffect } from "./CardHoverEffect/CardHoverEffect";
import { PreviewContainer } from "./PreviewContainer/PreviewContainer";

const TweetEmbed = () => null;

const MdxImage = ({ width, height, alt = "", ...props }) => {
  if (width && height) {
    return <NextImage width={width} height={height} alt={alt} {...props} />;
  }

  return <img alt={alt} loading="lazy" {...props} />;
};

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return <Link href={href} {...props}></Link>;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image: MdxImage,
  a: CustomLink,
  ConsCard,
  ProsCard,
  Step,
  StepLarge,
  StepCheck,
  Tweet: TweetEmbed,
  VideoDemo,
  HighlightBox,
  Divider,
  Table,
  StepLargeCustom,
  VideoComponent,
  Button,
  AnimatedGradient,
  TwitterCardsFramerMotionExample,
  MeteorEffect,
  CardHoverEffect,
  PreviewContainer,
};

export default MDXComponents;
