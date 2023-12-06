import { Module } from '@nestjs/common';
import { TermDisciplineDefController } from './term-discipline-def.controller';

@Module({
  controllers: [TermDisciplineDefController],
})
export class TermDisciplineDefModule {}
