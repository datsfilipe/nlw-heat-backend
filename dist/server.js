"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 8080;
app_1.serverHttp.listen(port, () => console.log('🚀 app online'));
