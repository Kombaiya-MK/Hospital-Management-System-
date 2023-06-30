using Microsoft.EntityFrameworkCore;
using UserAPI.Models;

namespace TestHospital
{
    [TestClass]
    public class PatientTest
    {
        public static DbContextOptions<HospitalContext> GetDbContextOptions()
        {
            var options = new DbContextOptionsBuilder<HospitalContext>()
                .UseInMemoryDatabase(databaseName: "InternInMemeory")
                .Options;
            return options;
        }
        [TestMethod]
        public void TestMethod1()
        {

        }
    }
}