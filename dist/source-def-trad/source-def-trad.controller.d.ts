import { PrismaService } from 'src/database/prisma.service';
export declare class SourceDefTradController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        sourceId: string;
        title: string;
        publisher: string;
        year: string;
        type_publication: string;
    }[]>;
    findOne(sourceId: string): Promise<{
        sourceId: string;
        title: string;
        publisher: string;
        year: string;
        type_publication: string;
    }>;
    create(data: {
        title: string;
        publisher: string;
        type_publication: string;
        year: string;
    }): Promise<{
        sourceId: string;
        title: string;
        publisher: string;
        year: string;
        type_publication: string;
    }>;
    update(sourceId: string, data: {
        title?: string;
        publisher?: string;
        type_publication?: string;
        year?: string;
    }): Promise<{
        sourceId: string;
        title: string;
        publisher: string;
        year: string;
        type_publication: string;
    }>;
    remove(sourceId: string): Promise<{
        sourceId: string;
        title: string;
        publisher: string;
        year: string;
        type_publication: string;
    }>;
}
