import { Test, TestingModule } from '@nestjs/testing';
import { ChargePointController } from './chargepoint.controller';
import { ChargePointService } from './chargepoint.service';

describe('ChargePointController', () => {
  let controller: ChargePointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargePointController],
      providers: [ChargePointService],
    }).compile();

    controller = module.get<ChargePointController>(ChargePointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
