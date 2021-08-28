import { EntityRepository, Repository } from "typeorm";
import { ChargePointEntity } from '../entities/chargepoint.entity';

@EntityRepository(ChargePointEntity)
export class ChargePointRepository extends Repository<ChargePointEntity> {
  async findAllByOrganization(id: string): Promise<ChargePointEntity[]> {
    return this
      .createQueryBuilder('chargepoint')
      .where('cpoId = :cpo', { cpo: id })
      .getMany();
  }
}