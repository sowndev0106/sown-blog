import ValueObject from '..//ValueObject';

export interface ITitleProps {
    value: string;
}

export default class TitlePost extends ValueObject<ITitleProps> {
    public static create(props: ITitleProps) {
        const { value } = props;

        if (value === null || value === undefined || typeof value !== 'string' || value.trim() === '') {
            throw new Error('Title is invalid');
        }

        return new TitlePost(props);
    }

    get value() {
        return this._props.value;
    }

    equalTo(name: TitlePost) {
        return this._props.value == name._props.value;
    }
}
