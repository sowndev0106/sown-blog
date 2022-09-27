import ValueObject from './ValueObject';

export interface IVideoIdProps {
	value: string;
}

export default class VideoId extends ValueObject<IVideoIdProps> {
	public static create(props: IVideoIdProps) {
		const { value } = props;

		if (value === null || value === undefined || typeof value !== 'string' || value.trim() === '') {
			throw new Error('VideoId is invalid');
		}

		return new VideoId(props);
	}

	get value() {
		return this._props.value;
	}

	equalTo(name: VideoId) {
		return this._props.value == name._props.value;
	}
}
