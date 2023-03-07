import { ApiProperty } from "@nestjs/swagger";
import {IsArray, IsNotEmpty, IsNumber, isObject, IsOptional, IsString, Max} from "class-validator";

export class DatatableDTO {
    
    @ApiProperty({
        description: 'Limit data to show',
        minimum: 1,
        maximum:100,
        default: 10
    })
    @IsOptional()
    @Max(100)
    take: number=10;

    @ApiProperty({
        description: 'Start at number of row',
        default: 0
    })
    @IsOptional()
    skip: number=0;

    @ApiProperty()
    orderBy: { 
    };

    @ApiProperty()
    where: {
    };
}
