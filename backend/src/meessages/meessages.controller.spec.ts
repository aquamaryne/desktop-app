import { Test, TestingModule } from '@nestjs/testing';
import { MeessagesController } from './meessages.controller';

describe('MeessagesController', () => {
  let controller: MeessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeessagesController],
    }).compile();

    controller = module.get<MeessagesController>(MeessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
