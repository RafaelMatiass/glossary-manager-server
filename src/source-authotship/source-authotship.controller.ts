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

@Controller('source-authorship')
export class SourceAuthorshipController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.source_Authorship.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {  // Alterado para 'number'
    return this.prisma.source_Authorship.findUnique({ where: { id } });
  }

  @Get('/source/:sourceId')
  async findBySourceId(@Param('sourceId') sourceId: number) {  // Alterado para 'number'
    const sourceAuthorship = await this.prisma.source_Authorship.findFirst({
      where: {
        sourceId: sourceId,
      },
      select: {
        id: true,
      },
    });

    if (!sourceAuthorship) {
      throw new Error('Id não encontrado');
    }
    return sourceAuthorship.id;
  }

  @Post()
  async create(
    @Body()
    data: {
      sourceId: number;  // Alterado para 'number'
      authorId: number;  // Alterado para 'number'
    },
  ) {
    return await this.prisma.source_Authorship.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,  // Alterado para 'number'
    @Body()
    data: {
      sourceId?: number;  // Alterado para 'number'
      authorId?: number;  // Alterado para 'number'
    },
  ) {
    return this.prisma.source_Authorship.update({ where: { id }, data });
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {  // Alterado para 'number'
    return this.prisma.source_Authorship.delete({ where: { id } });
  }

  @Delete('/sourceId/:sourceId')
  async removeSource(@Param('sourceId') sourceId: number) {  // Alterado para 'number'
    try {
      const sources = await this.prisma.source_Authorship.findMany({
        where: { sourceId: sourceId },
      });

      if (sources.length === 0) {
        throw new Error('Nenhuma entrada encontrada');
      }

      const sourceIds = sources.map((source) => source.id);
      
      const deleteResult =
        await this.prisma.source_Authorship.deleteMany({
          where: {
            id: {
              in: sourceIds,
            },
          },
        });

      return deleteResult;
    } catch (error) {
      throw new Error(`Erro ao excluir termo do terciário: ${error.message}`);
    }
  }
}
