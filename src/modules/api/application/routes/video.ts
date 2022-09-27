import { Router } from "express";
import TestController from "../controllers/TestController";
import VideoController from "../controllers/VideoController";
const router = Router();



router.get('/fetch-videos', new VideoController().fetchVideo);
router.get('/videos', new VideoController().videos);

export default router;
