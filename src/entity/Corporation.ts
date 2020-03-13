import { Entity, Column, OneToMany } from 'typeorm';
import { Paranoid } from './common/Paranoid';
import { User } from './User';

@Entity()
export class Corporation extends Paranoid {
  @Column({
    nullable: true,
    length: 500,
  })
  address!: string;

  @Column({
    nullable: true,
    length: 10,
  })
  businessNo!: string;

  @Column({
    nullable: true,
    length: 10,
  })
  ceo!: string;

  @Column({
    nullable: true,
    length: 100,
  })
  detail!: string;

  @Column({
    nullable: true,
    length: 200,
  })
  homepage!: string;

  @Column({
    length: 100,
  })
  name!: string;

  @Column({
    nullable: true,
    length: 14,
  })
  telephone!: string;

  @Column({
    default: true,
  })
  isEnabled!: boolean;

  @OneToMany(
    () => User,
    user => user.corporation
  )
  users?: Promise<User[]>;
}
