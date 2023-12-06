import { PrismaService } from 'src/database/prisma.service';
export declare class AuthorController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        authorId: string;
        name: string;
    }[]>;
    findOne(authorId: string): Promise<{
        authorId: string;
        name: string;
    }>;
    create(data: {
        name: string;
    }): Promise<{
        authorId: string;
        name: string;
    }>;
    update(authorId: string, data: {
        name?: string;
    }): Promise<{
        authorId: string;
        name: string;
    }>;
    remove(authorId: string): Promise<{
        authorId: string;
        name: string;
    }>;
}
