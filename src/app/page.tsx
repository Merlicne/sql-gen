"use client"
import { getProjects, addProject, clearProjects } from "@/lib/localStorage/project";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ProjectList } from "@/components/custom/projectList";

export default function HomePage() {
  const [projectName, setProjectName] = useState("");
  const router = useRouter();

  const projects = getProjects();
  const hasProjects = projects.length > 0;

  const handleCreateProject = () => {
    if (projectName.trim() === "") {
      alert("Project name cannot be empty.");
      return;
    }

    const newProject = {
      id: projectName,
      name: projectName,
      engines: [],
      createdAt: new Date(),
    };

    addProject(newProject);
    setProjectName("");
    router.push(`/${newProject.id}`);
  };

  const handleClearProjects = () => {
    if (confirm("Are you sure you want to clear all projects?")) {
      clearProjects();
      router.refresh();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          SQL <span className="bg-gradient-to-l from-[#000088] to-teal-500 text-transparent bg-clip-text">GEN</span>
        </h1>

        {!hasProjects ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-black">Welcome! Create your first project to get started.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCreateProject();
                  }
                }}
              />
              <Button onClick={handleCreateProject}>Create Project</Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-black justify-center items-center">Your Projects</h2>
            <ProjectList projects={projects} onClearProjects={handleClearProjects} />
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="text"
                placeholder="New Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCreateProject();
                  }
                }}
              />
              <Button onClick={handleCreateProject}>Create New Project</Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
