import { Router } from "express";
import { getMembers, postMember } from '../controllers/members.controller';

const router = Router();

router.get('/', getMembers);
router.post('/', postMember);

export default router;