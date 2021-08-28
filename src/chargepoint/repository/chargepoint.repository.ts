import { EntityRepository, Repository } from "typeorm";
import { ChargePointEntity } from '../entities/chargepoint.entity';

@EntityRepository(ChargePointEntity)
export class ChargePointRepository extends Repository<ChargePointEntity> {

}