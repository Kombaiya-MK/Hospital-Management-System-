#nullable disable
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using UserAPI.Interfaces;
using UserAPI.Models;
using UserAPI.Services;

namespace TestHospital
{
    [TestClass]
    public class DoctorTest
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
        public async Task TestOfGetAllDoctors()
        {
            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                hospitalContext.Doctors.Add(new Doctor
                {
                    FirstName = "Eren",
                    Phone = "9876543210",
                    DateofBirth = new DateTime(2001, 02, 14),
                    Age = 22,
                    Email = "gimu@gmail.com",
                    Gender = "Male",
                    Experience = 10,
                    Specialization = "ENT",
                    State = "XXX",
                    StreetAddress = "XXX",
                    City = "XXX",
                    Status = "Active",
                    AccountStatus = "Pending",
                    LastName = "Yeager",
                    PostalCode = "600001",
                    Marital_Status = "Single"
                });
                await hospitalContext.SaveChangesAsync();
            }

            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                IRepo<Doctor, string> repo =  new DoctorRepo(hospitalContext);
                var data = await repo.GetAll();
                Assert.AreEqual(1, data.Count);
            }
        }

        [TestMethod]
        public async Task TestOfADD()
        {
            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                hospitalContext.Doctors.Add(new Doctor
                {
                    FirstName = "Eren",
                    Phone = "9876543210",
                    DateofBirth = new DateTime(2001, 02, 14),
                    Age = 22,
                    Email = "Eren@gmail.com",
                    Gender = "Male",
                    Experience = 10,
                    Specialization = "ENT",
                    State = "XXX",
                    StreetAddress = "XXX",
                    City = "XXX",
                    Status = "Active",
                    AccountStatus = "Pending",
                    LastName = "Yeager",
                    PostalCode = "600001",
                    Marital_Status = "Single"
                });
                await hospitalContext.SaveChangesAsync();
            }

            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                IRepo<Doctor, string> repo = new DoctorRepo(hospitalContext);
                var data = await repo.GetAll();
                Assert.AreEqual(1, data.Count);
            }
        }

        [TestMethod]
        public async Task TestGetAll()
        {
            using var context = new HospitalContext(GetDbContextOptions());
            var doctors = await context.Doctors.ToListAsync();

            foreach (var doctor in doctors)
            {
                Console.WriteLine($"Id: {doctor.Email}, Name: {doctor.FirstName}, Age: {doctor.Age}");
            }

        }

        [TestMethod]
        public async Task TestOfUpdate()
        {
            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                hospitalContext.Doctors.Add(new Doctor
                {
                    FirstName = "Eren",
                    Phone = "9876543210",
                    DateofBirth = new DateTime(2001, 02, 14),
                    Age = 22,
                    Email = "Yeager@gmail.com",
                    Gender = "Male",
                    Experience = 10,
                    Specialization = "ENT",
                    State = "XXX",
                    StreetAddress = "XXX",
                    City = "XXX",
                    Status = "Active",
                    AccountStatus = "Pending",
                    LastName = "Yeager",
                    PostalCode = "600001",
                    Marital_Status = "Single"
                });
                await hospitalContext.SaveChangesAsync();
            }

            using (var hospitalContext = new HospitalContext(GetDbContextOptions()))
            {
                IRepo<Doctor, string> repo = new DoctorRepo(hospitalContext);
                _ = await repo.Update(
                    new Doctor()
                    {
                        FirstName = "Eren",
                        Phone = "9876543210",
                        DateofBirth = new DateTime(2001, 02, 14),
                        Age = 22,
                        Email = "Yeager@gmail.com",
                        Gender = "Male",
                        Experience = 10,
                        Specialization = "ENT",
                        State = "XXX",
                        StreetAddress = "XXX",
                        City = "XXX",
                        Status = "Active",
                        AccountStatus = "Approved",
                        LastName = "Yeager",
                        PostalCode = "600001",
                        Marital_Status = "Single"
                    });
                var doc = await repo.Get("Yeager@gmail.com");
                Assert.AreEqual(doc.AccountStatus , "Approved",true);
            }
        }

        //Negative Testing

        [TestMethod]
        public async Task GetException()
        {
            using HospitalContext hospitalContext = new(GetDbContextOptions());
            IRepo<Doctor, string> repo = new DoctorRepo(hospitalContext);
            //var data = new Doctor();
            await Assert.ThrowsExceptionAsync<UnableToAddException>(() => repo.Add(new Doctor()));
        }

        [TestMethod]
        //When email is null
        public async Task UpdateException()
        {
            using var hospitalContext = new HospitalContext(GetDbContextOptions());
            IRepo<Doctor, string> repo = new DoctorRepo(hospitalContext);
            //var data = new Doctor();
            await Assert.ThrowsExceptionAsync<NullValueException>(() => repo.Update(new Doctor()));
        }

        [TestMethod]
        //When email is wrong
        public async Task UpdateException2()
        {
            using HospitalContext hospitalContext = new(GetDbContextOptions());
            IRepo<Doctor, string> repo = new DoctorRepo(hospitalContext);
            //var data = new Doctor();
            await Assert.ThrowsExceptionAsync<NullValueException>(() => repo.Update(new Doctor()
            {
                Email = "abc@gmail.com"
            }));
        }


        [TestMethod]
        //When email is wrong
        public async Task GetException2()
        {
            using var hospitalContext = new HospitalContext(GetDbContextOptions());
            IRepo<Doctor, string> repo = new DoctorRepo(hospitalContext);
            //var data = new Doctor();
            await Assert.ThrowsExceptionAsync<NullValueException>(() => repo.Get("abc@gmail.com"));
        }

        public override int GetHashCode()
        {
            throw new NotImplementedException();
        }
        
    }
}