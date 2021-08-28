import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChargePointController } from './chargepoint.controller';
import { ChargePointService } from './chargepoint.service';
import { ChargePointRepository } from './repository/chargepoint.repository';
import { OrganizationRepository } from '../organization/repository/organization.repository';
import { OrganizationService } from '../organization/organization.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChargePointRepository, OrganizationRepository])],
  controllers: [ChargePointController],
  providers: [ChargePointService, OrganizationService]
})
export class ChargepointModule { }
