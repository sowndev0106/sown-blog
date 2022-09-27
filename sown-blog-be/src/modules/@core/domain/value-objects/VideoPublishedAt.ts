import ValueObject from './ValueObject';

export interface IPublishedAtProps {
	value: string;
}

export default class VideoPublishedAt  extends ValueObject<IPublishedAtProps> {
	public static create(props: IPublishedAtProps) {
		const { value } = props;

		if (value === null || value === undefined || typeof value !== 'string' || value.trim() === '') {
			throw new Error('VideoPublishedAt is invalid');
		}

		return new VideoPublishedAt(props);
	}

	get value() {
		return this._props.value;
	}

	equalTo(name: VideoPublishedAt) {
		return this._props.value == name._props.value;
	}
}
