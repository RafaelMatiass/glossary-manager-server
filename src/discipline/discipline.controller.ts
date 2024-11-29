import {
  BadRequestException,
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
  // Trazer todas as disciplinas de um curso ou glossário específico (Informática, Mecânica)

  @Get(':id')
  async findOne(@Param('id') id: string) { 
    const numericId = parseInt(id, 10); // Converter o id para número
    if (isNaN(numericId)) {
      throw new BadRequestException('O ID fornecido não é um número válido.');
    }

    return this.prisma.discipline.findUnique({
      where: {
        id: numericId, 
      },
    });
  }

  @Get('/glossary/:glossaryId')
  async findByGlossaryId(@Param('glossaryId') glossaryId: number) {  // Alterado para 'number'
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
      year: number;  // Alterado para 'number'
      glossaryId: number;  // Alterado para 'number'
    },
  ) {
    return this.prisma.discipline.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,  // Alterado para 'number'
    @Body()
    data: {
      name?: string;
      description?: string;
      year?: number;  // Alterado para 'number'
      glossaryId?: number;  // Alterado para 'number'
    },
  ) {
    return this.prisma.discipline.update({ where: { id }, data });
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {  // Alterado para 'number'
    return this.prisma.discipline.delete({ where: { id } });
  }
}
