import { Router } from "express";
import { getBookings, postBooking, putBooking, deleteBooking } from '../controllers/bookings.controller';

const router = Router();

router.get('/', getBookings);
router.post('/', postBooking);
router.put('/:id', putBooking);
router.delete('/:id', deleteBooking);

export default router;