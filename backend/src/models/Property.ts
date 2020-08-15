import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import User from './User';

@Entity('properties')
class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column()
  number: string;

  @Column()
  type: 'Venda' | 'Aluguel';

  @Column()
  uf: string;

  @Column()
  city: string;

  @Column()
  value: number;

  @Column()
  property_image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;
}

export default Property;
