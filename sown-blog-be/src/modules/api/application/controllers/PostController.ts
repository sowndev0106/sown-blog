import { NextFunction, Request, Response } from 'express';
import Ioc from '@modules/api/infrastructure/inversify';
import TestHandler from '../handlers/Test';
import GetPostHandler from '../handlers/post/getPosts';
import TestRequest from '../../presentation/requests/Test';

export default class PostController {
    async test(req: Request, res: Response, next: NextFunction) {
        const handler = Ioc.get(TestHandler);
        const data = await handler.handle(new TestRequest(req));
        return res.status(200).json(data);
    }
    async getPost(req: Request, res: Response, next: NextFunction) {
        const handler = Ioc.get(GetPostHandler);
        const data = await handler.handle(new TestRequest(req));
        return res.status(200).json(data);
    }
}
