
using System.Numerics;
using UserAPI.Interfaces;
using UserAPI.Models;

namespace UserAPI.Services
{
    public class GeneratePasswordService : IGeneratePassword
    {
        public string password = "";
        public async Task<string> GenerateDoctorPassword(Doctor doctor)
        {
            
            if(doctor.FirstName == null) {
                throw new NullValueException(nameof(doctor.FirstName));
            }
            password = doctor.FirstName[..4];
            password += doctor.DateofBirth.Day;
            password += doctor.DateofBirth.Month;
            await Task.Delay(100);
            return password;
        }

        public async Task<string> GeneratePatientPassword(Patient patient)
        {
            if (patient.FirstName == null)
            {
                throw new NullValueException(nameof(patient.FirstName));
            }
            password = patient.FirstName[..4].ToLower();
            password +=  patient.DateofBirth.Day;
            password +=  patient.DateofBirth.Month;
            await Task.Delay(100);
            return  password;
        }
    }
}
