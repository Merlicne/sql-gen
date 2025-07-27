import type { DatabaseEngine } from "./databaseEngine";

export interface Session {
    id: string;
    engines: DatabaseEngine[];
    createdAt: Date;
}
