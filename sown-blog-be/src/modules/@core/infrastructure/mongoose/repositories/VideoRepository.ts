import EntityID from "@modules/@core/domain/value-objects/EntityID";
import Video  from "@modules/@core/domain/entities/Video";
import  IVideoRepository from "@modules/@core/domain/repositories/IVideoRepository";
import { injectable } from "inversify";
import VideoModel from '../models/Video'
import { Document } from "mongoose";
import Repository from "./Repository";
import VideoPublishedAt from "@modules/@core/domain/value-objects/VideoPublishedAt";
import VideoDescription from "@modules/@core/domain/value-objects/VideoDescription";
import VideoTitle from "@modules/@core/domain/value-objects/VideoTitle";
import Url from "@modules/@core/domain/value-objects/Url";
import VideoChannelId from "@modules/@core/domain/value-objects/VideoChannelId";
import VideoId from "@modules/@core/domain/value-objects/VideoId";

@injectable()
export default class VideoRepository extends Repository<Video>  implements IVideoRepository{
    public constructor() {
		super(VideoModel as any);
	}

    protected convertEntityToDocument(entity: Video): Document<any, any, any> {
        let doc = {
			_id: entity.id?.value, 
			publishedAt: entity.publishedAt.value,
			description: entity.description.value,
			channelId: entity.channelId.value,
			title: entity.title.value,
			url: entity.url.value,
            videoId: entity.videoId.value,
            thumbnailUrl:entity.thumbnailUrl.value
		} as any;
		let persist = new VideoModel(doc);
		return persist;
    }

    protected convertDocumentToEntity(persist: Document): Video {
        let { _id, __v, ...props } = persist.toObject() as any;
		let entity = Video.create(
			{
				publishedAt: VideoPublishedAt.create({ value: props['publishedAt'] }),
				description: VideoDescription.create({ value: props['description'] }),
				title: VideoTitle.create({ value: props['title'] }),
				url: Url.create({ value: props['url'] }),
				channelId: VideoChannelId.create({value:props['channelId']}),
				videoId:  VideoId.create({value:props['videoId']}),
				thumbnailUrl: Url.create({ value: props['thumbnailUrl'] }),
			},
			EntityID.create({ value: _id.toString() })
		);
		return entity;
    }
	async addOrUpdateByVideoId(entity: Video): Promise<Video> {
			// This will create another document if it doesn't exist
			let doc = this.convertEntityToDocument(entity);
			delete doc._id
			const { _id, ...newObject } = doc as any;
			delete newObject['_doc']._id // i don't know why can't delete _id in doc
			await VideoModel.findOneAndUpdate({videoId:entity.videoId.value }, newObject['_doc'], {upsert: true} );
			return entity;
			
	}
} 