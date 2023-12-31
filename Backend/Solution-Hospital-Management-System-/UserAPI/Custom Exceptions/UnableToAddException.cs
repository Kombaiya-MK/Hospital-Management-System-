﻿using System.Runtime.Serialization;

namespace UserAPI.Services
{
    [Serializable]
    public class UnableToAddException : Exception
    {
        public UnableToAddException()
        {
        }

        public UnableToAddException(string? message) : base(message)
        {
        }

        public UnableToAddException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected UnableToAddException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}