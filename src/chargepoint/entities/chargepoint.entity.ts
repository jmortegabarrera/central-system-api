import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrganizationEntity } from '../../organization/entities/organization.entity';

@Entity()
export class ChargePointEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => OrganizationEntity)
  cpo: ChargePointEntity;
}
