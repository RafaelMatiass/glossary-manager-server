import { Module } from '@nestjs/common';
import { TermController } from './term.controller';

@Module({
  controllers: [TermController],
})
export class TermModule {}
