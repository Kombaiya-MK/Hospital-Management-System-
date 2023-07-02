using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserAPI.Interfaces;
using UserAPI.Models;
using UserAPI.Models.DTO;
using UserAPI.Services;

namespace UserAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors(PolicyName = "MyCors")]
    //[Authorize(Roles =("Admin,Doctor,Patient"))]
    public class HospitalController : ControllerBase
    {
        private readonly IManageHospital _service;
        public HospitalController(IManageHospital service)
        {
            _service = service;
        }


        //Shared Controllers
        [HttpPost]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> Login(UserDTO user)
        {
            try
            {
                var usr = await _service.Login(user);
                if (usr != null)
                {
                    return Created("Login Successfull!!!", usr);
                }
                return BadRequest(new Error(1, "Registration Failed"));
            }
            catch (InvalidUserException ex)
            {
                return BadRequest(new Error(3, ex.Message));
            }

            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message));
            }

        }

        [Authorize("Admin")]
        [Authorize("Patient")]
        [HttpGet]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Doctor>>> GetAllDoctors()
        {
            try
            {
                var docs = await _service.GetAllDoctors();
                if (docs.Count >= 1)
                {
                    return Ok(docs);
                }
                return NotFound(new Error(1, "No  data available!!!"));
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message));
            }

        }

        [HttpGet]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Patient>>> GetAllPatientes()
        {
            try
            {
                var Patientes = await _service.GetAllPatients();
                if (Patientes.Count >= 1)
                {
                    return Ok(Patientes);
                }
                return NotFound(new Error(1, "No  data available!!!"));
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message));
            }

        }

        [HttpPut]
        [ProducesResponseType(typeof(Patient), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<bool>> ChangePassword(PasswordDTO password)
        {
            try
            {
                var result = await _service.ChangePassword(password);
                if (result)
                {
                    return Ok("Password Changed Successfully");
                }
                return NotFound(new Error(1, "Invalid User"));
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message));
            }
        }
        //Admin Controllers
        [HttpPut]
        [ProducesResponseType(typeof(Patient), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Doctor>> ApprovalOfDoctor(ApproveDoctorDTO item)
        {
            try
            {
                var doc = await _service.ApproveDoctor(item);
                if (doc != null)
                {
                    return Ok(doc);
                }
                return NotFound(new Error(1, "No  data available!!!"));
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message));
            }
        }
        //Doctor Controllers
        [HttpPost]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Doctor>> DoctorRegister(DoctorRegisterDTO doctor)
        {
            try
            {
                var doc = await _service.Register(doctor);
                if (doc != null)
                {
                    return Created("Registration Successfull!!!", doc);
                }
                return BadRequest(new Error(1, "Registration Failed"));
            }
            catch (InvalidUserException ex)
            {
                return BadRequest(new Error(3, ex.Message));
            }

            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message));
            }

        }
        //Patient Controllers

        [HttpPost]
        [ProducesResponseType(typeof(Patient), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Patient>> PatientRegister(PatientRegisterDTO patient)
        {
            try
            {
                var pat = await _service.Register(patient);
                if (pat != null)
                {
                    return Created("Registration Successfull!!!", pat);
                }
                return BadRequest(new Error(1, "Registration Failed!!!"));
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message));
            }
        }
    }
}
