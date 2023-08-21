using Microsoft.Extensions.Logging;
using Online_LMS.Entities.DataClasses;
using Online_LMS.Entities.DataContext;
using Online_LMS.Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Online_LMS.Services.UserBooks.Impl {
    public class UserBookService : IUserBookService {
        public EntitiesDBContext __sb;
        private ILogger _logger;
        public UserBookService(EntitiesDBContext db,
            ILogger<UserBookService> logger) {
            __sb = db;
            _logger = logger;
        }

        public object BookInfo(BookRequestModel query) {
            try {
                var book = __sb.Book.Where(a => a.Id == query.BookId).FirstOrDefault();
                if (book == null) {
                    return new {
                        Message = "The book information is not found, please check and try again",
                        Success = false
                    };
                }
                var borrowed = __sb.Borrow.Where(a => a.UserId == query.UserId && a.BookId == query.BookId).ToList();

                return new {
                    Book = book,
                    Borrowed = borrowed,
                    Success = true
                };
            }
            catch (Exception ex) {
                _logger.LogError(ex, ex.Message);
                return new {
                    Message = "System has failed to get you authenticated, try again later",
                    Success = false
                };
            }
        }

        public object CancelBorrow(BookRequestModel query) {
            try {
                var book = __sb.Book.Where(a => a.Id == query.BookId).FirstOrDefault();
                if (book == null) {
                    return new {
                        Message = "The book information is not found, please check and try again",
                        Success = false
                    };
                }
                var borrowed = __sb.Borrow.Where(a => a.UserId == query.UserId && a.BookId == query.BookId).ToList();
                foreach (var item in borrowed.Where(a => a.Active).ToList()) {
                    item.Active = false;
                    item.EndDate = DateTime.Today;
                }
                __sb.SaveChanges();

                return new {
                    Book = book,
                    Borrowed = borrowed,
                    Success = true
                };
            }
            catch (Exception ex) {
                _logger.LogError(ex, ex.Message);
                return new {
                    Message = "System has failed to get you authenticated, try again later",
                    Success = false
                };
            }
        }

        public object BorrowBook(BookRequestModel query) {
            try {
                var book = __sb.Book.Where(a => a.Id == query.BookId).FirstOrDefault();
                if (book == null) {
                    return new {
                        Message = "The book information is not found, please check and try again",
                        Success = false
                    };
                }
                var borrowed = __sb.Borrow.Where(a => a.UserId == query.UserId && a.BookId == query.BookId).ToList();
                if (!borrowed.Where(a => a.Active).Any()) {
                    var new_entity = new Borrows();
                    new_entity.Id = Guid.NewGuid();
                    new_entity.BookId = query.BookId;
                    new_entity.UserId = query.UserId;
                    new_entity.Active = true;
                    new_entity.StartDate = DateTime.Today;
                    new_entity.EndDate = DateTime.Today;
                    __sb.Borrow.Add(new_entity);
                    __sb.SaveChanges();
                    borrowed.Add(new_entity);
                }

                return new {
                    Book = book,
                    Borrowed = borrowed,
                    Success = true
                };
            }
            catch (Exception ex) {
                _logger.LogError(ex, ex.Message);
                return new {
                    Message = "System has failed to get you authenticated, try again later",
                    Success = false
                };
            }
        }

        public object SearchBooks(BookSearchModel query) {
            try {
                string token = (query.Token ?? "").Trim();

                var db_query = __sb.Book.AsQueryable();

                if (token.Length > 0)
                    db_query = db_query.Where(a => (a.Name.Contains(token) || a.Author.Contains(token) || a.Genre.Contains(token))).AsQueryable();

                var count = (db_query.Count() + 9) / 10;

                if (query.Page < 1 || query.Page > count)
                    return new { Books = db_query.OrderBy(a => a.Name).Take(10).ToList(), Count = count, Success = true };
                return new { Books = db_query.OrderBy(a => a.Name).Skip(query.Page * 10).Take(10).ToList(), Count = count, Success = true };
            }
            catch (Exception ex) {
                _logger.LogError(ex, ex.Message);
                return new {
                    Message = "System has failed to get book list, try again later",
                    Success = false
                };
            }
        }
    }
}
