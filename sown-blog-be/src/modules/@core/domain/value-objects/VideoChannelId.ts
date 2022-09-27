import ValueObject from './ValueObject';

export interface IChannelIdProps {
	value: string;
}

export default class VideoChannelId extends ValueObject<IChannelIdProps> {
	public static create(props: IChannelIdProps) {
		const { value } = props;

		if (value === null || value === undefined || typeof value !== 'string' || value.trim() === '') {
			throw new Error('Name is invalid');
		}

		return new VideoChannelId(props);
	}

	get value() {
		return this._props.value;
	}

	equalTo(name: VideoChannelId) {
		return this._props.value == name._props.value;
	}
}
