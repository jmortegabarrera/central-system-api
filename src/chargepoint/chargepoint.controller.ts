import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChargepointService } from './chargepoint.service';
import { CreateChargepointDto } from './dto/create-chargepoint.dto';
import { UpdateChargepointDto } from './dto/update-chargepoint.dto';

@Controller('chargepoint')
export class ChargepointController {
  constructor(private readonly chargepointService: ChargepointService) {}

  @Post()
  create(@Body() createChargepointDto: CreateChargepointDto) {
    return this.chargepointService.create(createChargepointDto);
  }

  @Get()
  findAll() {
    return this.chargepointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chargepointService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChargepointDto: UpdateChargepointDto) {
    return this.chargepointService.update(+id, updateChargepointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chargepointService.remove(+id);
  }
}
