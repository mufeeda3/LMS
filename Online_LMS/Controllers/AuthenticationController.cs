using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Online_LMS.Entities;
using Online_LMS.Entities.DataClasses;
using Online_LMS.Entities.DataContext;
using Online_LMS.Entities.DataModels;
using Online_LMS.Services.UserAuth;
using System.Data;

namespace Online_LMS.Controllers {
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        IUserAuthService authUser;
        public AuthenticationController(IUserAuthService _auth)
        {
            authUser = _auth;
        }

        [HttpPost]
        public ObjectResult Login([FromBody] LoginModel login) {
            return Ok(authUser.Login(login));
        }

        [HttpPost]
        public ObjectResult Logout([FromBody] LoginModel item) {
            return Ok(authUser.Logout(item));
        }

        [HttpPost]
        public ObjectResult Register([FromBody] RegisterModel user_model) {
            return Ok(authUser.Register(user_model));
        }
    }
}
