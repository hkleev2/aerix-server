import { DeleteDateColumn } from 'typeorm';
import { LifeLog } from './LifeLog';

export abstract class Paranoid extends LifeLog {
  @DeleteDateColumn()
  readonly deletedAt!: Date;
}
