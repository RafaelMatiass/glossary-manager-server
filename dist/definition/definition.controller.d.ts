import { PrismaService } from 'src/database/prisma.service';
export declare class DefinitionController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        sourceId: string;
        description: string;
        page: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        sourceId: string;
        description: string;
        page: string;
    }>;
    create(data: {
        definitionDescription: string;
        page: string;
        sourceId: string;
    }): Promise<{
        id: string;
        sourceId: string;
        description: string;
        page: string;
    }>;
    update(id: string, data: {
        definitionDescription?: string;
        termId?: string;
        sourceId?: string;
    }): Promise<{
        id: string;
        sourceId: string;
        description: string;
        page: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        sourceId: string;
        description: string;
        page: string;
    }>;
}
