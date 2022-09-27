import { Router } from "express";
import TestController from "../controllers/TestController";

const router = Router();

router.get('/post', new TestController().getInput);

export default router;
