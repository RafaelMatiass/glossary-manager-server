"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisciplineController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let DisciplineController = exports.DisciplineController = class DisciplineController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.discipline.findMany();
    }
    async findOne(id) {
        const numericId = parseInt(id, 10);
        if (isNaN(numericId)) {
            throw new common_1.BadRequestException('O ID fornecido não é um número válido.');
        }
        return this.prisma.discipline.findUnique({
            where: {
                id: numericId,
            },
        });
    }
    async findByGlossaryId(glossaryId) {
        const glossary = await this.prisma.glossary.findUnique({
            where: { id: glossaryId },
            include: {
                Discipline: true,
            },
        });
        if (!glossary) {
            throw new Error('Glossário não encontrado');
        }
        return glossary.Discipline;
    }
    async create(data) {
        return this.prisma.discipline.create({ data });
    }
    async update(id, data) {
        return this.prisma.discipline.update({ where: { id }, data });
    }
    async remove(id) {
        return this.prisma.discipline.delete({ where: { id } });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/glossary/:glossaryId'),
    __param(0, (0, common_1.Param)('glossaryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "findByGlossaryId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "remove", null);
exports.DisciplineController = DisciplineController = __decorate([
    (0, common_1.Controller)('discipline'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DisciplineController);
//# sourceMappingURL=discipline.controller.js.map