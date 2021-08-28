import { Injectable } from '@nestjs/common';
import { CreateChargepointDto } from './dto/create-chargepoint.dto';
import { UpdateChargepointDto } from './dto/update-chargepoint.dto';

@Injectable()
export class ChargepointService {
  create(createChargepointDto: CreateChargepointDto) {
    return 'This action adds a new chargepoint';
  }

  findAll() {
    return `This action returns all chargepoint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chargepoint`;
  }

  update(id: number, updateChargepointDto: UpdateChargepointDto) {
    return `This action updates a #${id} chargepoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} chargepoint`;
  }
}
