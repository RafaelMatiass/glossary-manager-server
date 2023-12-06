import { Module } from '@nestjs/common';
import { SourceAuthorshipController } from './source-authotship.controller';

@Module({
  controllers: [SourceAuthorshipController],
})
export class SourceAuthorshipModule {}
