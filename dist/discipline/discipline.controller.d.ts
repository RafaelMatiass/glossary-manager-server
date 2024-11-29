import { PrismaService } from 'src/database/prisma.service';
export declare class DisciplineController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
        year: number;
        description: string;
        glossaryId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        year: number;
        description: string;
        glossaryId: number;
    }>;
    findByGlossaryId(glossaryId: number): Promise<{
        id: number;
        name: string;
        year: number;
        description: string;
        glossaryId: number;
    }[]>;
    create(data: {
        name: string;
        description: string;
        year: number;
        glossaryId: number;
    }): Promise<{
        id: number;
        name: string;
        year: number;
        description: string;
        glossaryId: number;
    }>;
    update(id: number, data: {
        name?: string;
        description?: string;
        year?: number;
        glossaryId?: number;
    }): Promise<{
        id: number;
        name: string;
        year: number;
        description: string;
        glossaryId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        year: number;
        description: string;
        glossaryId: number;
    }>;
}
