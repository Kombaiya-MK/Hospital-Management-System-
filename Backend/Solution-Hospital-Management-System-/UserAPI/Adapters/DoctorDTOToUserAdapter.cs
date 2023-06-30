using System.Security.Cryptography;
using System.Text;
using UserAPI.Interfaces;
using UserAPI.Models;
using UserAPI.Models.DTO;

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
            var hmac = new HMACSHA512();
            string? generatedPassword = await _passwordservice.GenerateDoctorPassword(item);
            item.User.HashKey = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword ?? "1234"));
            item.User.Password = hmac.Key;
            item.User.Role = "Doctor";
            item.User.PhoneNumber = item.DoctorPhone;
            item.User.Age = item.DoctorAge;
            item.User.Name = item.DoctorFirstName;
            return item.User;


        }
    }
}
