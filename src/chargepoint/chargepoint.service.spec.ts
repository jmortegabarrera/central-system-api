import { Test, TestingModule } from '@nestjs/testing';
import { ChargepointService } from './chargepoint.service';

describe('ChargepointService', () => {
  let service: ChargepointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargepointService],
    }).compile();

    service = module.get<ChargepointService>(ChargepointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
