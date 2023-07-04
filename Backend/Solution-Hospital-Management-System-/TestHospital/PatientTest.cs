#nullable disable
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserAPI.Interfaces;
using UserAPI.Models;
using UserAPI.Services;

namespace TestHospital
{
    [TestClass]
    public class PatientTest
    {
        //Positive Testing
        public static DbContextOptions<HospitalContext> GetDbContextOptions()
        {
            var options = new DbContextOptionsBuilder<HospitalContext>()
                .UseInMemoryDatabase(databaseName: "HospitalInMemeory")
                .ConfigureWarnings(x => x.Ignore(InMemoryEventId.TransactionIgnoredWarning))
                .Options;
            return options;
        }
        public override bool Equals(object obj)
        {
            return GetType().GetProperties().All(property => property.GetValue(this) == property.GetValue(obj));
        }
        [TestMethod]
        public async Task TestOfGetAllPatients()
        {
            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                hospitalContext.Patients.Add(new Patient
                {
                    FirstName = "Eren",
                    Phone = "9876543210",
                    DateofBirth = new DateTime(2001, 02, 14),
                    Age = 22,
                    Email = "gimu@gmail.com",
                    Gender = "Male",
                    EmergencyName = "Mikasa",
                    State = "XXX",
                    StreetAddress = "XXX",
                    City = "XXX",
                    Status = "Active",
                    EmergencyPhoneNumber = "9876543210",
                    LastName = "Yeager",
                    PostalCode = "600001",
                    Marital_Status = "Single"
                });
                await hospitalContext.SaveChangesAsync();
            }

            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                IRepo<Patient, string> repo = new PatientRepo(hospitalContext);
                var data = await repo.GetAll();
                Assert.AreEqual(1, data.Count);
            }
        }

        [TestMethod]
        public async Task TestOfADD()
        {
            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                _ = hospitalContext.Patients.Add(new Patient
                {
                    FirstName = "Eren",
                    Phone = "9876543210",
                    DateofBirth = new DateTime(2001, 02, 14),
                    Age = 22,
                    Email = "Eren@gmail.com",
                    Gender = "Male",
                    EmergencyPhoneNumber = "9876543210",
                    EmergencyName = "Mikasa",
                    State = "XXX",
                    StreetAddress = "XXX",
                    City = "XXX",
                    Status = "Active",
                    LastName = "Yeager",
                    PostalCode = "600001",
                    Marital_Status = "Single"
                });
                await hospitalContext.SaveChangesAsync();
            }

            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                IRepo<Patient, string> repo = new PatientRepo(hospitalContext);
                var data = await repo.GetAll();
                Assert.AreEqual(1, data.Count);
            }
        }

        [TestMethod]
        public async Task TestGetAll()
        {
            using var context = new HospitalContext(GetDbContextOptions());
            var Patients = await context.Patients.ToListAsync();

            foreach (var Patient in Patients)
            {
                Console.WriteLine($"Id: {Patient.Email}, Name: {Patient.FirstName}, Age: {Patient.Age}");
            }

        }

        [TestMethod]
        public async Task TestOfUpdate()
        {
            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                hospitalContext.Patients.Add(new Patient
                {
                    FirstName = "Eren",
                    Phone = "9876543210",
                    DateofBirth = new DateTime(2001, 02, 14),
                    Age = 22,
                    Email = "Yeager@gmail.com",
                    Gender = "Male",
                    EmergencyName="Mikasa",
                    EmergencyPhoneNumber="9876543210",
                    State = "XXX",
                    StreetAddress = "XXX",
                    City = "XXX",
                    Status = "Active",
                    LastName = "Yeager",
                    PostalCode = "600001",
                    Marital_Status = "Single"
                });
                await hospitalContext.SaveChangesAsync();
            }

            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                IRepo<Patient, string> repo = new PatientRepo(hospitalContext);
                _ = await repo.Update(
                    new Patient()
                    {
                        FirstName = "Eren",
                        Phone = "9876543210",
                        DateofBirth = new DateTime(2001, 02, 14),
                        Age = 22,
                        Email = "Yeager@gmail.com",
                        Gender = "Male",
                        EmergencyPhoneNumber = "1023456789",
                        State = "XXX",
                        StreetAddress = "XXX",
                        City = "YYY",
                        Status = "Active",
                        EmergencyName = "Mikasa",
                        LastName = "Yeager",
                        PostalCode = "600001",
                        Marital_Status = "Single"
                    });
                var patient = await repo.Get("Yeager@gmail.com");
                Assert.AreEqual(patient.City, "YYY", true);
            }
        }

        //Negative Testing

        [TestMethod]
        public async Task GetException()
        {
            using HospitalContext hospitalContext = new(GetDbContextOptions());
            IRepo<Patient, string> repo = new PatientRepo(hospitalContext);
            await Assert.ThrowsExceptionAsync<UnableToAddException>(() => repo.Add(new Patient()));
        }

        [TestMethod]
        //When email is null
        public async Task UpdateException()
        {
            using var hospitalContext = new HospitalContext(GetDbContextOptions());
            IRepo<Patient, string> repo = new PatientRepo(hospitalContext);
            await Assert.ThrowsExceptionAsync<NullValueException>(() => repo.Update(new Patient()));
        }

        [TestMethod]
        //When email is wrong
        public async Task UpdateException2()
        {
            using var hospitalContext = new HospitalContext(GetDbContextOptions());
            IRepo<Patient, string> repo = new PatientRepo(hospitalContext);
            await Assert.ThrowsExceptionAsync<NullValueException>(() => repo.Update(new Patient()
            {
                Email = "abc@gmail.com"
            }));
        }


        [TestMethod]
        //When email is wrong
        public async Task GetException2()
        {
            using var hospitalContext = new HospitalContext(GetDbContextOptions());
            IRepo<Patient, string> repo = new PatientRepo(hospitalContext);
            await Assert.ThrowsExceptionAsync<NullValueException>(() => repo.Get("abc@gmail.com"));
        }

        public override int GetHashCode()
        {
            throw new NotImplementedException();
        }
    }
}
