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

// Definition
// Id, Idterm, textodefinition
// Id da fonte bibliografica

@Controller('term')
export class TermController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.term.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.term.findUnique({ where: { id } });
  }

  @Get('/name/:name')
  async findByName(@Param('name') name: string) {
    const term = await this.prisma.term.findFirst({
      where: { name: name },
    });

    return term;
  }

  @Post()
  async create(
    @Body()
    data: {
      name: string;
    },
  ) {
    return await this.prisma.term.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body()
    data: {
      name?: string;
    },
  ) {
    return this.prisma.term.update({ where: { id }, data });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prisma.term.delete({ where: { id } });
  }
}
