using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace UserAPI.Models
{
    public class Doctor
    {
        [Key]
        [Required(ErrorMessage = "Email id is required!!!")]
        [EmailAddress]
        public string? Email { get; set; }

        [ForeignKey("Email")]
        public User? User { get; set; }

        [Required(ErrorMessage = "Doctor First name required")]
        [RegularExpression("^[a-zA-Z0-9]*$", ErrorMessage = "Only Alphabets and Numbers allowed.")]
        [StringLength(50)]
        public string? DoctorFirstName { get; set; }
        public string? DoctorLastName { get; set; }

        [Required(ErrorMessage = "Gender is required")]
        [RegularExpression("^M(ale)?$|^F(emale)?$", ErrorMessage = "Invalid Entry for gender!!!")]
        public string? DoctorGender { get; set; }

        [Required(ErrorMessage = "phone number is  required")]
        [StringLength(10, ErrorMessage = "Phone number length is miss matched!!!")]
        [RegularExpression("^(?!0+$)(\\+\\d{1,3}[- ]?)?(?!0+$)\\d{10,15}$", ErrorMessage = "Please enter valid phone no.")]
        public string? DoctorPhone { get; set; }

        [Required(ErrorMessage = "Marital status is required.")]
        [EnumDataType(typeof(MaritalStatus), ErrorMessage = "Invalid marital status.")]
        public string? DoctorMaritalStatus { get; set; }


        [Required(ErrorMessage = "Street address is required.")]
        public string? DoctorStreetAddress { get; set; }

        [Required(ErrorMessage = "City is required.")]
        public string? DoctorCity { get; set; }

        [Required(ErrorMessage = "State is required.")]
        public string? DoctorState { get; set; }

        [Required(ErrorMessage = "Postal code is required.")]
        public string? DoctorPostalCode { get; set; }

        [Required(ErrorMessage = "Doctor status is required!!!")]
        [RegularExpression("^Active?$|^Inactive?$", ErrorMessage = "Invalid Entry!!!")]
        [MaxLength(15)]
        public string? DoctorStatus { get; set; }

        [Required(ErrorMessage = "date of birth is required!!!")]
        public DateTime DoctorDateofBirth { get; set; }

        public int DoctorAge { get; set; }

        [Required(ErrorMessage = "Account status is required!!!")]
        public string? DoctorAccountStatus { get; set;}

        [Required(ErrorMessage = "Specialization is required!!!")]
        public string? DoctorSpecialization { get; set; }

        [Required(ErrorMessage = "Experience is required!!!")]
        public int DoctorExperience { get;set; }
        public enum MaritalStatus
        {
            Single,
            Married,
            Divorced,
            Widowed
        }


    }
}
