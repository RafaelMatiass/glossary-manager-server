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
exports.TermDisciplineDefController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let TermDisciplineDefController = exports.TermDisciplineDefController = class TermDisciplineDefController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.term_Discipline_Definition.findMany();
    }
    async findOne(id) {
        return this.prisma.term_Discipline_Definition.findUnique({ where: { id } });
    }
    async getTermsByDisciplineId(disciplineId) {
        const terms = await this.prisma.term_Discipline_Definition.findMany({
            where: {
                disciplineId,
            },
            include: {
                Term: true,
            },
        });
        return terms.map((termDiscipline) => termDiscipline.Term);
    }
    async create(data) {
        return this.prisma.term_Discipline_Definition.create({ data });
    }
    async update(id, data) {
        return this.prisma.term_Discipline_Definition.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.term_Discipline_Definition.delete({ where: { id } });
    }
    async removeTerm(termId) {
        try {
            const terms = await this.prisma.term_Discipline_Definition.findMany({
                where: { termId: termId },
            });
            if (terms.length === 0) {
                throw new Error('Nenhuma entrada encontrada');
            }
            const termIds = terms.map((term) => term.id);
            const deleteResult = await this.prisma.term_Discipline_Definition.deleteMany({
                where: {
                    id: {
                        in: termIds,
                    },
                },
            });
            return deleteResult;
        }
        catch (error) {
            throw new Error(`Erro ao excluir termo do terciário: ${error.message}`);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TermDisciplineDefController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TermDisciplineDefController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/terms/:disciplineId'),
    __param(0, (0, common_1.Param)('disciplineId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TermDisciplineDefController.prototype, "getTermsByDisciplineId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TermDisciplineDefController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TermDisciplineDefController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TermDisciplineDefController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('/termId/:termId'),
    __param(0, (0, common_1.Param)('termId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TermDisciplineDefController.prototype, "removeTerm", null);
exports.TermDisciplineDefController = TermDisciplineDefController = __decorate([
    (0, common_1.Controller)('term-discipline-def'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TermDisciplineDefController);
//# sourceMappingURL=term-discipline-def.controller.js.map