using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Product> Products { get; set; }
    }

    public class Product
    {

        public int Id { get; set; }

        public int? ManufacturerId { get; set; }

        public int CategoryId { get; set; }

        public int UnitId { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Description { get; set; }

        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }

        [ForeignKey("UnitId")]
        public virtual Unit Unit { get; set; }

        [ForeignKey("ManufacturerId")]
        public virtual Manufacturer Manufacturer { get; set; }
    }

    public class ProductComplex
    {

        public int Id { get; set; }

        public int? ManufacturerId { get; set; }

        public string ManufacturerName { get; set; }

        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public int UnitId { get; set; }

        public string UnitName { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Description { get; set; }
    }
}
