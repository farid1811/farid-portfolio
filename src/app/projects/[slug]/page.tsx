import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData, getLocalized } from "@/lib/projectsData";
import ProjectCaseStudyClient from "@/components/ProjectCaseStudyClient";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  const desc = getLocalized(project.description, "en");
  return {
    title: `${project.title} — Case Study`,
    description: desc,
    openGraph: {
      title: `${project.title} — Case Study | Muhammad Farid Fitriansyah`,
      description: desc,
      images: project.imageUrl ? [{ url: project.imageUrl }] : undefined,
    },
  };
}

export default function ProjectCaseStudy({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudyClient project={project} />;
}
