import { PrismaService } from 'src/database/prisma.service';
export declare class DisciplineController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        glossaryId: string;
        name: string;
        description: string;
        year: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        glossaryId: string;
        name: string;
        description: string;
        year: string;
    }>;
    findByGlossaryId(glossaryId: string): Promise<{
        id: string;
        glossaryId: string;
        name: string;
        description: string;
        year: string;
    }[]>;
    create(data: {
        name: string;
        description: string;
        year: string;
        glossaryId: string;
    }): Promise<{
        id: string;
        glossaryId: string;
        name: string;
        description: string;
        year: string;
    }>;
    update(id: string, data: {
        name?: string;
        description?: string;
        year?: string;
        glossaryId?: string;
    }): Promise<{
        id: string;
        glossaryId: string;
        name: string;
        description: string;
        year: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        glossaryId: string;
        name: string;
        description: string;
        year: string;
    }>;
}
