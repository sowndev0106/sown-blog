
// import EntityID from '@modules/@core/domain/value-objects/EntityID';
import { IEntity } from '@modules/@core/domain/entities/Entity';
import Entity from '@modules/@core/domain/entities/Entity';
import Url from '../value-objects/Url';
import VideoChannelId from '../value-objects/VideoChannelId';
import VideoDescription from '../value-objects/VideoDescription';
import VideoId from '../value-objects/VideoId';
import VideoPublishedAt from '../value-objects/VideoPublishedAt';
import VideoTitle from '../value-objects/VideoTitle';
import EntityID from '../value-objects/EntityID';
// import Entity from './Entity';

export interface IVideo {
	channelId: VideoChannelId;
	publishedAt: VideoPublishedAt;
	title: VideoTitle;
	description: VideoDescription;
	url: Url;
	videoId:VideoId;
	thumbnailUrl:  Url;
}
export default class Video extends Entity<IVideo> implements IVideo {

	public static create(popps: IVideo, id?: EntityID) {
		return new Video(popps, id);
	}
	public get publishedAt(): VideoPublishedAt {
		return this._props.publishedAt
	}
	public get title(): VideoTitle{
		return this._props.title
	}
	public get channelId(): VideoChannelId {
		return this._props.channelId
	}
	public get description(): VideoDescription {
		return this._props.description
	}
    public get url(): Url {
		return this._props.url
	}
    public get thumbnailUrl():Url {
		return this._props.thumbnailUrl;
	}
	public get videoId(): VideoId{
		return this._props.videoId
	}
	public updateChannelId(channelId:VideoChannelId){
        return this._props.channelId = channelId
    }
    public updatePublishedAt(publishedAt:VideoPublishedAt){
        return this._props.publishedAt = publishedAt
    }
    public updateTitle(title:VideoTitle){
        return this._props.title = title
    }
    public updateDescription(description:VideoDescription){
        return this._props.description = description
    }
    public updateUrl(url:Url){
        return this._props.url = url
    }
    public updateThumbnails(thumbnailUrl:Url){
        return this._props.thumbnailUrl = thumbnailUrl
    }
	public updateVideoId(videoId:VideoId){
        return this._props.videoId = videoId
    }
}
