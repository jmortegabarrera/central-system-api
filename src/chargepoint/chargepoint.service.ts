import { Injectable } from '@nestjs/common';
import { OrganizationService } from '../organization/organization.service';
import { CreateChargePointDto } from './dto/create-chargepoint.dto';
import { UpdateChargePointDto } from './dto/update-chargepoint.dto';
import { ChargePointEntity } from './entities/chargepoint.entity';
import { ChargePointRepository } from './repository/chargepoint.repository';

@Injectable()
export class ChargePointService {
  constructor(
    private readonly organizationService: OrganizationService,
    private readonly chargePointRepository: ChargePointRepository
  ) { }

  async create(createChargePointDto: CreateChargePointDto) {
    const chargePoint = new ChargePointEntity();
    chargePoint.name = createChargePointDto.name;
    if (!createChargePointDto.cpo) {
      return false;
    }
    chargePoint.cpo = await this.organizationService.findOne(createChargePointDto.cpo);

    return await this.chargePointRepository.save(chargePoint);
  }

  async findAll(organizationId: string) {
    return await this.chargePointRepository.findAllByOrganization(organizationId);
  }

  async findOne(id: string) {
    return await this.chargePointRepository.findOne(id);
  }

  async update(updateChargepointDto: UpdateChargePointDto) {
    const chargePoint = await this.findOne(updateChargepointDto.id);
    chargePoint.name = updateChargepointDto.name;
    chargePoint.cpo = await this.organizationService.findOne(updateChargepointDto.id);

    return await chargePoint.save();
  }

  async remove(id: string) {
    const chargePoint = await this.chargePointRepository.findOneOrFail(id);

    return await this.chargePointRepository.remove(chargePoint);
  }
}
