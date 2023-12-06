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
exports.SourceAuthorshipController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let SourceAuthorshipController = exports.SourceAuthorshipController = class SourceAuthorshipController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.source_Authorship.findMany();
    }
    async findOne(Id) {
        return this.prisma.source_Authorship.findUnique({ where: { Id } });
    }
    async findBySourceId(sourceId) {
        const sourceAuthorship = await this.prisma.source_Authorship.findFirst({
            where: {
                sourceId: sourceId,
            },
            select: {
                Id: true,
            },
        });
        if (!sourceAuthorship) {
            throw new Error('Id não encontrado');
        }
        return sourceAuthorship.Id;
    }
    async create(data) {
        return await this.prisma.source_Authorship.create({ data });
    }
    async update(Id, data) {
        return this.prisma.source_Authorship.update({ where: { Id }, data });
    }
    async remove(Id) {
        return this.prisma.source_Authorship.delete({ where: { Id } });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SourceAuthorshipController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SourceAuthorshipController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/source/:sourceId'),
    __param(0, (0, common_1.Param)('sourceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SourceAuthorshipController.prototype, "findBySourceId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SourceAuthorshipController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SourceAuthorshipController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SourceAuthorshipController.prototype, "remove", null);
exports.SourceAuthorshipController = SourceAuthorshipController = __decorate([
    (0, common_1.Controller)('source-authorship'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SourceAuthorshipController);
//# sourceMappingURL=source-authotship.controller.js.map