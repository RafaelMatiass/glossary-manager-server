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
  async findOne(@Param('id') id: number) {  
    return this.prisma.term_Discipline_Definition.findUnique({ where: { id } });
  }

  @Get('/terms/:disciplineId')
  async getTermsByDisciplineId(@Param('disciplineId') disciplineId: number) {
    const terms = await this.prisma.term_Discipline_Definition.findMany({
      where: {
        disciplineId,
      },
      include: {
        Term: true,
      },
    });

    return terms.map((termDiscipline) => termDiscipline.Term);  // verificar funcionamento
  }

  @Post()
  async create(
    @Body()
    data: {
      termId: number;
      definitionId: number;
      disciplineId: number;
    },
  ) {
    return this.prisma.term_Discipline_Definition.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,  // Alterado para 'number'
    @Body()
    data: {
      termId?: number;
      definitionId?: number;
      disciplineId?: number;
    },
  ) {
    return this.prisma.term_Discipline_Definition.update({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {  // Alterado para 'number'
    return this.prisma.term_Discipline_Definition.delete({ where: { id } });
  }

  @Delete('/termId/:termId')
  async removeTerm(@Param('termId') termId: number) {
    try {
      const terms = await this.prisma.term_Discipline_Definition.findMany({
        where: { termId: termId },
      });

      if (terms.length === 0) {
        throw new Error('Nenhuma entrada encontrada');
      }

      const termIds = terms.map((term) => term.id);
      
      const deleteResult =
        await this.prisma.term_Discipline_Definition.deleteMany({
          where: {
            id: {
              in: termIds,
            },
          },
        });

      return deleteResult;
    } catch (error) {
      throw new Error(`Erro ao excluir termo do terciário: ${error.message}`);
    }
  }
}
