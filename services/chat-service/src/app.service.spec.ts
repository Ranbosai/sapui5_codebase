import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('returns health message', () => {
    expect(service.getHello()).toBe('AuroraStream chat service operational');
  });
});
