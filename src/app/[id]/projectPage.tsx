"use client"
import { EngineList } from "@/components/custom/engineList";
import { getProject } from "@/lib/localStorage/project";
import type { DatabaseEngine } from "@/lib/model/databaseEngine";
import { redirect} from "next/navigation";
import React from "react";

export default function ProjectPage({ id, engines }: {id: string, engines: DatabaseEngine[]}) {
  const project = getProject(id);
  const urlPrefix = `/${project?.id}`;
  if (!project) {
    redirect("/");
  }
  


  return (
    <main className="flex min-h-screen flex-col items-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          Choose your <span className="bg-gradient-to-l from-[#000088] to-teal-500 text-transparent bg-clip-text">Database</span>
        </h1>
        <p className="text-lg text-black">Project ID: {project.id}</p>
        <EngineList urlPrefix={urlPrefix} engines={engines}/>
      </div>
    </main>
  );
}
