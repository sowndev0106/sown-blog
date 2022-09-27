import { Request } from 'express';

export interface ITest {
}

export default class Test implements ITest {
	constructor(req: Request) {}
}
