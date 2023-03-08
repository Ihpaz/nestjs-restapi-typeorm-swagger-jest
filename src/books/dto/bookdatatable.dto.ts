import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmpty, IsIn, IsInt, IsOptional, Max, ValidateNested} from "class-validator";
import { Transform } from 'class-transformer';
import { BookFilter, BookOrderBy } from "./book.dto";
import { empty } from "rxjs";
import { Book } from "../entities/book.entity";

export class BookDatatableDTO {
    
    @ApiPropertyOptional({
        description: 'Limit data to show',
        default: 10,
        maximum:100,
    })
    @Transform(({ value }) => parseInt(value))
    @IsOptional()
    @IsInt()
    @Max(100)
    take: number;

    @Transform(({ value }) => parseInt(value))
    @ApiPropertyOptional({
        description: 'Start at number of row',
        default: 0,
        minimum:0,
    })
    skip: number;

    @ApiPropertyOptional({
        description: 'Order By Field',
        default: ''
    })
    @ValidateNested()
    orderBy: BookOrderBy;


    @ApiPropertyOptional({
        description: 'Field to filter',
        default: ''
    })
    @IsOptional()
    Filter:BookFilter;

}

export class ResponseBookDatatable {
    @ApiProperty()
    data:Book;

    @ApiProperty()
    count:number;

    @ApiProperty()
    limit:number;

    @ApiProperty()
    skip:number;
}






