import ValueObject from '../ValueObject';

export interface IContentProps {
    value: string;
}

export default class ContentPost extends ValueObject<IContentProps> {
    public static create(props: IContentProps) {
        const { value } = props;

        if (value === null || value === undefined || typeof value !== 'string' || value.trim() === '') {
            throw new Error('Content is invalid');
        }

        return new ContentPost(props);
    }

    get value() {
        return this._props.value;
    }

    equalTo(name: ContentPost) {
        return this._props.value == name._props.value;
    }
}
