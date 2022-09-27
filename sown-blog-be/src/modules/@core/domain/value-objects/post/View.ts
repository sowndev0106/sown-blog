import ValueObject from '../ValueObject';

export interface IViewProps {
    value: number;
}

export default class ViewPost extends ValueObject<IViewProps> {
    public static create(props: IViewProps) {
        const { value } = props;

        if (value === null || value === undefined || typeof value !== 'number' || value < 0) {
            props.value = 0;
            // throw new Error('View is invalid');
        }
        return new ViewPost(props);
    }

    get value() {
        return this._props.value;
    }

    equalTo(name: ViewPost) {
        return this._props.value == name._props.value;
    }
}
