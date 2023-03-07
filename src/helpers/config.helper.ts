import * as dotenv from 'dotenv';
dotenv.config();

export class Config {
    static get(key: string): string {
        return process.env[key];
    }

   
}
