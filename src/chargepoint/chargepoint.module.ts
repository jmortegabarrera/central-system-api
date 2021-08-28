import { Module } from '@nestjs/common';
import { ChargepointService } from './chargepoint.service';
import { ChargepointController } from './chargepoint.controller';

@Module({
  controllers: [ChargepointController],
  providers: [ChargepointService]
})
export class ChargepointModule {}
