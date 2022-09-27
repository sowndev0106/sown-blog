export default abstract class QueryHandler<Query, DTO> 
{
    protected abstract validate( query: Query ): Promise<void>;
    public abstract handle( query: Query ): Promise<DTO>;
}