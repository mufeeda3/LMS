using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Online_LMS.Services.AuthHandler {
    public class TokenAuthenticationOptions : AuthenticationSchemeOptions {
        public string Realm = SchemesNamesConst.TokenAuthenticationDefaultScheme;
    }
}
