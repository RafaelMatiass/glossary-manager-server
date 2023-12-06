import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Controller('glossary')
export class GlossaryController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.glossary.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.glossary.findUnique({ where: { id } });
  }

  @Post()
  async create(
    @Body() data: { name: string; description: string; courseId: string },
  ) {
    return this.prisma.glossary.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body()
    data: {
      name?: string;
      description?: string;
      courseId?: string;
    },
  ) {
    return this.prisma.glossary.update({ where: { id }, data });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prisma.glossary.delete({ where: { id } });
  }
}
