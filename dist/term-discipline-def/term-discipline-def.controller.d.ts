import { PrismaService } from 'src/database/prisma.service';
export declare class TermDisciplineDefController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        termId: number;
        disciplineId: number;
        definitionId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        termId: number;
        disciplineId: number;
        definitionId: number;
    }>;
    getTermsByDisciplineId(disciplineId: number): Promise<{
        id: number;
        name: string;
    }[]>;
    create(data: {
        termId: number;
        definitionId: number;
        disciplineId: number;
    }): Promise<{
        id: number;
        termId: number;
        disciplineId: number;
        definitionId: number;
    }>;
    update(id: number, data: {
        termId?: number;
        definitionId?: number;
        disciplineId?: number;
    }): Promise<{
        id: number;
        termId: number;
        disciplineId: number;
        definitionId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        termId: number;
        disciplineId: number;
        definitionId: number;
    }>;
    removeTerm(termId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
