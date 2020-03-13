import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class Base {
  @PrimaryGeneratedColumn()
  readonly id!: number;
}
