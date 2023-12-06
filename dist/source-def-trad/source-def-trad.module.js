"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceModule = void 0;
const common_1 = require("@nestjs/common");
const source_def_trad_controller_1 = require("./source-def-trad.controller");
let SourceModule = exports.SourceModule = class SourceModule {
};
exports.SourceModule = SourceModule = __decorate([
    (0, common_1.Module)({
        controllers: [source_def_trad_controller_1.SourceDefTradController],
    })
], SourceModule);
//# sourceMappingURL=source-def-trad.module.js.map