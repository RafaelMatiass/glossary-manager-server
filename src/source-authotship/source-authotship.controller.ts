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
}
