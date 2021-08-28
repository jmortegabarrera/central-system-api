import { EntityRepository, Repository } from "typeorm";
import { OrganizationEntity } from '../entities/organization.entity';

@EntityRepository(OrganizationEntity)
export class OrganizationRepository extends Repository<OrganizationEntity> {

}