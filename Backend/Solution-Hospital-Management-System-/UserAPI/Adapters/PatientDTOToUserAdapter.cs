using System.Security.Cryptography;
using System.Text;
using UserAPI.Interfaces;
using UserAPI.Models;
using UserAPI.Models.DTO;

namespace UserAPI.Adapters
{
    public class PatientDTOToUserAdapter : IAdapter<User , PatientRegisterDTO>
    {
        private readonly IGeneratePassword _passwordservice;

        public PatientDTOToUserAdapter(IGeneratePassword passwordservice)
        {
            _passwordservice = passwordservice;
        }
        public async Task<User> DTOtoUser(PatientRegisterDTO item)
        {
            var hmac = new HMACSHA512();
            string? generatedPassword = await  _passwordservice.GeneratePatientPassword(item);
            item.User.HashKey = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword ?? "1234"));
            item.User.Password = hmac.Key;
            item.User.Role = "Patient";
            item.User.PhoneNumber = item.PatientPhone;
            item.User.Age = item.PatientAge;
            item.User.Name = item.PatientFirstName;
            return item.User;


        }
    }
}
