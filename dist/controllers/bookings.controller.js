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
exports.deleteBooking = exports.putBooking = exports.postBooking = exports.getBookings = void 0;
const bookings_1 = __importDefault(require("../models/bookings"));
const getBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookings = yield bookings_1.default.findAll();
    res.json({ bookings });
});
exports.getBookings = getBookings;
const postBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const facility = bookings_1.default.build(body);
        yield facility.save();
        // Se puede utilizar .create que combina el build y save en una sola línea
        // const usuario = await Usuario.create(body);
        res.json(facility);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error interno del servidor'
        });
    }
});
exports.postBooking = postBooking;
const putBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const booking = yield bookings_1.default.findByPk(id);
        if (!booking) {
            return res.status(404).json({
                msg: `No existe el booking con el id: ${id}`
            });
        }
        yield booking.update(body);
        res.json(booking);
    }
    catch (error) {
    }
});
exports.putBooking = putBooking;
const deleteBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const bookings = yield bookings_1.default.findByPk(id);
    if (!bookings) {
        return res.status(404).json({
            msg: `No existe el booking con el id: ${id}`
        });
    }
    // Eliminación física
    yield bookings.destroy();
    res.status(200).json({ msg: `Booking con id: ${id} se ha eliminado correctamente` });
});
exports.deleteBooking = deleteBooking;
//# sourceMappingURL=bookings.controller.js.map