using FRSSoftwareDemoApp.Models;
using Microsoft.EntityFrameworkCore;


namespace FRSSoftwareDemoApp.Data
{
    public class FRSSoftwareDemoAppDbContext : DbContext
    {

        public FRSSoftwareDemoAppDbContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Subject> Subjects { get; set; }
    }
}
