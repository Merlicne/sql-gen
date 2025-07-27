
import type { Project } from "../model/project";


function getProjects(): Project[] {
    if (typeof window === "undefined") {
        return [];
    }

    const projectsData = localStorage.getItem("projects");
    if (!projectsData) {
        return [];
    }
    const projects: Project[] = JSON.parse(projectsData) as Project[];
    return projects;
}

function getProject(projectId: string): Project | null {
    if (typeof window === "undefined") {
        return null;
    }

    const projects = getProjects();
    console.log(projects)
    const project = projects.find((s: Project) => s.id === projectId);
    return project ?? null;
}

function addProject(project: Project) {
    if (typeof window === "undefined") {
        return;
    }
    const existingProject = getProjects();
    const updatedProject = [...existingProject, project];
    localStorage.setItem("projects", JSON.stringify(updatedProject));
}

function updateProject(project: Project) {
    if (typeof window === "undefined") {
        return;
    }
    const existingProjects = getProjects();
    const updatedProjects = existingProjects.map((s: Project) =>
        s.id === project.id ? project : s
    );
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
}

function clearProjects() {
    if (typeof window === "undefined") {
        return;
    }
    localStorage.removeItem("projects");
}

function removeProject(projectId: string) {
    if (typeof window === "undefined") {
        return;
    }

    const projects = getProjects();
    const updatedProjects = projects.filter((project: Project) => project.id !== projectId);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
}

export {
    type Project,
    getProjects,
    getProject,
    addProject,
    updateProject,
    clearProjects,
    removeProject
};