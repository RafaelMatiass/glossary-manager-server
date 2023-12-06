import { PrismaService } from '../database/prisma.service';
export declare class CourseController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        description: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
    create(data: {
        name: string;
        description: string;
    }): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
    update(id: string, data: {
        name?: string;
        description?: string;
    }): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
}
