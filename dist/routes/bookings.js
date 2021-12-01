"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookings_controller_1 = require("../controllers/bookings.controller");
const router = (0, express_1.Router)();
router.get('/', bookings_controller_1.getBookings);
router.post('/', bookings_controller_1.postBooking);
router.put('/:id', bookings_controller_1.putBooking);
router.delete('/:id', bookings_controller_1.deleteBooking);
exports.default = router;
//# sourceMappingURL=bookings.js.map