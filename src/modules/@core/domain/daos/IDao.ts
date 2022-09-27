
import EntityID from '@modules/@core/domain/value-objects/EntityID';
import { IEntity } from '../entities/Entity';

export default interface IDao<E extends IEntity> {
	insertEntity(entity: E): Promise<E>;
	findEntityById(id: EntityID): Promise<E | null>;
	updateEntity(entity: E): Promise<E>;
	deleteEntity(entity: E): Promise<E>;
	insertBulkOfEntities(entities: Array<E>): Promise<Array<E>>;
	deleteBulkOfEntities(entities: Array<E>): Promise<Array<E>>;
	updateBulkOfEntities(entities: Array<E>): Promise<Array<E>>;
	getAllEntities(): Promise<Array<E>>;
	countAllEntities(): Promise<number>;
}
