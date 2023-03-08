import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import {  BookDatatableDTO, ResponseBookDatatable } from './dto/bookdatatable.dto';
import { Book } from './entities/book.entity';

@ApiTags('Books')
@Controller('api/v1/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  
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



 
  @Get()
  @ApiOkResponse({
    type:ResponseBookDatatable
  })
  findAll(@Query() query: BookDatatableDTO) {
    return this.booksService.findAll(query);
  }


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


  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.booksService.remove(id);
  }
}
