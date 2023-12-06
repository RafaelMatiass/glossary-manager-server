import { PrismaService } from 'src/database/prisma.service';
export declare class TranslationTermController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        translationId: string;
        termId: string;
        sourceId: string;
        language: string;
        translation: string;
        page: string;
    }[]>;
    findOne(translationId: string): Promise<{
        translationId: string;
        termId: string;
        sourceId: string;
        language: string;
        translation: string;
        page: string;
    }>;
    getByTermId(termId: string): Promise<{
        translationId: string;
        termId: string;
        sourceId: string;
        language: string;
        translation: string;
        page: string;
    }[]>;
    create(data: {
        language: string;
        page: string;
        translation: string;
        sourceId: string;
        termId: string;
    }): Promise<{
        translationId: string;
        termId: string;
        sourceId: string;
        language: string;
        translation: string;
        page: string;
    }>;
    update(translationId: string, data: {
        language?: string;
        page?: string;
        translation?: string;
        sourceId?: string;
        termId?: string;
    }): Promise<{
        translationId: string;
        termId: string;
        sourceId: string;
        language: string;
        translation: string;
        page: string;
    }>;
    removeTerm(termId: string): Promise<{
        success: boolean;
        message: any;
    }>;
    remove(translationId: string): Promise<{
        translationId: string;
        termId: string;
        sourceId: string;
        language: string;
        translation: string;
        page: string;
    }>;
}
