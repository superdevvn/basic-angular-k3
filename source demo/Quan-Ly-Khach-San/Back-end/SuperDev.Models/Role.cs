using System.ComponentModel.DataAnnotations;
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

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }
    }
}
