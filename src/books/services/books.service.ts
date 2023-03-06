import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookDto } from '../dto/book.dto';
import { DatatableDTO } from '../dto/datatable.dto';
import { Book } from '../entities/book.entity';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ){}
  
 async create(dto: BookDto) {
    await this.bookRepository.save(dto)
    return dto;
  }

  async findAll(dto:DatatableDTO) {
    const [data, total]= await this.bookRepository.findAndCount(dto);

    return {
      data: data,
      count: total
    };

  }

  async findOne(id: number) {
    const data= await this.bookRepository.findOneByOrFail({
      id:id,
    })

    return data;
  }

 async update(id: number, dto: BookDto) {
    //throw error when not exist
    await this.findOne(id)

    const data= await this.bookRepository.update({id:id},dto)
    return data;
  }

  async remove(id: number) {
   //throw error when not exist
   await this.findOne(id)
   await this.bookRepository.delete(id);
  }
}
