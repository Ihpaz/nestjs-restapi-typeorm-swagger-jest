import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { Book } from './entities/book.entity';
import { BooksService } from './books.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    AuthModule
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
