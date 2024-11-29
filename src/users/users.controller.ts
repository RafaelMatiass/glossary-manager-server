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

@Controller('users')
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.users.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {  // Alterado para 'id' do tipo 'number'
    return this.prisma.users.findUnique({ where: { id } });
  }

  @Post()
  async create(
    @Body()
    data: {
      nome: string;
      email: string;
      senha: string;
    },
  ) {
    return this.prisma.users.create({ data });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,  // Alterado para 'id' do tipo 'number'
    @Body()
    data: {
      nome?: string;
      email?: string;
      senha?: string;
    },
  ) {
    return this.prisma.users.update({ where: { id }, data });
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {  
    return this.prisma.users.delete({ where: { id } });
  }
}
