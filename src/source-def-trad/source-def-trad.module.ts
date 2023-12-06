import { Module } from '@nestjs/common';
import { SourceDefTradController } from './source-def-trad.controller';

@Module({
  controllers: [SourceDefTradController],
})
export class SourceModule {}
