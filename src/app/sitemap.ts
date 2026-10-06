import { MetadataRoute } from "next";
import { projectsData } from "@/lib/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://farid-portfolio-woad.vercel.app";

  // Static routes
  const staticRoutes = ["", "/about", "/projects", "/research", "/resume", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic project routes
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.64,
  }));

  return [...staticRoutes, ...projectRoutes];
}
