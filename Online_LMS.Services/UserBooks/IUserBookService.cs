using Online_LMS.Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Online_LMS.Services.UserBooks {
    public interface IUserBookService {
        object SearchBooks(BookSearchModel query);
        object BookInfo(BookRequestModel query);
        object BorrowBook(BookRequestModel query);
        object CancelBorrow(BookRequestModel query);
    }
}
