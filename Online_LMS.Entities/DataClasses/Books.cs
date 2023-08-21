using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Online_LMS.Entities.DataClasses {
    [Table("Books")]
    public class Books {
        public Guid Id { get; set; }
        public string Name { get; set; } = "";
        public string Author { get; set; } = "";
        public string Genre { get; set; } = "";
    }
}
