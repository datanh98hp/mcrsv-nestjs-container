import { Test, TestingModule } from '@nestjs/testing';
import { ManageReversationsController } from './manage-reversations.controller';
import { ManageReversationsService } from './manage-reversations.service';

describe('ManageReversationsController', () => {
  let manageReversationsController: ManageReversationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ManageReversationsController],
      providers: [ManageReversationsService],
    }).compile();

    manageReversationsController = app.get<ManageReversationsController>(ManageReversationsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(manageReversationsController.getHello()).toBe('Hello World!');
    });
  });
});
