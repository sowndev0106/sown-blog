import ValueObject from './ValueObject';

export interface ITitleProps {
	value: string;
}

export default class VideoTitle extends ValueObject<ITitleProps> {
	public static create(props: ITitleProps) {
		const { value } = props;

		if (value === null || value === undefined || typeof value !== 'string' || value.trim() === '') {
			throw new Error('Name is invalid');
		}

		return new VideoTitle(props);
	}

	get value() {
		return this._props.value;
	}

	equalTo(name: VideoTitle) {
		return this._props.value == name._props.value;
	}
}
