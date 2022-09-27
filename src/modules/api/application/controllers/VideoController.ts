import { NextFunction, Request, Response } from 'express';
import Ioc from '@modules/api/infrastructure/inversify';
import VideoRequest from '../../presentation/requests/Video';
import FetchVideosHandler from '../handlers/FetchVideos';
import VideosHandler from '../handlers/Videos';
export default class VideoController {
	async fetchVideo(req: Request, res: Response, next: NextFunction) {
		const handler = Ioc.get(FetchVideosHandler);
		// req.?token = req.params.token;
		var videoRequest = new VideoRequest(req);
		videoRequest.key = req.query.key as string;
		const data = await handler.handle(videoRequest);
		return res.status(200).json(data);
	}
	async videos(req: Request, res: Response, next: NextFunction) {
		const handler = Ioc.get(VideosHandler); 
		var videoRequest = new VideoRequest(req);
		const data = await handler.handle(videoRequest);
		return res.status(200).json(data);
	}



}
