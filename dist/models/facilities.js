"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const bookings_1 = __importDefault(require("./bookings"));
const Facilities = connection_1.default.define('cd_facilities', {
    facid: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    membercost: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    guestcost: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    initialoutlay: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    monthlymaintenance: {
        type: sequelize_1.DataTypes.DECIMAL
    }
});
Facilities.hasMany(bookings_1.default, { foreignKey: 'facid' });
exports.default = Facilities;
//# sourceMappingURL=facilities.js.map