"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDescriptionController = void 0;
const UpdateDescriptionService_1 = require("../services/UpdateDescriptionService");
class UpdateDescriptionController {
    async handle(request, response) {
        const { description } = request.body;
        const { user_id } = request;
        const service = new UpdateDescriptionService_1.UpdateDescriptionService();
        const result = await service.execute(description, user_id);
        return response.json(result);
    }
}
exports.UpdateDescriptionController = UpdateDescriptionController;
