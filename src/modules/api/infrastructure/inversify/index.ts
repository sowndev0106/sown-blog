import 'reflect-metadata';
import { Container } from 'inversify';
import ErrorCollector from '@modules/@core/infrastructure/utilities/ErrorCollector';
import Nodemailer from '@modules/@core/infrastructure/nodemailer';
import IVideoRepository from '@modules/@core/domain/repositories/IVideoRepository';
import VideoRepository from '@modules/@core/infrastructure/mongoose/repositories/VideoRepository';

const container = new Container({
	autoBindInjectable: true,
	skipBaseClassChecks: true,
});

// Utilities
container.bind<ErrorCollector>('ErrorCollector').to(ErrorCollector);

// Mail
container.bind<Nodemailer>('Nodemailer').to(Nodemailer);

container.bind<IVideoRepository>('IVideoDao').to(VideoRepository);

export default container;


