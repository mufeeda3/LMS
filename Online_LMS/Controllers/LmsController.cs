using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Online_LMS.Entities.DataModels;
using Online_LMS.Services.AuthHandler;
using Online_LMS.Services.UserBooks;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Online_LMS.Controllers {
    [Authorize(AuthenticationSchemes = SchemesNamesConst.TokenAuthenticationDefaultScheme)]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LmsController : ControllerBase {
        IUserBookService bookService;
        public LmsController(IUserBookService __book_service) {
            bookService = __book_service;
        }

        [HttpPost]
        public ObjectResult BorrowBook([FromBody] BookRequestModel query) {
            return Ok(this.bookService.BorrowBook(query));
        }

        [HttpPost]
        public ObjectResult BookInfo([FromBody] BookRequestModel query) {
            return Ok(this.bookService.BookInfo(query));
        }

        [HttpPost]
        public ObjectResult SearchBooks([FromBody] BookSearchModel query) {
            return Ok(this.bookService.SearchBooks(query));
        }

        [HttpPost]
        public ObjectResult CancelBorrow([FromBody] BookRequestModel query) {
            return Ok(this.bookService.CancelBorrow(query));
        }
    }
}
