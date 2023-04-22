import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../configrations/database/abstract.entity';

@Entity('settings')
export class Settings extends AbstractEntity {
  @Column({ type: 'varchar', length: 50, nullable: true })
  title: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  logo: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  ico: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  keywords: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  companyName: string;
}
