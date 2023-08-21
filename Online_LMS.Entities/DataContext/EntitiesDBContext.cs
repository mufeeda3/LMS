using Microsoft.EntityFrameworkCore;
using Online_LMS.Entities.DataClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Online_LMS.Entities.DataContext {
    public class EntitiesDBContext : DbContext {
		public EntitiesDBContext(DbContextOptions options) : base(options) { }
		public DbSet<Users> User { get; set; }
		public DbSet<Books> Book { get; set; }
		public DbSet<UserSessions> UserSession { get; set; }
		public DbSet<Borrows> Borrow { get; set; }
		protected override void OnModelCreating(ModelBuilder modelBuilder) {
		}
	}
}
