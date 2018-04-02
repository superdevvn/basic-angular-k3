using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Warehouse> Warehouses { get; set; }
    }

    public class Warehouse
    {

        public int Id { get; set; }

        public int ManagerId { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Phone { get; set; }

        public string Description { get; set; }

        [ForeignKey("ManagerId")]
        public virtual User Manager { get; set; }
    }

    public class WarehouseComplex
    {

        public int Id { get; set; }

        public int ManagerId { get; set; }

        public string ManagerName { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Phone { get; set; }

        public string Description { get; set; }
    }
}
