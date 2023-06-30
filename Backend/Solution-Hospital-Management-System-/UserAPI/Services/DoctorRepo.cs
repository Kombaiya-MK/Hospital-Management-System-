using UserAPI.Interfaces;
using UserAPI.Models;

namespace UserAPI.Services
{
    public class DoctorRepo : IRepo<Doctor,string>
    {
        private readonly HospitalContext _context;
        private readonly ILogger<Doctor> _logger;

        public DoctorRepo(HospitalContext context, ILogger<Doctor> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<Doctor> Add(Doctor item)
        {
            var transaction = _context.Database.BeginTransaction();
            try
            {
                _context.Doctors.Add(item);
                await _context.SaveChangesAsync();
                await transaction.CommitAsync();
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());

            }
            return item;
        }

        public async Task<Doctor> Get(string key)
        {
            var Doctor = _context.Doctors.FirstOrDefault(x => x.Email == key);
            return Doctor;
        }

        public async Task<ICollection<Doctor>> GetAll()
        {
            var Doctors = _context.Doctors.ToList();
            return Doctors;
        }

        public async Task<Doctor> Update(Doctor item)
        {

            var Doctor = await Get(item.Email);
            var transaction = _context.Database.BeginTransaction();
            try
            {
                if (Doctor != null)
                {
                    await transaction.CommitAsync();
                    Doctor.DoctorAge = (item.DoctorAge != 0) ? item.DoctorAge : Doctor.DoctorAge;
                    Doctor.DoctorCity = (item.DoctorCity != null) ? item.DoctorCity : Doctor.DoctorCity;
                    Doctor.DoctorState = (item.DoctorState != null) ? item.DoctorState : Doctor.DoctorState;
                    Doctor.DoctorFirstName = (item.DoctorFirstName != null) ? item.DoctorFirstName : Doctor.DoctorFirstName;
                    Doctor.DoctorLastName = (item.DoctorLastName != null) ? item.DoctorLastName : Doctor.DoctorLastName;
                    Doctor.DoctorGender = (item.DoctorGender != null) ? item.DoctorGender : Doctor.DoctorGender;
                    Doctor.DoctorStreetAddress = (item.DoctorStreetAddress != null) ? item.DoctorStreetAddress : Doctor.DoctorStreetAddress;
                    Doctor.DoctorPhone = (item.DoctorPhone != null) ? item.DoctorPhone : Doctor.DoctorPhone;
                    Doctor.DoctorMaritalStatus = (item.DoctorMaritalStatus != null) ? item.DoctorMaritalStatus : Doctor.DoctorMaritalStatus;
                    Doctor.DoctorDateofBirth = (item.DoctorDateofBirth != null) ? item.DoctorDateofBirth : Doctor.DoctorDateofBirth;
                    Doctor.DoctorPostalCode = (item.DoctorPostalCode != null) ? item.DoctorPostalCode : Doctor.DoctorPostalCode;
                    Doctor.DoctorStatus = (item.DoctorStatus != null) ? item.DoctorStatus : Doctor.DoctorStatus;
                    Doctor.DoctorSpecialization = (item.DoctorSpecialization != null) ? item.DoctorSpecialization : Doctor.DoctorSpecialization;
                    Doctor.DoctorExperience = (item.DoctorExperience != 0)?item.DoctorExperience : Doctor.DoctorExperience;
                    Doctor.DoctorAccountStatus = (item.DoctorAccountStatus != null)?item.DoctorAccountStatus : Doctor.DoctorAccountStatus;
                    await _context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());
            }
            return Doctor;
        }
    }
}
