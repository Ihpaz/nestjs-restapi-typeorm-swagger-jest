import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../config/database/database.module';
import { AuthModule } from '../auth/auth.module';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';

describe('BooksService', () => {
  let service: BooksService;

  

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
});
