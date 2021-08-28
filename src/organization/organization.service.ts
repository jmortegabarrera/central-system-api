import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { OrganizationEntity } from './entities/organization.entity';
import { OrganizationRepository } from './repository/organization.repository';

@Injectable()
export class OrganizationService {

  private organizationRepository: OrganizationRepository;

  constructor(
    private readonly connection: Connection,

  ) {
    this.organizationRepository = this.connection.getCustomRepository(OrganizationRepository);
  }
  async create(createOrganizationDto: CreateOrganizationDto) {
    const organization = new OrganizationEntity();
    organization.name = createOrganizationDto.name;
    organization.legalEntity = createOrganizationDto.legalEntity;

    return await organization.save();
  }

  async findAll() {
    return await this.organizationRepository.find();
  }

  async findOne(id: string) {
    return await this.organizationRepository.findOneOrFail(id);
  }

  async update(updateOrganizationDto: UpdateOrganizationDto) {

    const organization = await this.organizationRepository.findOneOrFail(updateOrganizationDto.id);
    organization.name = updateOrganizationDto.name;

    return await organization.save();
  }

  async remove(id: string) {
    const organization = await this.organizationRepository.findOneOrFail(id);
    
    return await this.organizationRepository.remove(organization);
  }
}
