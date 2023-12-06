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
  async findOne(@Param('id') prontuario: string) {
    return this.prisma.users.findUnique({ where: { prontuario } });
  }

  @Post()
  async create(
    @Body()
    data: {
      prontuario: string;
      name: string;
      password: string;
    },
  ) {
    return this.prisma.users.create({ data });
  }

  @Put(':prontuario')
  async update(
    @Param('prontuario') prontuario: string,
    @Body()
    data: {
      prontuario?: string;
      name?: string;
      password?: string;
    },
  ) {
    return this.prisma.users.update({ where: { prontuario }, data });
  }

  @Delete(':prontuario')
  async remove(@Param('prontuario') prontuario: string) {
    return this.prisma.users.delete({ where: { prontuario } });
  }
}
