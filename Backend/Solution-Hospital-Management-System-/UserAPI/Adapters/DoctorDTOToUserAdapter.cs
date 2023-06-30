using System.Security.Cryptography;
using System.Text;
using UserAPI.Interfaces;
using UserAPI.Models;
using UserAPI.Models.DTO;
using UserAPI.Services;

namespace UserAPI.Adapters
{
    public class DoctorDTOToUserAdapter : IAdapter<User, DoctorRegisterDTO>
    {
        private readonly IGeneratePassword _passwordservice;

        public DoctorDTOToUserAdapter(IGeneratePassword passwordservice)
        {
            _passwordservice = passwordservice;
        }
        public async Task<User> DTOtoUser(DoctorRegisterDTO item)
        {
            if(item.User == null)
            {
                throw new NullValueException("user object is null");
            }
            var hmac = new HMACSHA512();
            string? generatedPassword = await _passwordservice.GenerateDoctorPassword(item);
            item.User.HashKey = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword ?? "1234"));
            item.User.Password = hmac.Key;
            item.User.Role = "Doctor";
            item.User.PhoneNumber = item.Phone;
            item.User.Age = item.Age;
            item.User.Name = item.FirstName;
            item.AccountStatus = "Pending";
            item.Status = "NIL";
            return item.User;


        }
    }
}
