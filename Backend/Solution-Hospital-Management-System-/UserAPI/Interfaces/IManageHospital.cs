using UserAPI.Models.DTO;
using UserAPI.Models;

namespace UserAPI.Interfaces
{
    public interface IManageHospital
    {
        Task<Doctor> ApproveDoctor(ApproveDoctorDTO doc);
        Task<UserDTO> Register(DoctorRegisterDTO doctor);
        Task<UserDTO> Register(PatientRegisterDTO patient);
        Task<UserDTO> Login(UserDTO user);
        Task<bool> ChangePassword(PasswordDTO passwordDTO);
        Task<ICollection<Doctor>> GetAllDoctors();
        Task<ICollection<Patient>> GetAllPatients();
        Task<Doctor> GetDoctor(GetDoctor item);
        Task<Patient> GetPatient(GetPatient item);


    }
}
