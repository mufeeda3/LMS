using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Online_LMS.Entities.DataModels {
    public class BookRequestModel {
        public Guid UserId { get; set; }
        public Guid BookId { get; set; }
    }
}
