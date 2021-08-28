import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrganizationEntity } from '../../organization/entities/organization.entity';

@Entity()
export class ChargePointEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => OrganizationEntity, { onDelete: 'CASCADE' })
  cpo: OrganizationEntity;
}
