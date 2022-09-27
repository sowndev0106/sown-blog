import { inject, injectable } from 'inversify';
import RequestHandler from '@modules/@core/application/RequestHandler';
import { Itest-request as Itest-requestRequest } from '@modules/api/presentation/requests/test-request';
import { Itest-request as Itest-requestResponse } from '@modules/api/presentation/responses/test-request';
import ValidationError from '@modules/@core/domain/errors/ValidationError';

interface ValidatedInput {}

@injectable()
export default class test-request extends RequestHandler<Itest-requestRequest, Itest-requestResponse> {
	async validate(request: Itest-requestRequest): Promise<ValidatedInput> {
		if (this._ec.hasError()) {
			throw new ValidationError(this._ec.errors);
		}

		return {};
	}

	async handle(request: Itest-requestRequest): Promise<Itest-requestResponse | null> {
		const input = await this.validate(request);

		return null;
	}
}
