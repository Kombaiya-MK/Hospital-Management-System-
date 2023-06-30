﻿using System.Runtime.Serialization;

namespace UserAPI.Services
{
    [Serializable]
    internal class NullValueException : Exception
    {
        public NullValueException()
        {
        }

        public NullValueException(string? message) : base("No Value available")
        {
        }

        public NullValueException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected NullValueException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}