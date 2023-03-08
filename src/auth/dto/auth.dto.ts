import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class AuthDTO {
   
    @ApiProperty({
        description:"Input valid Email",
        example:"yesyasrps@gmail.com"
    })
    @IsEmail()
    Email: string;

    @ApiProperty({
        description:"Input strong password ",
        example:"Abc123456!"

    })
    @IsString()
    @IsStrongPassword()
    Password: string;


}