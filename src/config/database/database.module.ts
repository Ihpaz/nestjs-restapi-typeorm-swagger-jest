import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//use env for production
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => {
                return {
                    type: 'mssql',
                    host:'localhost',
                    port: 3306,
                    username: 'root',
                    password: 'root',
                    database: 'mengajionline',
                    keepConnectionAlive: true,
                    entities: [__dirname + '/../../books/entities/*{.ts,.js}'],
                   
                };
            },
        }),
    ],
})

export class DatabaseModule { }
