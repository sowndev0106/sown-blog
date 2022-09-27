import { Router } from 'express';
import apiRouters from '@modules/api/application/routes';

const router = Router();

router.use('/api', apiRouters);

export default router;
