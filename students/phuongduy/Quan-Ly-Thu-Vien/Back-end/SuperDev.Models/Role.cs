using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Role> Roles { get; set; }
    }

    public class Role
    {

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
