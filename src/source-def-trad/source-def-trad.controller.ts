import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Controller('source-def-trad')
export class SourceDefTradController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.source.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') sourceId: number) {  // Alterado para 'number'
    return this.prisma.source.findUnique({ where: { id: sourceId } });
  }

  @Post()
  async create(
    @Body()
    data: {
      title: string;
      publisher: string;
      type_publication: string;
      year: number;  // Alterado para 'number'
    },
  ) {
    return await this.prisma.source.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') sourceId: number,  // Alterado para 'number'
    @Body()
    data: {
      title?: string;
      publisher?: string;
      type_publication?: string;
      year?: number;  // Alterado para 'number'
    },
  ) {
    return this.prisma.source.update({ where: { id: sourceId }, data });
  }

  @Delete(':id')
  async remove(@Param('id') sourceId: number) {  // Alterado para 'number'
    return this.prisma.source.delete({ where: { id: sourceId } });
  }
}
