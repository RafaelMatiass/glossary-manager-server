import { PrismaService } from 'src/database/prisma.service';
export declare class TranslationTermController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        language: string;
        translation: string;
        page: string;
        termId: number;
        sourceId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        language: string;
        translation: string;
        page: string;
        termId: number;
        sourceId: number;
    }>;
    getByTermId(termId: number): Promise<{
        id: number;
        language: string;
        translation: string;
        page: string;
        termId: number;
        sourceId: number;
    }[]>;
    create(data: {
        language: string;
        page: string;
        translation: string;
        sourceId: number;
        termId: number;
    }): Promise<{
        id: number;
        language: string;
        translation: string;
        page: string;
        termId: number;
        sourceId: number;
    }>;
    update(id: number, data: {
        language?: string;
        page?: string;
        translation?: string;
        sourceId?: number;
        termId?: number;
    }): Promise<{
        id: number;
        language: string;
        translation: string;
        page: string;
        termId: number;
        sourceId: number;
    }>;
    removeTerm(termId: number): Promise<{
        success: boolean;
        message: any;
    }>;
    remove(id: number): Promise<{
        id: number;
        language: string;
        translation: string;
        page: string;
        termId: number;
        sourceId: number;
    }>;
}
