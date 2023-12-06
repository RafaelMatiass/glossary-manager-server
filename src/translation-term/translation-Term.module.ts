import { Module } from '@nestjs/common';
import { TranslationTermController } from './translation-term.controller';

@Module({
  controllers: [TranslationTermController],
})
export class TranslationTermModule {}
