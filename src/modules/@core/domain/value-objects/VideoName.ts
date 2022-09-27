import ValueObject from './ValueObject';

export interface INameProps {
	value: string;
}

export default class VideoName extends ValueObject<INameProps> {
	public static create(props: INameProps) {
		const { value } = props;

		if (value === null || value === undefined || typeof value !== 'string' || value.trim() === '') {
			throw new Error('Name is invalid');
		}

		return new VideoName(props);
	}

	get value() {
		return this._props.value;
	}

	equalTo(name: VideoName) {
		return this._props.value == name._props.value;
	}
}
