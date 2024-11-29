import { PrismaService } from 'src/database/prisma.service';
export declare class SourceAuthorshipController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        sourceId: number;
        authorId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        sourceId: number;
        authorId: number;
    }>;
    findBySourceId(sourceId: number): Promise<number>;
    create(data: {
        sourceId: number;
        authorId: number;
    }): Promise<{
        id: number;
        sourceId: number;
        authorId: number;
    }>;
    update(id: number, data: {
        sourceId?: number;
        authorId?: number;
    }): Promise<{
        id: number;
        sourceId: number;
        authorId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        sourceId: number;
        authorId: number;
    }>;
    removeSource(sourceId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
