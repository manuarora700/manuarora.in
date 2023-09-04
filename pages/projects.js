import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";

export default function projects() {
  return (
    <Container
      title="Projects – Manu Arora"
      description="Projects that I've built from scratch, upcoming projects, learned from courses and projects that I'm proud of."
      image="/avatar.jpg"
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          My creations from work and my own time.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Banty.com"
            description="A HIPAA and Ontario Health compliant Telehealth solution that can easily add virtual visits to your family practice or specialty. I took care of the technical lead role while planning the technical roadmap, and designing solutions for problems."
            slug="banty"
            icon="moonbeam"
            colSpan={2}
            tags={["React", "MongoDB", "NodeJS", "REST", "AWS", "Jitsi", "WebRTC"]}
          />
          <ProjectCard
            title="Docswell.co"
            description="I contributed to Docswell as a technical lead which is a Telemedicine solution that streamlines healthcare operations with virtual visits, appointment scheduling, payment processing, digital forms, and secure messaging."
            slug="test-two"
            icon="aceternity"
            colSpan={2}
            tags={["NextJs", "NestJS", "MongoDB", "GraphQL", "REST", "AWS", "Jitsi", "WebRTC"]}
          />
          <ProjectCard
            title="Easly"
            description="Redefined customer support and supplier relationship management for all industries."
            slug="test-three"
            icon="algochurn"
            tags={["Angular", "REST", "Bootstrap", "ChartJS"]}
          />
          <ProjectCard
            title="CyberHorizon"
            description="The answer to today’s shifting business dynamic of global offices and remote teams. Provides all the in-office connectivity."
            slug="test-three"
            icon="algochurn"
            tags={["Angular", "REST", "Jitsi", "WebRTC"]}
          />
          <ProjectCard
            title="OrangeHRM Enterprise Mobile"
            description="A mobile application that presents all the HR management related features for a company of any scale. I worked as the Senior Mobile Application developer for this project which was downloaded across 10K+ users around the world."
            slug="banty"
            icon="moonbeam"
            colSpan={2}
            tags={["React Native", "Android", "iOS", "REST", "Jest", "PHP", "Symfony", "MySQL"]}
          />
          <ProjectCard
            title="OrangeHRM Enterprise"
            description="Full-stack development experience by contributing to the world's most popular HRIS."
            slug="test-three"
            icon="algochurn"
            tags={["Angular", "PHP", "Symfony", "MySQL", "PHPUnit"]}
          />
          <ProjectCard
            title="Livepin"
            description="A way to interact for remote teams in their cooperate work."
            slug="test-three"
            icon="algochurn"
            tags={["React", "Agora", "AWS Lambda", "Serverless", "WebRTC"]}
          />
          <ProjectCard
            title="Manipulation Detection in Stock Trading"
            description="Final year research project. A machine learning-aided model to detect anomalies in stock trading data featuring graphical analysis."
            slug="test-three"
            icon="algochurn"
            colSpan={2}
            tags={["Python", "Machine Learning", "Flask"]}
          />
        </div>

        {/* 🎶 A music streaming website (like spotify) built using PHP, HTML/CSS, AJAX, JS, jQuery, JSON, mySQL and more. */}
        {/* <Contact /> */}
      </div>
    </Container>
  );
}
