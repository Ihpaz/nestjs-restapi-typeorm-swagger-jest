import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  Author: string;

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
  @Column('simple-array', { nullable: true })
  Publisher: string[];

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date; // Creation date

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date; // Last updated date

}
