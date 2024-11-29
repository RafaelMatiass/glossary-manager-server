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

@Controller('translation-term')
export class TranslationTermController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.translation.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {  // Alterado para 'number'
    return this.prisma.translation.findUnique({ where: { id } });
  }

  @Get('translationByTermId/:termId')
  async getByTermId(@Param('termId') termId: number) {
    return this.prisma.translation.findMany({
      where: {
        termId: termId,
      },
    });
  }

  @Post()
  async create(
    @Body()
    data: {
      language: string;
      page: string;
      translation: string;
      sourceId: number;
      termId: number;
    },
  ) {
    return this.prisma.translation.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,  
    @Body()
    data: {
      language?: string;
      page?: string;
      translation?: string;
      sourceId?: number;
      termId?: number;
    },
  ) {
    return this.prisma.translation.update({ where: { id }, data });
  }

  @Delete('/termId/:termId')
  async removeTerm(@Param('termId') termId: number) {
    try {
      const term = await this.prisma.term.findUnique({
        where: { id: termId },
      });

      if (!term) {
        throw new Error('Termo não encontrado');
      }

      await this.prisma.translation.deleteMany({
        where: {
          termId: termId,
        },
      });

      await this.prisma.term.delete({
        where: {
          id: termId,
        },
      });

      return { success: true, message: 'Termo excluído com sucesso' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {  // Alterado para 'number'
    return this.prisma.translation.delete({ where: { id } });
  }
}
