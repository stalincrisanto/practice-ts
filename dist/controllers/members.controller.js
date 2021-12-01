"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMember = exports.getMembers = void 0;
const members_1 = __importDefault(require("../models/members"));
const getMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield members_1.default.findAll();
    res.json({ members });
});
exports.getMembers = getMembers;
const postMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const member = members_1.default.build(body);
        yield member.save();
        // Se puede utilizar .create que combina el build y save en una sola línea
        // const usuario = await Usuario.create(body);
        res.json(member);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error interno del servidor'
        });
    }
});
exports.postMember = postMember;
//# sourceMappingURL=members.controller.js.map