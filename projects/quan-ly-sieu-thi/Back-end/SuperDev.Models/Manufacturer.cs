using System.Collections.Generic;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Manufacturer> Manufacturers { get; set; }
    }

    public class Manufacturer
    {

        public int Id { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public virtual List<Product> Products { get; set; }
    }
}
