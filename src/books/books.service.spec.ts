import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../config/database/database.module';
import { AuthModule } from '../auth/auth.module';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { BookDto } from './dto/book.dto';
import { BookDatatableDTO } from './dto/bookdatatable.dto';
import { arrayBuffer } from 'stream/consumers';
import { async } from 'rxjs';
import { NotFoundException } from '@nestjs/common';

describe('BooksService', () => {
  let service: BooksService;
  let id:number=1;
  let BookDto:BookDto= {
    Author: "Ihpaz",
    Title: "Fiqih",
    Ayod: 1289,
    Tags: [
      "FiQIH",
      "Sunnah"
    ],
    Publisher: ["Pustaka Sunnah","Syiar"]
  }

  let BookDatatable:any={ 
    take: 0, 
    skip: 0 ,
    OrderByAuthor:'DESC',
  }  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[ 
      DatabaseModule,
      TypeOrmModule.forFeature([Book]),
      AuthModule],
      providers: [BooksService],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be created book', async () => {
        const data=await service.create(BookDto);
        id=data['id'];
        expect(data).toMatchObject(BookDto)
  });


  it('should be get pagination book', async () => {
    const param:BookDatatableDTO=BookDatatable;
    const data=await service.findAll(param);
    expect(data).toHaveProperty('data')
    expect(data).toHaveProperty('limit')
    expect(data).toHaveProperty('skip')
    expect(data).toHaveProperty('count')
  });


  it('should be get detail book', async () => {
      const data=await service.findOne(id);
      expect(data).toMatchObject(BookDto)
  });


  it('should be updated book', async () => {
    BookDto.Author='Muhamad Ihpaz Ramadhan';
    const data=await service.update(id,BookDto);
    expect(data).toHaveProperty('Author','Muhamad Ihpaz Ramadhan')
  });

  it('should be deleted book and not found', async () => {
    const data=await service.remove(id);
    expect(data).toHaveProperty('message','deleted successfully')
    await expect(service.findOne(id)).rejects.toThrowError(NotFoundException)
  });

  
});
