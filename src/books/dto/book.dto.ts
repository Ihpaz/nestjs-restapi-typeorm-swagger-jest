import { required } from "yargs";
import {IsArray, IsNumber, IsString} from "class-validator";
export class BookDto {
    
    @IsArray()
    Author:string[];

    @IsString()
    Title:string;

    @IsNumber()
    Ayod:number;

    @IsArray()
    Tags:string[];

    @IsString()
    Publisher:string;



}
