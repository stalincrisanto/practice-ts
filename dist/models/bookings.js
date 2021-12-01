"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Bookings = connection_1.default.define('cd_bookings', {
    memid: {
        type: sequelize_1.DataTypes.INTEGER
    },
    facid: {
        type: sequelize_1.DataTypes.INTEGER
    },
    starttime: {
        type: sequelize_1.DataTypes.DATE
    },
    slots: {
        type: sequelize_1.DataTypes.INTEGER
    },
    bookid: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    }
});
exports.default = Bookings;
//# sourceMappingURL=bookings.js.map