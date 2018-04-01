using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Unit> Units { get; set; }
    }

    public class Unit
    {

        public int Id { get; set; }

        [Index("IX_Code", IsUnique = true)]
        [MaxLength(50)]
        public string Code { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
