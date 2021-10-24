"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDescriptionService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class UpdateDescriptionService {
    async execute(text, user_id) {
        const description = await prisma_1.default.user.update({
            where: {
                id: user_id,
            },
            data: {
                description: text
            }
        });
        return description;
    }
}
exports.UpdateDescriptionService = UpdateDescriptionService;
