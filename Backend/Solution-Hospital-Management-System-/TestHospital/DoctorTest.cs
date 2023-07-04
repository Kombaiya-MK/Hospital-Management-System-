using Microsoft.EntityFrameworkCore;
using UserAPI.Interfaces;
using UserAPI.Models;
using UserAPI.Services;

namespace TestHospital
{
    [TestClass]
    public class DoctorTest
    {
        public static DbContextOptions<HospitalContext> GetDbContextOptions()
        {
            var options = new DbContextOptionsBuilder<HospitalContext>()
                .UseInMemoryDatabase(databaseName: "InternInMemeory")
                .Options;
            return options;
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
                IRepo<Doctor, string> repo = new DoctorRepo(hospitalContext);
                var data = await repo.GetAll();
                Assert.AreEqual(1, data.Count);
            }
        }
    }
}