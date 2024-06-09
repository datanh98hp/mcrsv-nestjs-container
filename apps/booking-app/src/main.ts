import { NestFactory } from '@nestjs/core';
import { BookingAppModule } from './booking-app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(BookingAppModule);
  Logger.log('Manage-reversations services listening on port 3001');
  await app.listen(3001);
}
bootstrap();
