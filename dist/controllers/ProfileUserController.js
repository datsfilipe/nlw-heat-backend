"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUserController = void 0;
const ProfileUserService_1 = require("../services/ProfileUserService");
class ProfileUserController {
    async handle(request, response) {
        const { login } = request.params;
        const service = new ProfileUserService_1.ProfileUserService();
        const result = await service.execute(login);
        return response.json(result);
    }
}
exports.ProfileUserController = ProfileUserController;
