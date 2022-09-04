import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import FreeCodeCamp from "@/components/FreeCodeCampCard/FreeCodeCamp";

export default function FreeCodeCampPage() {
  return (
    <Container
      title="Blogs at FreeCodeCamp – Manu Arora"
      description="I've been writing articles for freeCodeCamp - Check out my latest articles here."
      image="/avatar.jpg"
    >
      <FreeCodeCamp />
      <div className="max-w-2xl mx-auto mb-16 w-full">
        <Contact />
      </div>
    </Container>
  );
}
