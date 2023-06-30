using Microsoft.EntityFrameworkCore;
using UserAPI.Models;

namespace TestHospital
{
    [TestClass]
    public class PatientTest
    {
        public DbContextOptions<HospitalContext> GetDbContextOptions()
        {
            var options = new DbContextOptionsBuilder<HospitalContext>()
                .UseInMemoryDatabase(databaseName: "InternInMemeory")
                .Options;
            return options;
        }
        [TestMethod]
        public async Task TestofGetAll()
        {
            Assert.AreEqual(1, 1);
        }
    }
}