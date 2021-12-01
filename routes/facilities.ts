import { Router } from "express";
import { getFacilities, postFacility } from '../controllers/facilities.controller';

const router = Router();

router.get('/', getFacilities);
router.post('/', postFacility);

export default router;