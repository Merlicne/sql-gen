import type { DatabaseEngine } from "../model/databaseEngine";



function getDatabaseEngine(): DatabaseEngine[] {
    //read data directory, return each subdirectory as a database engine
    const fs = require('fs');
    const dataDir = process.env.DATA_DIR || "./data";

    const engines = fs.readdirSync(dataDir).map((name:string) => {
        let logo_support_extension = [".png", ".jpg", ".jpeg", ".svg"];
        let logo_path = ""; 
        logo_support_extension.forEach((ext: string) => {
            let searchPath = `./public/logo/${name}${ext}`;
            if(fs.existsSync(searchPath)) {
                logo_path = `/logo/${name}${ext}`;
            }
        });
        let engine: DatabaseEngine = {
            id: name,
            name: name,
            logo: logo_path || null,
            querys: [],
            createdAt: new Date()
        };
        return engine;
    });

    return engines;
}

export { getDatabaseEngine };