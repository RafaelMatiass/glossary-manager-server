import { PrismaService } from '../database/prisma.service';
export declare class CourseController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string;
    }>;
    create(data: {
        name: string;
        description: string;
    }): Promise<{
        id: number;
        name: string;
        description: string;
    }>;
    update(id: number, data: {
        name?: string;
        description?: string;
    }): Promise<{
        id: number;
        name: string;
        description: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        description: string;
    }>;
}
