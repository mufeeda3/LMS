using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Online_LMS.Services.AuthHandler;
using Online_LMS.Services.UserBooks;
using System.Linq;
using System.Linq.Expressions;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Online_LMS.Controllers {
    [Authorize(AuthenticationSchemes = SchemesNamesConst.TokenAuthenticationDefaultScheme)]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AdminController : ControllerBase {
        IUserBookService bookService;
        public AdminController(IUserBookService __book_service) {
            bookService = __book_service;
        }
    }
}
