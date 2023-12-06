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
  async findOne(@Param('id') translationId: string) {
    return this.prisma.translation.findUnique({ where: { translationId } });
  }

  @Get('translationByTermId/:termId')
  async getByTermId(@Param('termId') termId: string) {
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
      sourceId: string;
      termId: string;
    },
  ) {
    return this.prisma.translation.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') translationId: string,
    @Body()
    data: {
      language?: string;
      page?: string;
      translation?: string;
      sourceId?: string;
      termId?: string;
    },
  ) {
    return this.prisma.translation.update({ where: { translationId }, data });
  }

  @Delete('/termId/:termId')
  async removeTerm(@Param('termId') termId: string) {
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
  async remove(@Param('id') translationId: string) {
    return this.prisma.translation.delete({ where: { translationId } });
  }
}
