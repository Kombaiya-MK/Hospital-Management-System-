using UserAPI.Interfaces;
using UserAPI.Models;

namespace UserAPI.Services
{
    public class GeneratePasswordService : IGeneratePassword
    {
        public async Task<string?> GenerateDoctorPassword(Doctor doctor)
        {
            string password = String.Empty;
            password =  doctor.FirstName.Substring(0, 4);
            password += doctor.DateofBirth.Day;
            password += doctor.DateofBirth.Month;
            return password;
        }

        public async Task<string?> GeneratePatientPassword(Patient patient)
        {
            string password = String.Empty;
            password = patient.FirstName.Substring(0, 4);
            password += patient.DateofBirth.Day;
            password += patient.DateofBirth.Month;
            return password;
        }
    }
}
