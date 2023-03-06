import {IsArray, IsNotEmpty, IsNumber, isObject, IsString} from "class-validator";

export class DatatableDTO {
    @IsNumber()
    take?: number=10;

    @IsNumber()
    skip?: number=0;

    orderBy: { 
    };

    where: {
    };
}
