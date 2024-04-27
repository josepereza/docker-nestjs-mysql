import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity('post', { schema: 'postuser' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'content', length: 255 })
  content: string;

  @Column('tinyint', { name: 'isActive', default: () => "'1'" })
  isActive: number;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  user: User;
}
