import type { DatabaseEngine } from "./databaseEngine";

export interface Project {
    id: string;
    name: string;
    engines: DatabaseEngine[];
    createdAt: Date;
}
