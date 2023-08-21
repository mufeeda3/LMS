using Microsoft.Extensions.Logging;
using Online_LMS.Entities;
using Online_LMS.Entities.DataClasses;
using Online_LMS.Entities.DataContext;
using Online_LMS.Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Online_LMS.Services.UserAuth.Impl {
    public class UserAuthService : IUserAuthService {
        public EntitiesDBContext __sb;
        private ILogger _logger;
        public UserAuthService(EntitiesDBContext db,
            ILogger<UserAuthService> logger) {
            __sb = db;
            _logger = logger;
        }

        public object Login(LoginModel login) {
            try {
                var user_email = login.Email;
                var user = __sb.User.Where(a => a.Email == user_email).FirstOrDefault();
                if (user == null) {
                    return new {
                        Message = "You entered an incorrect email address",
                        Success = false
                    };
                }

                if (!user.Password.Equals(Helper.GetPassHash(login.Password))) {
                    return new {
                        Message = "You entered an incorrect password",
                        Success = false
                    };
                }

                Guid userID = user.Id;
                __sb.UserSession.RemoveRange(__sb.UserSession.Where(a => a.UserId == userID).ToArray());
                __sb.SaveChanges();

                var newSession = new UserSessions() { Id = Guid.NewGuid(), Stamp = DateTime.Now, UserId = userID };
                var token = newSession.ToString();
                __sb.UserSession.Add(newSession);
                __sb.SaveChanges();


                return new {
                    UserToken = newSession.Id.ToString(),
                    UserName = user.Name,
                    UserRole = user.Role,
                    UserId = user.Id,
                    Email = user.Email,
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

        public object Logout(LoginModel item) {
            try {
                var user = __sb.User.Where(a => a.Email == item.Email).FirstOrDefault();

                if (user != null) {
                    Guid userID = user.Id;
                    __sb.UserSession.RemoveRange(__sb.UserSession.Where(a => a.UserId == userID).ToArray());
                    __sb.SaveChanges();
                }
                return new { Success = true };
            }
            catch (Exception ex) {
                _logger.LogError(ex, ex.Message);
                return new { Success = true };
            }
        }

        public object Register(RegisterModel user_model) {
            try {
                var user = new Users();
                var email = user_model.Email;

                var count = __sb.User.Where(a => a.Email == email).Count();
                if (count > 0) {
                    return new {
                        Message = $"this email ({email}) has already been registered",
                        Success = false
                    };
                }
                
                user.Id = Guid.NewGuid();
                user.Password = Helper.GetPassHash(user_model.Password);
                user.Email = user_model.Email;
                user.Name = user_model.Name;
                user.Role = "User";

                __sb.User.Add(user);
                __sb.SaveChanges();

                return new {
                    Message = "User created succussfully",
                    Success = true
                };
            }
            catch (Exception ex) {
                _logger.LogError(ex, "Error in service Error: [{}].", ex.Message);
                return new {
                    Message = "User creation failed",
                    Success = false
                };
            }
        }
    }
}
