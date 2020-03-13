import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Base } from './Base';

export abstract class LifeLog extends Base {
  @CreateDateColumn()
  readonly createdAt!: string;

  @Column({ nullable: true })
  createdBy!: number;

  @UpdateDateColumn()
  readonly updatedAt!: string;

  @Column({ nullable: true })
  updatedBy!: number;
}
