import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Expose } from 'class-transformer';
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

  @Expose({ name: 'property_url' })
  getPropertyURL(): string | null {
    return this.property_image
      ? `http://localhost:3333/files/${this.property_image}`
      : null;
  }
}

export default Property;
