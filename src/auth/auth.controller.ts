import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    @ApiBadRequestResponse({    
      description: 'Bad Request',
      schema:{
        type:'object',
        example:{
          
            statusCode: 400,
            message: [
              "Publisher should not be empty",
              "Publisher must be a string"
            ],
            error: "Bad Request"
          
        }
      }
    })
    @ApiCreatedResponse({
      description: 'Token successfully created.',
      schema:{
        type:'object',
        example:{
            response:'success',
            status:200,
            access_token:'213weasd21'
        }
      },
    })
    create(@Body() dto: AuthDTO) {
      return this.authService.generateToken(dto);
    }
}
