"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLoggedUserDataController = void 0;
const GetLoggedUserDataService_1 = require("../services/GetLoggedUserDataService");
class GetLoggedUserDataController {
    async handle(request, response) {
        const { user_id } = request;
        const service = new GetLoggedUserDataService_1.GetLoggedUserDataService();
        const result = await service.execute(user_id);
        return response.json(result);
    }
}
exports.GetLoggedUserDataController = GetLoggedUserDataController;
