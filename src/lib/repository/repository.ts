"use server";
import type { DatabaseEngine } from "../model/databaseEngine";
import fs from "fs";


const logo_support_extension = [".png", ".jpg", ".jpeg", ".svg"];

function getDatabaseEngine(): DatabaseEngine[] {
    //read data directory, return each subdirectory as a database engine
    const dataDir = process.env.DATA_DIR ?? "./data";

    const engines = fs.readdirSync(dataDir).map((name:string) => {
        let logo_path = ""; 
        logo_support_extension.forEach((ext: string) => {
            const searchPath = `./public/logo/${name}${ext}`;
            if(fs.existsSync(searchPath)) {
                logo_path = `/logo/${name}${ext}`;
            }
        });
        return {
            id: name,
            name: name,
            logo: logo_path || null,
            querys: [],
            createdAt: new Date()
        };
    });

    return engines;
}

export { getDatabaseEngine };