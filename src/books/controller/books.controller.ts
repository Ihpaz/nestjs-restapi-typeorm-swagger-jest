import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { BookDto } from '../dto/book.dto';
import { DatatableDTO } from '../dto/datatable.dto';

@Controller('api/v1/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() dto: BookDto) {
    return this.booksService.create(dto);
  }

  @Get()
  findAll(dto:DatatableDTO) {
    return this.booksService.findAll(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: BookDto) {
    return this.booksService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
