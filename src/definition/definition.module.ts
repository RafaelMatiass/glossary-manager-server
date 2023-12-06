import { Module } from '@nestjs/common';
import { DefinitionController } from './definition.controller';

@Module({
  controllers: [DefinitionController],
})
export class DefinitionModule {}
