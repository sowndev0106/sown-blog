import ValueObject from './ValueObject';

export interface IDescriptionProps {
	value: string;
}

export default class VideoDescription extends ValueObject<IDescriptionProps> {
	public static create(props: IDescriptionProps) {
		const { value } = props;

		if (value === null || value === undefined || typeof value !== 'string' || value.trim() === '') {
			throw new Error('Description is invalid');
		}

		return new VideoDescription(props);
	}

	get value() {
		return this._props.value;
	}

	equalTo(name: VideoDescription) {
		return this._props.value == name._props.value;
	}
}
