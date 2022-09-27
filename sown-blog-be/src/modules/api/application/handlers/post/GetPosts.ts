import { inject, injectable } from 'inversify';
import RequestHandler from '@modules/@core/application/RequestHandler';
import { ITest as ITestRequest } from '@modules/api/presentation/requests/Test';
import { ITest as ITestResponse } from '@modules/api/presentation/responses/Test';
import ValidationError from '@modules/@core/domain/errors/ValidationError';

interface ValidatedInput { }

@injectable()
export default class GetPost extends RequestHandler<ITestRequest, ITestResponse> {
    async validate(request: ITestRequest): Promise<ValidatedInput> {
        if (this._ec.hasError()) {
            throw new ValidationError(this._ec.errors);
        }
        return request;
    }
    async handle(request: ITestRequest): Promise<ITestResponse | null> {
        const input = await this.validate(request);
        return { input };
    }
}
