import Link from "next/link";
import Image from "next/image";
import Tweet from "react-tweet-embed";

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

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  ConsCard,
  ProsCard,
  Step,
  StepLarge,
  StepCheck,
  Tweet,
  VideoDemo,
  HighlightBox,
  Divider,
  Table,
  StepLargeCustom,
  VideoComponent,
  Button,
};

export default MDXComponents;
