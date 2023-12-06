import { PrismaService } from 'src/database/prisma.service';
export declare class SourceAuthorshipController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        Id: string;
        sourceId: string;
        authorId: string;
    }[]>;
    findOne(Id: string): Promise<{
        Id: string;
        sourceId: string;
        authorId: string;
    }>;
    findBySourceId(sourceId: string): Promise<string>;
    create(data: {
        sourceId: string;
        authorId: string;
    }): Promise<{
        Id: string;
        sourceId: string;
        authorId: string;
    }>;
    update(Id: string, data: {
        sourceId?: string;
        authorId?: string;
    }): Promise<{
        Id: string;
        sourceId: string;
        authorId: string;
    }>;
    remove(Id: string): Promise<{
        Id: string;
        sourceId: string;
        authorId: string;
    }>;
}
