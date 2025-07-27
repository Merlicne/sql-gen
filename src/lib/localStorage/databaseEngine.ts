
import type { DatabaseEngine } from "../model/databaseEngine";
import type { Session } from "../model/session";

function getDatabaseEngineData(session: Session, name: string): DatabaseEngine | null {
    if (!session || !name) {
        return null;
    }
    const engine = session.engines.find((engine) => engine.name === name);
    return engine || null;
}

function updateDatabaseEngine(session: Session, engine: DatabaseEngine): Session {
    if (!session || !engine) {
        return session;
    }
    const updatedEngines = session.engines.map((e) =>
        e.id === engine.id ? { ...e, ...engine } : e
    );
    return { ...session, engines: updatedEngines };
}

function addDatabaseEngine(session: Session, engine: DatabaseEngine): Session {
    if (!session || !engine) {
        return session;
    }
    return { ...session, engines: [...session.engines, engine] };
}

function removeDatabaseEngine(session: Session, name: string): Session {
    if (!session || !name) {
        return session;
    }
    const updatedEngines = session.engines.filter((e) => e.name !== name);
    return { ...session, engines: updatedEngines };
}