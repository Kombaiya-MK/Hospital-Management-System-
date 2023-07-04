using System.Runtime.Serialization;

namespace UserAPI.Services
{
    [Serializable]
    public class NotUpdatedException : Exception
    {
        public NotUpdatedException()
        {
        }

        public NotUpdatedException(string? message) : base(message)
        {
        }

        public NotUpdatedException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected NotUpdatedException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}