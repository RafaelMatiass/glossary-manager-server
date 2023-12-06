import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Controller('course')
export class CourseController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.course.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  @Post()
  async create(@Body() data: { name: string; description: string }) {
    return this.prisma.course.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body()
    data: {
      name?: string;
      description?: string;
    },
  ) {
    return this.prisma.course.update({ where: { id }, data });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prisma.course.delete({ where: { id } });
  }
}
