import { Entity, Column, ManyToOne } from 'typeorm';
import { LifeLog } from './common/LifeLog';
import { Corporation } from './Corporation';

@Entity()
export class User extends LifeLog {
  @Column({
    length: 100,
    nullable: true,
  })
  affiliate!: string;

  @Column({
    default: true,
  })
  isEnabled!: boolean;

  @Column({
    nullable: true,
  })
  lastLoginDt!: Date;

  @Column({
    length: 20,
  })
  name!: string;

  @Column({
    length: 1000,
  })
  password!: string;

  @Column({
    nullable: true,
    length: 13,
  })
  phoneNo!: string;

  @Column({
    length: 1,
  })
  role!: string;

  @Column({
    length: 20,
  })
  userId!: string;

  @ManyToOne(
    () => Corporation,
    corporation => corporation.users,
    { nullable: false }
  )
  corporation!: Promise<Corporation>;
}
