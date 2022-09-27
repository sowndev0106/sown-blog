import { inject, injectable } from 'inversify';
import RequestHandler from '@modules/@core/application/RequestHandler';
import { IVideo as IVideoRequest } from '@modules/api/presentation/requests/Video';
import { IVideo as IVideoResponse } from '@modules/api/presentation/responses/Video';

import ValidationError from '@modules/@core/domain/errors/ValidationError';
import IVideoRepository from '@modules/@core/domain/repositories/IVideoRepository';
import { IVideo } from '@modules/@core/domain/entities/Video';

interface ValidatedInput { }

@injectable()
export default class Test extends RequestHandler<IVideoRequest, IVideoResponse>  {
	@inject('IVideoDao') private _IVideoDao!: IVideoRepository;
	async validate(request: IVideoRequest): Promise<ValidatedInput> {
		if (this._ec.hasError()) {
			throw new ValidationError(this._ec.errors);
		}
		return request;
	}
	async handle(request: IVideoRequest): Promise<IVideoResponse | null> {

		return this._IVideoDao.all().then(data => {
			var doc = data.map(e => {
				return {
					thumbnail: e.thumbnailUrl.value,
					url: e.url.value,
					title: e.title.value,
					date: e.publishedAt.value,
				}
			});
			return { data: doc } as IVideoResponse
		}).catch(e => {
			return { error: e } as IVideoResponse
		})

	}
}

