import { ApiProperty } from "@nestjs/swagger";
import {IsArray, IsNumber, IsString} from "class-validator";
export class BookDto {
    @ApiProperty()
    @IsArray()
    Author:string[];

    @ApiProperty()
    @IsString()
    Title:string;

    @ApiProperty()
    @IsNumber()
    Ayod:number;

    @ApiProperty()
    @IsArray()
    Tags:string[];

    @ApiProperty()
    @IsString()
    Publisher:string;



}
