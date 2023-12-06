import { PrismaService } from 'src/database/prisma.service';
export declare class UsersController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        prontuario: string;
        name: string;
        password: string;
    }[]>;
    findOne(prontuario: string): Promise<{
        prontuario: string;
        name: string;
        password: string;
    }>;
    create(data: {
        prontuario: string;
        name: string;
        password: string;
    }): Promise<{
        prontuario: string;
        name: string;
        password: string;
    }>;
    update(prontuario: string, data: {
        prontuario?: string;
        name?: string;
        password?: string;
    }): Promise<{
        prontuario: string;
        name: string;
        password: string;
    }>;
    remove(prontuario: string): Promise<{
        prontuario: string;
        name: string;
        password: string;
    }>;
}
