import { PrismaService } from 'src/database/prisma.service';
export declare class SourceDefTradController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        title: string;
        publisher: string;
        year: number;
        publicationType: string;
    }[]>;
    findOne(sourceId: number): Promise<{
        id: number;
        title: string;
        publisher: string;
        year: number;
        publicationType: string;
    }>;
    create(data: {
        title: string;
        publisher: string;
        type_publication: string;
        year: number;
    }): Promise<{
        id: number;
        title: string;
        publisher: string;
        year: number;
        publicationType: string;
    }>;
    update(sourceId: number, data: {
        title?: string;
        publisher?: string;
        type_publication?: string;
        year?: number;
    }): Promise<{
        id: number;
        title: string;
        publisher: string;
        year: number;
        publicationType: string;
    }>;
    remove(sourceId: number): Promise<{
        id: number;
        title: string;
        publisher: string;
        year: number;
        publicationType: string;
    }>;
}
