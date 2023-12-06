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

@Controller('discipline')
export class DisciplineController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.discipline.findMany();
  }
  // Trazer todas as diciplinas de um curso ou glossário específico(Informática, Mecanica)

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.discipline.findUnique({ where: { id } });
  }

  @Get('/glossary/:glossaryId')
  async findByGlossaryId(@Param('glossaryId') glossaryId: string) {
    const glossary = await this.prisma.glossary.findUnique({
      where: { id: glossaryId },
      include: {
        Discipline: true,
      },
    });

    if (!glossary) {
      throw new Error('Glossário não encontrado');
    }

    return glossary.Discipline;
  }

  @Post()
  async create(
    @Body()
    data: {
      name: string;
      description: string;
      year: string;
      glossaryId: string;
    },
  ) {
    return this.prisma.discipline.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body()
    data: {
      name?: string;
      description?: string;
      year?: string;
      glossaryId?: string;
    },
  ) {
    return this.prisma.discipline.update({ where: { id }, data });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prisma.discipline.delete({ where: { id } });
  }
}
