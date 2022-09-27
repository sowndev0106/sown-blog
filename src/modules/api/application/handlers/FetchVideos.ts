import axios from 'axios'
import RequestHandler from '@modules/@core/application/RequestHandler';
import { IVideo as IVideoRequest } from '@modules/api/presentation/requests/Video';
import { IVideo as IVideoResponse } from '@modules/api/presentation/responses/Video';
import ValidationError from '@modules/@core/domain/errors/ValidationError';
import IVideoDao from '@modules/@core/domain/daos/IVideoDao';
import { injectable,inject } from 'inversify';
import IVideoRepository from '@modules/@core/domain/repositories/IVideoRepository';
import Video from '@modules/@core/domain/entities/Video';
import VideoChannelId from '@modules/@core/domain/value-objects/VideoChannelId';
import VideoPublishedAt from '@modules/@core/domain/value-objects/VideoPublishedAt';
import VideoTitle from '@modules/@core/domain/value-objects/VideoTitle';
import VideoDescription from '@modules/@core/domain/value-objects/VideoDescription';
import Url from '@modules/@core/domain/value-objects/Url';
import VideoId from '@modules/@core/domain/value-objects/VideoId';
interface ValidatedInput {
	error?:string
}

@injectable()
export default class FetchVideo extends RequestHandler<IVideoRequest, IVideoResponse>  {
	@inject('IVideoDao') private _IVideoDao!: IVideoRepository;
	async validate(request: IVideoRequest): Promise<ValidatedInput> {
		var key = process.env.KEY_API_FETCH_VIDEO
		var error;
		if(key != request.key){
				// throw new ValidationError({message:''});
			error = 'Key api is not valid'
		}
		// if (this._ec.hasError()) {
		// 	throw new ValidationError(this._ec.errors);
		// }
		return {error}
	}
	async handle(request: IVideoRequest): Promise< IVideoResponse | null> {
		const input = await this.validate(request);
		if(input.error){
			return  {error:input.error} as IVideoResponse
		}
		const apiKey = process.env.YOUTUBE_API_KEY as string;
		const channelId = process.env.YOUTUBE_CHANNEL_ID as string;
		const urlVideoYoutube = process.env.YOUTUBE_WATCH_URL;
		const urlFetchVideo = `https://youtube.googleapis.com/youtube/v3/activities?key=${apiKey}&channelId=${channelId}&part=snippet,contentDetails`;
		const result = await axios.get(urlFetchVideo) as any

		var saveDatas =  result.data.items.map(async (e:any) => {
			return await this._IVideoDao.addOrUpdateByVideoId( Video.create({
				channelId: VideoChannelId.create({ value: channelId}),
				publishedAt: VideoPublishedAt.create({ value:  e.snippet.publishedAt }),
				title: VideoTitle.create({ value: e.snippet.title }),
				description: VideoDescription.create({ value: e.snippet.description}),
				url: Url.create({ value: `${urlVideoYoutube}?v=${ e.contentDetails.upload.videoId}` }),
				videoId: VideoId.create({ value: e.contentDetails.upload.videoId  }),
				thumbnailUrl:Url.create({ value: e.snippet.thumbnails.default.url}),
			}))	
		});
		return Promise.all(saveDatas).then(()=>{

			return {data:"success"} as IVideoResponse
		}).catch((e)=>{
			return  {error:e} as IVideoResponse
		});
	}
}
