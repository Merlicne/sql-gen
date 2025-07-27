
import type { Session } from "../model/session";


function getSessions(): Session[] {
    if (typeof window === "undefined") {
        return [];
    }

    const sessions = localStorage.getItem("sessions");
    return sessions ? JSON.parse(sessions) : [];
}

function getSession(sessionId: string): Session | null {
    if (typeof window === "undefined") {
        return null;
    }

    const sessions = getSessions();
    const session = sessions.find((s: Session) => s.id === sessionId);
    return session || null;
}

function addSessions(session: Session) {
    updateSession(session);
}

function updateSession(session: Session) {
    if (typeof window === "undefined") {
        return;
    }
    const existingSessions = getSessions();
    const updatedSessions = existingSessions.map((s: Session) =>
        s.id === session.id ? session : s
    );
    localStorage.setItem("sessions", JSON.stringify(updatedSessions));
}

function clearSessions() {
    if (typeof window === "undefined") {
        return;
    }
    localStorage.removeItem("sessions");
}

function removeSession(sessionId: string) {
    if (typeof window === "undefined") {
        return;
    }

    const sessions = getSessions();
    const updatedSessions = sessions.filter((session: Session) => session.id !== sessionId);
    localStorage.setItem("sessions", JSON.stringify(updatedSessions));
}

export {
    type Session,
    getSessions,
    getSession,
    addSessions,
    clearSessions,
    removeSession
};