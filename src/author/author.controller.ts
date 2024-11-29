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

@Controller('author')
export class AuthorController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.author.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') authorId: number) {  // Alterado para 'number'
    return this.prisma.author.findUnique({ where: { id: authorId } });  // Alterado para 'id'
  }

  @Post()
  async create(
    @Body()
    data: {
      name: string;
    },
  ) {
    return await this.prisma.author.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') authorId: number,  // Alterado para 'number'
    @Body()
    data: {
      name?: string;
    },
  ) {
    return this.prisma.author.update({ where: { id: authorId }, data });  // 
  }

  @Delete(':id')
  async remove(@Param('id') authorId: number) { 
    return this.prisma.author.delete({ where: { id: authorId } });  // Alterado para 'id'
  }
}
