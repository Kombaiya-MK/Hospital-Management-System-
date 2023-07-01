using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using UserAPI.Interfaces;

#nullable disable
namespace UserAPI.Models
{
    public class HospitalContext:DbContext
    {
        public HospitalContext(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Doctor> Doctors { get; set; }

       

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var hmac = new HMACSHA256();
            modelBuilder.Entity<User>().HasData(new User()
            {
                Name = "Admin",
                Age = 0,
                Role = "Admin",
                Email = "Admin@gmail.com",
                HashKey = hmac.ComputeHash(Encoding.UTF8.GetBytes("admin@123")),
                Password = hmac.Key,
                PhoneNumber = "9876543210"
            }); ;
        }
    }
}
