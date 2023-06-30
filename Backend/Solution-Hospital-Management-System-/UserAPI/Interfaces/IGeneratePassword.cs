using UserAPI.Models;

namespace UserAPI.Interfaces
{
    public interface IGeneratePassword
    {
        Task<string> GeneratePatientPassword(Patient patient);
        Task<string> GenerateDoctorPassword(Doctor doctor);
    }
}
