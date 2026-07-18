"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/lib/projectsData";

type FilterType = "all" | "ai-ml" | "bi-web" | "systems";

const filters: { id: FilterType; name: string }[] = [
  { id: "all", name: "All Projects" },
  { id: "ai-ml", name: "AI / Machine Learning" },
  { id: "bi-web", name: "BI & Full Stack" },
  { id: "systems", name: "Secure Systems" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.domain === activeFilter;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
          Case Studies
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Systems Catalog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          Explore the architecture, metrics, and codebase of four production-ready platforms.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-2 mb-16">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id as FilterType)}
            className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 ${
              activeFilter === filter.id
                ? "bg-primary border-primary text-primary-foreground shadow"
                : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} index={idx} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 border border-dashed border-border rounded-3xl bg-card">
          <p className="text-sm text-muted-foreground">No projects found in this domain filter.</p>
        </div>
      )}
    </div>
  );
}
