import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('simple-array', { nullable: true })
  Author: string[];

  @ApiProperty()
  @Column()
  Title: string;

  @ApiProperty()
  @Column()
  Ayod: number;

  @ApiProperty()
  @Column('simple-array', { nullable: true })
  Tags: string[];
  
  @ApiProperty()
  @Column()
  Publisher: string;

}
