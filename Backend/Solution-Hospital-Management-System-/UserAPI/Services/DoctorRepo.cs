﻿using Microsoft.EntityFrameworkCore;
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
                return item;
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());

            }
            throw new UnableToAddException("Unable to add " + item.ToString());
        }

        public async Task<Doctor> Get(string key)
        {
            var Doctor = await _context.Doctors.FirstOrDefaultAsync(x => x.Email == key);
            if (Doctor == null)
            {
                throw new NullValueException("Invalid Email : " + key);
            }
            return Doctor;
        }

        public async Task<ICollection<Doctor>> GetAll()
        {
            var Doctors = _context.Doctors;
            return await Doctors.ToListAsync();
        }

        public async Task<Doctor> Update(Doctor item)
        {

            var Doctor = await Get(item.Email);
            var transaction = _context.Database.BeginTransaction();
            try
            {
                if (Doctor != null)
                {
                    
                    Doctor.Age = (item.Age != 0) ? item.Age : Doctor.Age;
                    Doctor.City = (item.City != null) ? item.City : Doctor.City;
                    Doctor.State = (item.State != null) ? item.State : Doctor.State;
                    Doctor.FirstName = (item.FirstName != null) ? item.FirstName : Doctor.FirstName;
                    Doctor.LastName = (item.LastName != null) ? item.LastName : Doctor.LastName;
                    Doctor.Gender = (item.Gender != null) ? item.Gender : Doctor.Gender;
                    Doctor.StreetAddress = (item.StreetAddress != null) ? item.StreetAddress : Doctor.StreetAddress;
                    Doctor.Phone = (item.Phone != null) ? item.Phone : Doctor.Phone;
                    Doctor.Marital_Status = (item.Marital_Status != null) ? item.Marital_Status : Doctor.Marital_Status;
                    Doctor.DateofBirth = (item.DateofBirth != DateTime.MinValue || item.DateofBirth != DateTime.Now) ? item.DateofBirth : Doctor.DateofBirth;
                    Doctor.PostalCode = (item.PostalCode != null) ? item.PostalCode : Doctor.PostalCode;
                    Doctor.Status = (item.Status != null) ? item.Status : Doctor.Status;
                    Doctor.Specialization = (item.Specialization != null) ? item.Specialization : Doctor.Specialization;
                    Doctor.Experience = (item.Experience != 0) ? item.Experience : Doctor.Experience;
                    Doctor.AccountStatus = (item.AccountStatus != null)?item.AccountStatus : Doctor.AccountStatus;
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return Doctor;
                }
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());
            }
            throw new NotUpdatedException("Not updated");
        }
    }
}
