import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-array', { nullable: true })
  Author: string[];

  @Column()
  Title: string;

  @Column()
  Ayod: number;

  @Column('simple-array', { nullable: true })
  Tags: string[];

  @Column()
  Publisher: string;

}
