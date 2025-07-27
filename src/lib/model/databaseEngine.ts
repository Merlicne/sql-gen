import type { Query } from "./query";


export interface DatabaseEngine {
    id: string;
    name: string;
    logo: string | null; // URL to the logo image
    querys: Query[];
    createdAt: Date;
}
