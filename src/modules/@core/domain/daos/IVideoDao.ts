import EntityID from "@modules/@core/domain/value-objects/EntityID";

export default interface IVideoDao {
	findAll(): Promise<Array<object>>;
	find(document: any): Promise<Array<object>>;
	findOne(UserId: EntityID): Promise<object | null>;
}
