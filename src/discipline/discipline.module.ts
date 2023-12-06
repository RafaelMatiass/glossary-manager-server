import { Module } from '@nestjs/common';
import { DisciplineController } from './discipline.controller';

@Module({
  controllers: [DisciplineController],
})
export class DisciplineModule {}
