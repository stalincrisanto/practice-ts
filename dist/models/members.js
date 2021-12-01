"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const bookings_1 = __importDefault(require("./bookings"));
const Members = connection_1.default.define('cd_members', {
    memid: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    surname: {
        type: sequelize_1.DataTypes.STRING
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    zipcode: {
        type: sequelize_1.DataTypes.INTEGER
    },
    telephone: {
        type: sequelize_1.DataTypes.STRING
    },
    recommendedby: {
        type: sequelize_1.DataTypes.INTEGER
    },
    joindate: {
        type: sequelize_1.DataTypes.DATE
    },
});
Members.hasMany(bookings_1.default, { foreignKey: 'memid' });
exports.default = Members;
//# sourceMappingURL=members.js.map