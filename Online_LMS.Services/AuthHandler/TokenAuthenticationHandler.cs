using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Online_LMS.Entities;
using Online_LMS.Entities.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace Online_LMS.Services.AuthHandler {
    public class TokenAuthenticationHandler : AuthenticationHandler<TokenAuthenticationOptions> {
        public IServiceProvider ServiceProvider { get; set; }
        public EntitiesDBContext __sb;

        public TokenAuthenticationHandler(IOptionsMonitor<TokenAuthenticationOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            ISystemClock clock,
            IServiceProvider serviceProvider,
            EntitiesDBContext db)
            : base(options, logger, encoder, clock) {
            ServiceProvider = serviceProvider;
            __sb = db;
        }

        protected override Task<AuthenticateResult> HandleAuthenticateAsync() {
            var headers = Request.Headers;
            var token_key = "auth-token";
            var token =Helper.ToGuid(this.Request.Headers[token_key]);

            if (Guid.Empty.Equals(token)) {
                return Task.FromResult(AuthenticateResult.Fail("Token is null"));
            }

            bool isValidToken = false; // check token here
            var session = __sb.UserSession.Where(a => a.Id == token).FirstOrDefault();
            if (session != null && session.Stamp.AddHours(4) > DateTime.Now) {
                var user = __sb.User.Where(a => a.Id == session.UserId).FirstOrDefault();
                isValidToken = user != null;
            }

            if (!isValidToken) {
                return Task.FromResult(AuthenticateResult.Fail($"Balancer not authorize token : for token={token}"));
            }

            var claims = new[] { new Claim("token", token.ToString()) };
            var identity = new ClaimsIdentity(claims, nameof(TokenAuthenticationHandler));
            var ticket = new AuthenticationTicket(new ClaimsPrincipal(identity), this.Scheme.Name);
            return Task.FromResult(AuthenticateResult.Success(ticket));
        }
    }
}
