using System.Security.Cryptography;
using System.Text;
using UserAPI.Interfaces;
using UserAPI.Models;
using UserAPI.Models.DTO;

namespace UserAPI.Services
{
    public class HospitalService : IManageHospital
    {
        private readonly IRepo<Doctor, string> _doctor;
        private readonly IRepo<Patient, string> _patient;
        private readonly IRepo<User, string> _user;
        private readonly IAdapter<User, PatientRegisterDTO> _patadapter;
        private readonly IAdapter<User, DoctorRegisterDTO> _docadapter;
        private readonly ITokenGenerate _tokenservice;

        public HospitalService(IRepo<Doctor , string> doctor , IRepo<Patient , string> patient ,IRepo<User,string> user , 
            IAdapter<User, PatientRegisterDTO> patadapter ,IAdapter<User , DoctorRegisterDTO> docadapter,
            ITokenGenerate tokenservice)
        {
            _doctor = doctor;
            _patient = patient;
            _user = user;
            _patadapter = patadapter;
            _docadapter = docadapter;
            _tokenservice = tokenservice;
        }

        //Admin Services

        public async Task<Doctor> ApproveDoctor(ApproveDoctorDTO doc)
        {
            Doctor doctor = new Doctor();
            doctor.Email = doc.Email;
            doctor.AccountStatus = doc.DoctorAccountStatus;
            return await _doctor.Update(doctor);
        }

        //Doctor Services
        public async Task<UserDTO> Register(DoctorRegisterDTO doctor)
        {
            var userNew = await _docadapter.DTOtoUser(doctor);
            var userResult = await _user.Add(userNew);
            var doctorResult = await _doctor.Add(doctor);
            var user = new UserDTO();
            if (userResult != null && doctorResult != null)
            {
                user.Email = doctorResult.Email;
                user.Role = userResult.Role;
                user.Token = _tokenservice.GenerateToken(user);
            }
            return user;
        }

        //Patient Services
        public async Task<UserDTO> Register(PatientRegisterDTO patient)
        {
            var userNew = await _patadapter.DTOtoUser(patient);
            var userResult = await _user.Add(userNew);
            var PatientResult = await _patient.Add(patient);
            var user = new UserDTO();
            if (userResult != null && PatientResult != null)
            {
                user.Email = PatientResult.Email;
                user.Role = userResult.Role;
                user.Token = _tokenservice.GenerateToken(user);
            }
            return user;
        }

        //Shared Services

        public async Task<UserDTO> Login(UserDTO user)
        {
            var userData = await _user.Get(user.Email);
            if (userData != null)
            {
                var hmac = new HMACSHA512(userData.Password);
                var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                for (int i = 0; i < userPass.Length; i++)
                {
                    if (userPass[i] != userData.HashKey[i])
                        throw new InvalidUserException("Invalid user");
                }
                user = new UserDTO();
                user.Email = userData.Email;
                user.Role = userData.Role;
                user.Token = _tokenservice.GenerateToken(user);
            }
            return user;
        }

        public async Task<bool> ChangePassword(PasswordDTO passwordDTO)
        {
            bool status = false;
            User user = await _user.Get(passwordDTO.Email);
            if (validatePassword(passwordDTO.currentPassword, user))
            {
                var hmac = new HMACSHA512();
                user.HashKey = hmac.ComputeHash(Encoding.UTF8.GetBytes(passwordDTO.updatedPassword ?? "1234"));
                user.Password = hmac.Key;
            }
            var result = await _user.Update(user);
            if (result != null)
            {
                return true;
            }
            return status;
        }

        private bool validatePassword(string currentPassword, User user)
        {
            bool status = true;
            var hmac = new HMACSHA512(user.Password);
            var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(currentPassword));
            for (int i = 0; i < userPass.Length; i++)
            {
                if (userPass[i] != user.HashKey[i])
                    status = false;
            }
            return status;

        }

        public async Task<ICollection<Doctor>> GetAllDoctors()
        {
            return await _doctor.GetAll();
        }

        public async Task<ICollection<Patient>> GetAllPatients()
        {
            return await _patient.GetAll();
        }
    }
}
