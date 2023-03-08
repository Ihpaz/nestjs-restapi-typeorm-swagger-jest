import * as dotenv from 'dotenv';
dotenv.config();

export class Config {
    static get(key: string): string {
        return process.env[key];
    }

    static getNumber(key: string): number {
        return parseInt(process.env[key], 10);
    }

   
}
