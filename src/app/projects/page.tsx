"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projectsData, type ProjectDomain } from "@/lib/projectsData";
import { Sparkles, Layers, Terminal, Cpu, Database } from "lucide-react";

type FilterType = "all" | ProjectDomain;

const filters: { id: FilterType; name: string }[] = [
  { id: "all", name: "All Projects" },
  { id: "data-analytics", name: "Data Analytics" },
  { id: "business-intelligence", name: "Business Intelligence" },
  { id: "machine-learning", name: "Machine Learning" },
  { id: "software-systems", name: "Software & Systems" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.domain === activeFilter;
  });

  const tier1Projects = projectsData.filter((p) => p.tier === 1);
  const tier2Projects = projectsData.filter((p) => p.tier === 2);
  const tier3Projects = projectsData.filter((p) => p.tier === 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
          Portfolio Catalog
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Data Analytics &amp; Intelligent Systems
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          Selected projects across data analytics, business intelligence, machine learning, and software-enabled solutions.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-2 mb-16">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
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

      {/* When "all" is active, render with clear Tier visual hierarchy */}
      {activeFilter === "all" ? (
        <div className="space-y-20">
          {/* TIER 1 SECTION */}
          <div>
            <div className="mb-8 border-b border-border pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-500 uppercase tracking-wider">
                  Tier 1 — Core Specialization
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  Data Analytics &amp; Business Intelligence
                </h2>
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Featured predictive modeling &amp; interactive BI dashboards
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {tier1Projects.map((project, idx) => (
                <ProjectCard key={project.slug} project={project} index={idx} />
              ))}
            </div>
          </div>

          {/* TIER 2 SECTION */}
          <div>
            <div className="mb-8 border-b border-border pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-bold text-violet-500 uppercase tracking-wider">
                  Tier 2 — Decision Analytics
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  AI &amp; Decision Support Systems
                </h2>
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Semantic retrieval &amp; multi-criteria decision modeling
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {tier2Projects.map((project, idx) => (
                <ProjectCard key={project.slug} project={project} index={idx + 4} />
              ))}
            </div>
          </div>

          {/* TIER 3 SECTION */}
          <div>
            <div className="mb-8 border-b border-border pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Tier 3 — Supporting Capabilities
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  Software &amp; Systems Engineering
                </h2>
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Full-stack implementations that operationalize data workflows
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {tier3Projects.map((project, idx) => (
                <ProjectCard key={project.slug} project={project} index={idx + 5} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Filtered Grid */
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 border border-dashed border-border rounded-3xl bg-card">
          <p className="text-sm text-muted-foreground">No projects found in this domain filter.</p>
        </div>
      )}
    </div>
  );
}
