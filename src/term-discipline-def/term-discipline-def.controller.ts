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

@Controller('term-discipline-def')
export class TermDisciplineDefController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.term_Discipline_Definition.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') Id: string) {
    return this.prisma.term_Discipline_Definition.findUnique({ where: { Id } });
  }

  @Get('/terms/:disciplineId')
  async getTermsByDisciplineId(@Param('disciplineId') disciplineId: string) {
    const terms = await this.prisma.term_Discipline_Definition.findMany({
      where: {
        disciplineId,
      },
      include: {
        term: true,
      },
    });

    return terms.map((termDiscipline) => termDiscipline.term);
  }

  @Post()
  async create(
    @Body()
    data: {
      termId: string;
      definitionId: string;
      disciplineId: string;
    },
  ) {
    return this.prisma.term_Discipline_Definition.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') Id: string,
    @Body()
    data: {
      termId?: string;
      definitionId?: string;
      disciplineId?: string;
    },
  ) {
    return this.prisma.term_Discipline_Definition.update({
      where: { Id },
      data,
    });
  }

  @Delete(':id')
  async remove(@Param('id') Id: string) {
    return this.prisma.term_Discipline_Definition.delete({ where: { Id } });
  }

  @Delete('/termId/:termId')
  async removeTerm(@Param('termId') termId: string) {
    try {
      const terms = await this.prisma.term_Discipline_Definition.findMany({
        where: { termId: termId },
      });

      if (terms.length === 0) {
        throw new Error('Nenhuma entrada encontrada');
      }

      const termIds = terms.map((term) => term.Id);

      // Deleta todas as entradas correspondentes na tabela term_Discipline_Definition
      const deleteResult =
        await this.prisma.term_Discipline_Definition.deleteMany({
          where: {
            Id: {
              in: termIds, // Especifica os IDs a serem deletados
            },
          },
        });

      return deleteResult;
    } catch (error) {
      throw new Error(`Erro ao excluir termo do terciário: ${error.message}`);
    }
  }
}
