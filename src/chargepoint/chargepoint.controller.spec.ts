import { Test, TestingModule } from '@nestjs/testing';
import { ChargepointController } from './chargepoint.controller';
import { ChargepointService } from './chargepoint.service';

describe('ChargepointController', () => {
  let controller: ChargepointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargepointController],
      providers: [ChargepointService],
    }).compile();

    controller = module.get<ChargepointController>(ChargepointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
