"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const members_controller_1 = require("../controllers/members.controller");
const router = (0, express_1.Router)();
router.get('/', members_controller_1.getMembers);
router.post('/', members_controller_1.postMember);
exports.default = router;
//# sourceMappingURL=members.js.map