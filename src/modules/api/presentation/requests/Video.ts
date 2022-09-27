import { Request } from 'express';

export interface IVideo {
	key?:string
	
}

export default class Video implements IVideo{
	constructor(req: Request) {}
	key?: string | undefined;
}
