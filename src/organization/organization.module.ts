import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationEntity } from './entities/organization.entity';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { OrganizationRepository } from './repository/organization.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationEntity, OrganizationRepository])],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationRepository]
})
export class OrganizationModule { }
