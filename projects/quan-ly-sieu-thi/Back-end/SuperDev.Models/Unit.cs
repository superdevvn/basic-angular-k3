using System.Collections.Generic;
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

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
