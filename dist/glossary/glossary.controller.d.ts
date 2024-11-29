import { PrismaService } from '../database/prisma.service';
export declare class GlossaryController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
        courseId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        courseId: number;
    }>;
    create(data: {
        name: string;
        description: string;
        courseId: number;
    }): Promise<{
        id: number;
        name: string;
        description: string;
        courseId: number;
    }>;
    update(id: number, data: {
        name?: string;
        description?: string;
        courseId?: number;
    }): Promise<{
        id: number;
        name: string;
        description: string;
        courseId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        courseId: number;
    }>;
}
