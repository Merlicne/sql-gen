
import type { DatabaseEngine } from "../model/databaseEngine";
import type { Project } from "../model/project";

function getDatabaseEngineData(project: Project, name: string): DatabaseEngine | null {
    if (!project || !name) {
        return null;
    }
    const engine = project.engines.find((engine) => engine.name === name);
    return engine || null;
}

function updateDatabaseEngine(project: Project, engine: DatabaseEngine): Project {
    if (!project || !engine) {
        return project;
    }
    const updatedEngines = project.engines.map((e) =>
        e.id === engine.id ? { ...e, ...engine } : e
    );
    return { ...project, engines: updatedEngines };
}

function addDatabaseEngine(project: Project, engine: DatabaseEngine): Project {
    if (!project || !engine) {
        return project;
    }
    return { ...project, engines: [...project.engines, engine] };
}

function removeDatabaseEngine(project: Project, name: string): Project {
    if (!project || !name) {
        return project;
    }
    const updatedEngines = project.engines.filter((e) => e.name !== name);
    return { ...project, engines: updatedEngatedEngines };
}