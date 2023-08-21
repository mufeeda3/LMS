using Online_LMS.Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Online_LMS.Services.UserAuth {
    public interface IUserAuthService {
        object Login(LoginModel login);
        object Logout(LoginModel item);
        object Register(RegisterModel user_model);
    }
}
