import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChargePointService } from './chargepoint.service';
import { CreateChargePointDto } from './dto/create-chargepoint.dto';
import { UpdateChargePointDto } from './dto/update-chargepoint.dto';

@Controller('chargepoint')
export class ChargePointController {
  constructor(
    private readonly chargePointService: ChargePointService,
  ) { }

  @Post()
  async create(@Body() createChargePointDto: CreateChargePointDto) {

    return this.chargePointService.create(createChargePointDto);
  }

  @Post('getAll')
  findAll(@Body() organizationId: {organizationId: string}) {
    return this.chargePointService.findAll(organizationId.organizationId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chargePointService.findOne(id);
  }

  @Patch('/edit')
  update(@Body() updateChargePointDto: UpdateChargePointDto) {
    return this.chargePointService.update(updateChargePointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chargePointService.remove(id);
  }
}
