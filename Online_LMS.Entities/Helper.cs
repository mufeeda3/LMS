using Microsoft.Extensions.Primitives;
using System.IO.Compression;
using System.Net;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;

namespace Online_LMS.Entities {
    public static class Helper {
        public static string GetPassHash(string str) {
            str = "LMS_" + (str ?? "").Trim() + "_HashVal";
            var val = System.Text.Encoding.ASCII.GetBytes(str);
            var buffer = new MD5CryptoServiceProvider().ComputeHash(val);
            return Convert.ToBase64String(buffer);
        }

        public static Guid ToGuid(string value) {
            var result = Guid.Empty;
            if (Guid.TryParse(value, out result)) 
                return result;
            return Guid.Empty;
        }
    }
}
