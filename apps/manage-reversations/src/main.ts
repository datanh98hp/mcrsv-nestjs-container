import { NestFactory } from '@nestjs/core';
import { ManageReversationsModule } from './manage-reversations.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ManageReversationsModule);
  Logger.log('Manage-reversations services listening on port 3002');
  await app.listen(3002);
}
bootstrap();
