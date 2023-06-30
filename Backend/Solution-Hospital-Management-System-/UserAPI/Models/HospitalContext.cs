using Microsoft.EntityFrameworkCore;

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
    }
}
