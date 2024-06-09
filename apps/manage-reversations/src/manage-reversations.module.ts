import { Module } from '@nestjs/common';
import { ManageReversationsController } from './manage-reversations.controller';
import { ManageReversationsService } from './manage-reversations.service';

@Module({
  imports: [],
  controllers: [ManageReversationsController],
  providers: [ManageReversationsService],
})
export class ManageReversationsModule {}
