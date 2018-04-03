using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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

        [Index("IX_Code", IsUnique = true)]
        [MaxLength(15)]
        public string Code { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public virtual List<Product> Products { get; set; }
    }
}
