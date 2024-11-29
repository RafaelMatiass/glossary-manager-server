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
exports.TranslationTermController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let TranslationTermController = exports.TranslationTermController = class TranslationTermController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.translation.findMany();
    }
    async findOne(id) {
        return this.prisma.translation.findUnique({ where: { id } });
    }
    async getByTermId(termId) {
        return this.prisma.translation.findMany({
            where: {
                termId: termId,
            },
        });
    }
    async create(data) {
        return this.prisma.translation.create({ data });
    }
    async update(id, data) {
        return this.prisma.translation.update({ where: { id }, data });
    }
    async removeTerm(termId) {
        try {
            const term = await this.prisma.term.findUnique({
                where: { id: termId },
            });
            if (!term) {
                throw new Error('Termo não encontrado');
            }
            await this.prisma.translation.deleteMany({
                where: {
                    termId: termId,
                },
            });
            await this.prisma.term.delete({
                where: {
                    id: termId,
                },
            });
            return { success: true, message: 'Termo excluído com sucesso' };
        }
        catch (error) {
            return { success: false, message: error.message };
        }
    }
    async remove(id) {
        return this.prisma.translation.delete({ where: { id } });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TranslationTermController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TranslationTermController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('translationByTermId/:termId'),
    __param(0, (0, common_1.Param)('termId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TranslationTermController.prototype, "getByTermId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TranslationTermController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TranslationTermController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/termId/:termId'),
    __param(0, (0, common_1.Param)('termId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TranslationTermController.prototype, "removeTerm", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TranslationTermController.prototype, "remove", null);
exports.TranslationTermController = TranslationTermController = __decorate([
    (0, common_1.Controller)('translation-term'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TranslationTermController);
//# sourceMappingURL=translation-term.controller.js.map