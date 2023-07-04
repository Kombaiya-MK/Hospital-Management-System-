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
            Doctor doctor = new()
            {
                Email = doc.Email,
                AccountStatus = doc.AccountStatus,
                Status = doc.Status,
            };
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
            if(user.Email == null)
            {
                throw new NullValueException("User Email is Required!!!");
            }
            var userData = await _user.Get(user.Email);
            if (userData != null && userData.Password != null && user.Password != null)
            {
                var hmac = new HMACSHA512(userData.Password);
                var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                for (int i = 0; i < userPass.Length; i++)
                {
                    if (userData == null || userData.HashKey == null || userData?.HashKey[i] == null)
                        throw new NullValueException("HashKey value is null");
                    else if (userPass[i] != userData.HashKey[i])
                        throw new InvalidUserException("Invalid user");
                }
                user = new UserDTO
                {
                    Email = userData.Email,
                    Role = userData.Role
                };
                user.Token = _tokenservice.GenerateToken(user);
            }
            return user;
        }

        public async Task<bool> ChangePassword(PasswordDTO passwordDTO)
        {
            bool status = false;
            if (passwordDTO.Email == null || passwordDTO.CurrentPassword == null)
            {
                throw new NullValueException("User Email is Required!!!");
            }
            User user = await _user.Get(passwordDTO.Email);
            if (user == null)
                throw new NullValueException("Null value for user");
            else if (user.Password == null)
                throw new NullValueException("user password");
            if (ValidatePassword(passwordDTO.CurrentPassword, user))
            {
                var hmac = new HMACSHA512();
                user.HashKey = hmac.ComputeHash(Encoding.UTF8.GetBytes(passwordDTO.UpdatedPassword ?? "1234"));
                user.Password = hmac.Key;
            }
            var result = await _user.Update(user);
            if (result != null)
            {
                return true;
            }
            return status;
        }

        private static bool ValidatePassword(string currentPassword, User user)
        {
            bool status = true;
            if (user.Password == null)
                throw new NullValueException("user password");
            var hmac = new HMACSHA512(user.Password);
            var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(currentPassword));
            for (int i = 0; i < userPass.Length; i++)
            {
                if (user == null || user.HashKey == null || userPass[i] != user.HashKey[i])
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
        public async Task<Patient> GetPatient(GetPatient item)
        {
            if (item == null || item.Email == null)
                throw new NullValueException("Patient Email is Null");
            return await _patient.Get(item.Email);
        }

        public async Task<Doctor> GetDoctor(GetDoctor item)
        {
            if (item == null || item.Email == null)
                throw new NullValueException("Patient Email is Null");
            return await _doctor.Get(item.Email);
        }

        public async Task<Patient> UpdatePatientPhone(PatientPhoneDTO phone)
        {
            Patient patient = new()
                {
                Email = phone.Email,
                Phone = phone.PhoneNumber
            };
            return await _patient.Update(patient);
        }
    }
}
