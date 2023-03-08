import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiProperty, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import {  BookDatatableDTO, ResponseBookDatatable } from './dto/bookdatatable.dto';
import { Book } from './entities/book.entity';

@ApiTags('Books')
@Controller('api/v1/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  
  
  @ApiOperation({
    summary:'Create book'
  })
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
    description: 'The record has been successfully created.',
    type: Book,
  })
  create(@Body() dto: BookDto) {
    return this.booksService.create(dto);
  }



   
  @ApiOperation({
    summary:'Get pagination book'
  })
  @Get()
  @ApiOkResponse({
    type:ResponseBookDatatable
  })
  findAll(@Query() query: BookDatatableDTO) {
    return this.booksService.findAll(query);
  }


     
  @ApiOperation({
    summary:'Get 1 detail book'
  })
  @ApiNotFoundResponse({    
    description: 'Book was Not Found',
    schema:{
      type:'object',
      example:{
        statusCode:404,
        message:"Not Found"
      }
    }
  })
  @ApiOkResponse({
    type:Book
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.booksService.findOne(id);
  }


   
  @ApiOperation({
    summary:'Update book'
  })
  @ApiNotFoundResponse({    
    description: 'Book was Not Found',
    schema:{
      type:'object',
      example:{
        statusCode:404,
        message:"Not Found"
      }
    }
  })
  @ApiOkResponse({
    type:Book
  })
  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: BookDto) {
    return this.booksService.update(id, dto);
  }




  @ApiOperation({
    summary:'Delete book, fisrt fill authorizations with token, to get token example, you can generate Auth Api'
  })
  @ApiNotFoundResponse({    
    description: 'Book was Not Found',
    schema:{
      type:'object',
      example:{
        statusCode:404,
        message:"Not Found"
      }
    }
  })
  @ApiUnauthorizedResponse({    
    description: 'Unauthorized',
    schema:{
      type:'object',
      example:{
        statusCode:401,
        message:"Unauthorized"
      }
    }
  })
  @ApiOkResponse({
    schema:{
      type:'object',
      example:{
        message:'deleted successfully'
      }
    }
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.booksService.remove(id);
  }
}
