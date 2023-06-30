using UserAPI.Interfaces;
using UserAPI.Models;

namespace UserAPI.Services
{
    public class GeneratePasswordService : IGeneratePassword
    {
        public async Task<string?> GenerateDoctorPassword(Doctor doctor)
        {
            string password = String.Empty;
            password =  doctor.DoctorFirstName.Substring(0, 4);
            password += doctor.DoctorDateofBirth.Day;
            password += doctor.DoctorDateofBirth.Month;
            return password;
        }

        public async Task<string?> GeneratePatientPassword(Patient patient)
        {
            string password = String.Empty;
            password = patient.PatientFirstName.Substring(0, 4);
            password += patient.PatientDateofBirth.Day;
            password += patient.PatientDateofBirth.Month;
            return password;
        }
    }
}
