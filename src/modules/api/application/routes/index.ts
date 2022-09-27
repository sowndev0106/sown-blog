import { Router } from 'express';
import ErrorHandler from '../middlewares/ErrorHandler';
import testRoutes from './test';
import videoRoutes from './video';

const router = Router();

router.use('/', videoRoutes);
router.use('/test', testRoutes);

router.use(ErrorHandler);

export default router;