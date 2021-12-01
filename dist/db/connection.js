"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('postgresql://postgres:stalin@localhost:5432/db_exercises');
exports.default = db;
//# sourceMappingURL=connection.js.map