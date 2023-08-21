using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Online_LMS.Entities.DataClasses {
    [Table("UserSessions")]
    public class UserSessions {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
       public DateTime Stamp { get; set; }
    }
}
