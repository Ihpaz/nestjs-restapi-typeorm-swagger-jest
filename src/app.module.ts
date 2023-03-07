import { Module } from '@nestjs/common';

import { BooksModule } from './books/books.module';
import { DatabaseModule } from './config/database/database.module';


@Module({
  
  imports: [
    BooksModule,
    DatabaseModule,
  ]
})
export class AppModule {}
