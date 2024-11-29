import { PrismaService } from 'src/database/prisma.service';
export declare class AuthorController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(authorId: number): Promise<{
        id: number;
        name: string;
    }>;
    create(data: {
        name: string;
    }): Promise<{
        id: number;
        name: string;
    }>;
    update(authorId: number, data: {
        name?: string;
    }): Promise<{
        id: number;
        name: string;
    }>;
    remove(authorId: number): Promise<{
        id: number;
        name: string;
    }>;
}
