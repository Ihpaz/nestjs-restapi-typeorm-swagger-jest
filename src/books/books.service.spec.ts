import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../config/database/database.module';
import { AuthModule } from '../auth/auth.module';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { BookDto } from './dto/book.dto';

describe('BooksService', () => {
  let service: BooksService;
  let dto:BookDto= {
    "Author": "Ihpaz",
    "Title": "Fiqih",
    "Ayod": 1289,
    "Tags": [
      "FiQIH",
      "Sunnah"
    ],
    "Publisher": "Pustaka Sunnah"
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

  // it('should be error', async () => {
    
  //   try {
  //       await service.create(dto);
  //     } catch (e) {
  //       expect(e.message).toMatch('Function is disable');
  //     }
  // });
});
