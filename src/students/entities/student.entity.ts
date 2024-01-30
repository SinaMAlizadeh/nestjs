import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// it tells TypeORM that this is an entity
@Entity()
export class Student {
  // a primary column which value will be automatically generated
  // with an auto-increment value
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string; // firstName column with type varchar

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  address: string;
}
