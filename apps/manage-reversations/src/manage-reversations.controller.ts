import { Controller, Get } from '@nestjs/common';
import { ManageReversationsService } from './manage-reversations.service';

@Controller()
export class ManageReversationsController {
  constructor(private readonly manageReversationsService: ManageReversationsService) {}

  @Get()
  getHello(): string {
    return this.manageReversationsService.getHello();
  }
}
