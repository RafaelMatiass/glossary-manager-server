import { PrismaService } from 'src/database/prisma.service';
export declare class TermController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
    }>;
    findByName(name: string): Promise<{
        id: string;
        name: string;
    }>;
    create(data: {
        name: string;
    }): Promise<{
        id: string;
        name: string;
    }>;
    update(id: string, data: {
        name?: string;
    }): Promise<{
        id: string;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
    }>;
}
