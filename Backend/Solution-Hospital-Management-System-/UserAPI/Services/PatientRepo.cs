using Microsoft.EntityFrameworkCore.Storage;
using UserAPI.Interfaces;
using UserAPI.Models;

namespace UserAPI.Services
{
    public class PatientRepo : IRepo<Patient, string>
    {
        private readonly HospitalContext _context;
        private readonly ILogger<Patient> _logger;

        public PatientRepo(HospitalContext context , ILogger<Patient> logger)
        {
            _context = context;
            _logger = logger;   
        }
        public async Task<Patient> Add(Patient item)
        {
            var transaction =_context.Database.BeginTransaction();
            try
            {
                _context.Patients.Add(item);
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

        public async Task<Patient> Get(string key)
        {
            var patient =  _context.Patients.FirstOrDefault(x => x.Email == key);
            return patient;
        }

        public async Task<ICollection<Patient>> GetAll()
        {
            var patients = _context.Patients.ToList();
            return patients;
        }

        public async Task<Patient> Update(Patient item)
        {
            
            var patient = await Get(item.Email);
            var transaction = _context.Database.BeginTransaction();
            try
            {
                if(patient != null)
                {
                    await transaction.CommitAsync();
                    patient.PatientAge = (item.PatientAge != 0)? item.PatientAge:patient.PatientAge;
                    patient.PatientCity = (item.PatientCity != null) ? item.PatientCity : patient.PatientCity;
                    patient.PatientState = (item.PatientState != null) ? item.PatientState : patient.PatientState;
                    patient.PatientFirstName = (item.PatientFirstName != null) ? item.PatientFirstName : patient.PatientFirstName;
                    patient.PatientLastName = (item.PatientLastName != null) ? item.PatientLastName : patient.PatientLastName;
                    patient.PatientGender = (item.PatientGender != null) ? item.PatientGender : patient.PatientGender;
                    patient.PatientStreetAddress = (item.PatientStreetAddress != null) ? item.PatientStreetAddress : patient.PatientStreetAddress;
                    patient.PatientPhone = (item.PatientPhone != null) ? item.PatientPhone : patient.PatientPhone;
                    patient.PatientMaritalStatus = (item.PatientMaritalStatus != null) ? item.PatientMaritalStatus : patient.PatientMaritalStatus;
                    patient.PatientDateofBirth = (item.PatientDateofBirth != null) ? item.PatientDateofBirth : patient.PatientDateofBirth;
                    patient.PatientPostalCode = (item.PatientPostalCode != null) ? item.PatientPostalCode : patient.PatientPostalCode;
                    patient.PatientStatus = (item.PatientStatus != null) ? item.PatientStatus : patient.PatientStatus;
                    await _context.SaveChangesAsync();
                }
            }
            catch(Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());
            }
            return patient;
        }
    }
}
