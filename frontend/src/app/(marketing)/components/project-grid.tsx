// components/ProjectGrid.js
import React from "react";
import Link from "next/link";
import projectsData from "../data/projectsData";

export default function ProjectGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project: any) => (
        <Link key={project.id} href={`/projects/${project.slug}`}>
          <div className="group relative cursor-pointer">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <h2 className="text-white text-xl font-semibold">
                {project.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
