"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facilities_controller_1 = require("../controllers/facilities.controller");
const router = (0, express_1.Router)();
router.get('/', facilities_controller_1.getFacilities);
router.post('/', facilities_controller_1.postFacility);
exports.default = router;
//# sourceMappingURL=facilities.js.map