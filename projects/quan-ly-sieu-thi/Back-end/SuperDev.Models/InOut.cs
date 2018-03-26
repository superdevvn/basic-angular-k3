using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<InOut> InOuts { get; set; }
    }

    public class InOut
    {

        public int Id { get; set; }

        public int WarehouseId { get; set; }

        public int UserId { get; set; }

        public int ProductId { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public InOutType Type { get; set; }

        public DateTime Date { get; set; }

        public InOut()
        {
            Date = DateTime.Now;
        }

        [ForeignKey("WarehouseId")]
        public virtual Warehouse Warehouse { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }

        [ForeignKey("ProductId")]
        public virtual Product Product { get; set; }
    }

    public class InOutComplex
    {

        public int Id { get; set; }

        public int WarehouseId { get; set; }

        public string WarehouseName { get; set; }

        public int UserId { get; set; }

        public string FullName { get; set; }

        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public InOutType Type { get; set; }

        public DateTime Date { get; set; }
    }

    public enum InOutType
    {
        Import,
        Export,
        Sale
    }
}
