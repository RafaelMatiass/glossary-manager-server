import { PrismaService } from 'src/database/prisma.service';
export declare class TermController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
    }>;
    findByName(name: string): Promise<{
        id: number;
        name: string;
    }>;
    create(data: {
        name: string;
    }): Promise<{
        id: number;
        name: string;
    }>;
    update(id: number, data: {
        name?: string;
    }): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
