using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Online_LMS.Entities.DataModels {
    public class BookSearchModel {
        public string Token { get; set; } = "";
        public int Page { get; set; }
    }
}
