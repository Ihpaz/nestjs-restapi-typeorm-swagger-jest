import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {ArrayNotEmpty, IsArray, IsDefined, IsIn, isIn, IsNotEmpty, IsNotIn, IsNumber, IsString, MaxLength} from "class-validator";
export class BookDto {
    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    Author:string[];

    @ApiProperty({
        maxLength:255
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    Title:string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    Ayod:number;

    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    Tags:string[];

    @ApiProperty({
        maxLength:255
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    Publisher:string;



}


export class BookFilter {
    @ApiPropertyOptional()
    Author:string;

    @ApiPropertyOptional()

    Title:string;

    @ApiPropertyOptional()
    Ayod:number;

    @ApiPropertyOptional()
    Tags:string;

    @ApiPropertyOptional()
    Publisher:string;
}


export class BookOrderBy {
    @ApiPropertyOptional({
        enum:['ASC','DESC']
    })
    OrderByAuthor:string;

    @ApiPropertyOptional({
        enum:['ASC','DESC']
    })
    OrderByTitle:string;

    @ApiPropertyOptional({
        enum:['ASC','DESC']
    })
    OrderByAyod:string;

    @ApiPropertyOptional({
        enum:['ASC','DESC']
    })
    OrderByTags:string;

    @ApiPropertyOptional({
        enum:['ASC','DESC']
    })
    OrderByPublisher:string;



}

function IsRequired() {
    throw new Error("Function not implemented.");
}

