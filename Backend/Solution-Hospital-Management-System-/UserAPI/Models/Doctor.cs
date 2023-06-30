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

        [Required(ErrorMessage = "First name required")]
        [RegularExpression("^[a-zA-Z0-9]*$", ErrorMessage = "Only Alphabets and Numbers allowed.")]
        [StringLength(50)]
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        [Required(ErrorMessage = "Gender is required")]
        [RegularExpression("^M(ale)?$|^F(emale)?$", ErrorMessage = "Invalid Entry for gender!!!")]
        public string? Gender { get; set; }

        [Required(ErrorMessage = "phone number is  required")]
        [StringLength(10, ErrorMessage = "Phone number length is miss matched!!!")]
        [RegularExpression("^(?!0+$)(\\+\\d{1,3}[- ]?)?(?!0+$)\\d{10,15}$", ErrorMessage = "Please enter valid phone no.")]
        public string? Phone { get; set; }

        [Required(ErrorMessage = "Marital status is required.")]
        [EnumDataType(typeof(MaritalStatus), ErrorMessage = "Invalid marital status.")]
        public string? Marital_Status { get; set; }


        [Required(ErrorMessage = "Street address is required.")]
        public string? StreetAddress { get; set; }

        [Required(ErrorMessage = "City is required.")]
        public string? City { get; set; }

        [Required(ErrorMessage = "State is required.")]
        public string? State { get; set; }

        [Required(ErrorMessage = "Postal code is required.")]
        public string? PostalCode { get; set; }

        [Required(ErrorMessage = "Status is required!!!")]
        [RegularExpression("^Active?$|^Inactive?$", ErrorMessage = "Invalid Entry!!!")]
        [MaxLength(15)]
        public string? Status { get; set; }

        [Required(ErrorMessage = "date of birth is required!!!")]
        public DateTime DateofBirth { get; set; }


        public int Age
        {
            get
            {
                return age;
            }
            set
            {

                age = DateTime.Today.Year - new DateTime(DateofBirth.Year,
                    DateofBirth.Month, DateofBirth.Day).Year;
            }
        }

        private int age;
        public enum MaritalStatus
        {
            Single,
            Married,
            Divorced,
            Widowed
        }
        [Required(ErrorMessage = "Account status is required!!!")]
        public string? AccountStatus { get; set;}

        [Required(ErrorMessage = "Specialization is required!!!")]
        public string? Specialization { get; set; }

        [Required(ErrorMessage = "Experience is required!!!")]
        public int Experience { get; set; }
    }
}
