using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Customer> Customers { get; set; }
    }

    public class Customer
    {

        public int Id { get; set; }

        [Index("IX_Code", 1, IsUnique = true)]
        [MaxLength(20)]
        public string Code { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Description { get; set; }

        public virtual List<InOut> InOuts { get; set; }
    }
}
