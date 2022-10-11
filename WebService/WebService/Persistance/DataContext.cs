using Microsoft.EntityFrameworkCore;
using WebService.Models;

namespace WebService.Persistance
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Rental> Rental { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(new User("admin", "Admin", "admin.wypozyczalnia@gmail.com", "admin123"));
            base.OnModelCreating(modelBuilder);
        }
    }
   
}
