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

@Controller('definition')
export class DefinitionController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.definition.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {  // Alterado para 'number'
    return this.prisma.definition.findUnique({ where: { id } });
  }

  @Post()
  async create(
    @Body()
    data: {
      definitionDescription: string;
      page: string;
      sourceId: number;  // Alterado para 'number'
    },
  ) {
    return this.prisma.definition.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,  // Alterado para 'number'
    @Body()
    data: {
      definitionDescription?: string;
      termId?: number;  // Alterado para 'number'
      sourceId?: number;  // Alterado para 'number'
    },
  ) {
    return this.prisma.definition.update({ where: { id }, data });
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {  // Alterado para 'number'
    return this.prisma.definition.delete({ where: { id } });
  }
}
