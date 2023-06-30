using Microsoft.EntityFrameworkCore;
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
                return item;
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());
               
            }
            throw new UnableToAddException("Unable To add patient");
        }

        public async Task<Patient> Get(string key)
        {
            var patient = await _context.Patients.FirstOrDefaultAsync(x => x.Email == key);
            if (patient == null)
            {
                throw new NullValueException("Invalid patient : " + key);
            }
            return patient;
        }

        public async Task<ICollection<Patient>> GetAll()
        {
            var patients = await _context.Patients.ToListAsync();
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
                    patient.Age = (item.Age != 0)? item.Age : patient.Age;
                    patient.City = (item.City != null) ? item.City : patient.City;
                    patient.State = (item.State != null) ? item.State : patient.State;
                    patient.FirstName = (item.FirstName != null) ? item.FirstName : patient.FirstName;
                    patient.LastName = (item.LastName != null) ? item.LastName : patient.LastName;
                    patient.Gender = (item.Gender != null) ? item.Gender : patient.Gender;
                    patient.StreetAddress = (item.StreetAddress != null) ? item.StreetAddress : patient.StreetAddress;
                    patient.Phone = (item.Phone != null) ? item.Phone : patient.Phone;
                    patient.Marital_Status = (item.Marital_Status != null) ? item.Marital_Status : patient.Marital_Status;
                    patient.PostalCode = (item.PostalCode != null) ? item.PostalCode : patient. PostalCode;
                    patient.Status = (item.Status != null) ? item.Status : patient.Status;
                    patient.EmergencyName = (item.EmergencyName != null)?item.EmergencyName : patient.EmergencyName;
                    patient.EmergencyPhoneNumber = (item.EmergencyPhoneNumber != null)?item.EmergencyPhoneNumber : patient.EmergencyPhoneNumber;
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return patient;
                }
            }
            catch(Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());
            }
            throw new NotUpdatedException("Unable to update patient details");
        }
    }
}
