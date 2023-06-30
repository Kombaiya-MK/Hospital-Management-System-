namespace UserAPI.Models.DTO
{
    public class PatientRegisterDTO : Patient
    {
        public string? PasswordClear { get; set; }
    }
}
