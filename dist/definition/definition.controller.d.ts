import { PrismaService } from 'src/database/prisma.service';
export declare class DefinitionController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        description: string;
        page: string;
        sourceId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        description: string;
        page: string;
        sourceId: number;
    }>;
    create(data: {
        definitionDescription: string;
        page: string;
        sourceId: number;
    }): Promise<{
        id: number;
        description: string;
        page: string;
        sourceId: number;
    }>;
    update(id: number, data: {
        definitionDescription?: string;
        termId?: number;
        sourceId?: number;
    }): Promise<{
        id: number;
        description: string;
        page: string;
        sourceId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        description: string;
        page: string;
        sourceId: number;
    }>;
}
