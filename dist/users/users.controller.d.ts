import { PrismaService } from 'src/database/prisma.service';
export declare class UsersController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
    }>;
    create(data: {
        nome: string;
        email: string;
        senha: string;
    }): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
    }>;
    update(id: number, data: {
        nome?: string;
        email?: string;
        senha?: string;
    }): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
    }>;
}
