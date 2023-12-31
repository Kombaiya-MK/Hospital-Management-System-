﻿namespace UserAPI.Interfaces
{
    public interface IRepo<T,K>
    {
        Task<T> Add(T item);
        Task<T> Update(T item);
        Task<T> Get(K key);
        Task<ICollection<T>> GetAll();
    }
}
