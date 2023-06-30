namespace UserAPI.Interfaces
{
    public interface IAdapter<T,K>
    {
        Task<T> DTOtoUser(K item);
    }
}
