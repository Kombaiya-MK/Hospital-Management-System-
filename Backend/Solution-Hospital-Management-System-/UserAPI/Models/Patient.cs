using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserAPI.Models
{
    public class Patient
    {
        [Key]
        [Required(ErrorMessage = "Email id is required!!!")]
        [EmailAddress]
        public string? Email { get; set; }

        [ForeignKey("Email")]
        public User? User { get; set; }

        [Required(ErrorMessage = "Patient First name required")]
        [RegularExpression("^[a-zA-Z0-9]*$", ErrorMessage = "Only Alphabets and Numbers allowed.")]
        [StringLength(50)]
        public string? PatientFirstName { get; set; }
        public string? PatientLastName { get; set; }

        [Required(ErrorMessage = "Gender is required")]
        [RegularExpression("^M(ale)?$|^F(emale)?$", ErrorMessage = "Invalid Entry for gender!!!")]
        public string? PatientGender { get; set; }

        [Required(ErrorMessage = "phone number is  required")]
        [StringLength(10, ErrorMessage = "Phone number length is miss matched!!!")]
        [RegularExpression("^(?!0+$)(\\+\\d{1,3}[- ]?)?(?!0+$)\\d{10,15}$", ErrorMessage = "Please enter valid phone no.")]
        public string? PatientPhone { get; set; }

        [Required(ErrorMessage = "Marital status is required.")]
        [EnumDataType(typeof(MaritalStatus), ErrorMessage = "Invalid marital status.")]
        public string? PatientMaritalStatus { get; set; }


        [Required(ErrorMessage = "Street address is required.")]
        public string? PatientStreetAddress { get; set; }

        [Required(ErrorMessage = "City is required.")]
        public string? PatientCity { get; set; }

        [Required(ErrorMessage = "State is required.")]
        public string? PatientState { get; set; }

        [Required(ErrorMessage = "Postal code is required.")]
        public string? PatientPostalCode { get; set; }

        [Required(ErrorMessage = "Patient status is required!!!")]
        [RegularExpression("^Active?$|^Inactive?$", ErrorMessage = "Invalid Entry!!!")]
        [MaxLength(15)]
        public string? PatientStatus { get; set; }

        [Required(ErrorMessage = "date of birth is required!!!")]
        public DateTime PatientDateofBirth { get; set; }

        public int PatientAge {get; set; }
        public enum MaritalStatus
        {
            Single,
            Married,
            Divorced,
            Widowed
        }

    }
}
