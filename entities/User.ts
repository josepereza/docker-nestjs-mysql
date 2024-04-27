import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './Post';

@Entity('user', { schema: 'postuser' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'username', length: 255 })
  username: string;

  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @Column('varchar', { name: 'firstName', nullable: true, length: 255 })
  firstName: string | null;

  @Column('varchar', { name: 'lastName', nullable: true, length: 255 })
  lastName: string | null;

  @Column('tinyint', { name: 'isActive', default: () => "'1'" })
  isActive: number;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
