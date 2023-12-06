import { PrismaService } from 'src/database/prisma.service';
export declare class TermDisciplineDefController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        Id: string;
        disciplineId: string;
        termId: string;
        definitionId: string;
    }[]>;
    findOne(Id: string): Promise<{
        Id: string;
        disciplineId: string;
        termId: string;
        definitionId: string;
    }>;
    getTermsByDisciplineId(disciplineId: string): Promise<{
        id: string;
        name: string;
    }[]>;
    create(data: {
        termId: string;
        definitionId: string;
        disciplineId: string;
    }): Promise<{
        Id: string;
        disciplineId: string;
        termId: string;
        definitionId: string;
    }>;
    update(Id: string, data: {
        termId?: string;
        definitionId?: string;
        disciplineId?: string;
    }): Promise<{
        Id: string;
        disciplineId: string;
        termId: string;
        definitionId: string;
    }>;
    remove(Id: string): Promise<{
        Id: string;
        disciplineId: string;
        termId: string;
        definitionId: string;
    }>;
    removeTerm(termId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
