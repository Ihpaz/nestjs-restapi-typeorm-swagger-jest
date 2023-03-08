import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

import { BooksModule } from './books/books.module';
import { DatabaseModule } from './config/database/database.module';


@Module({
  
  imports: [
    BooksModule,
    DatabaseModule,
    AuthModule
  ]
})
export class AppModule {}
