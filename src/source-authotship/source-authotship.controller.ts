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
  async findOne(@Param('id') Id: string) {
    return this.prisma.source_Authorship.findUnique({ where: { Id } });
  }

  @Get('/source/:sourceId')
  async findBySourceId(@Param('sourceId') sourceId: string) {
    const sourceAuthorship = await this.prisma.source_Authorship.findFirst({
      where: {
        sourceId: sourceId,
      },
      select: {
        Id: true,
      },
    });

    if (!sourceAuthorship) {
      throw new Error('Id não encontrado');
    }
    return sourceAuthorship.Id;
  }

  @Post()
  async create(
    @Body()
    data: {
      sourceId: string;
      authorId: string;
    },
  ) {
    return await this.prisma.source_Authorship.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') Id: string,
    @Body()
    data: {
      sourceId?: string;
      authorId?: string;
    },
  ) {
    return this.prisma.source_Authorship.update({ where: { Id }, data });
  }

  @Delete(':id')
  async remove(@Param('id') Id: string) {
    return this.prisma.source_Authorship.delete({ where: { Id } });
  }

  @Delete('/sourceId/:sourceId')
  async removeSource(@Param('sourceId') sourceId: string) {
    try {
      const sources = await this.prisma.source_Authorship.findMany({
        where: { sourceId: sourceId },
      });

      if (sources.length === 0) {
        throw new Error('Nenhuma entrada encontrada');
      }

      const sourceIds = sources.map((source) => source.Id);
      
      const deleteResult =
        await this.prisma.source_Authorship.deleteMany({
          where: {
            Id: {
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
