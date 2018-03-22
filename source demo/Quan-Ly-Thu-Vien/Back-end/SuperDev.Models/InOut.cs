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

        public int UserId { get; set; }

        public int CustomerId { get; set; }

        public int BookId { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime? ToDate { get; set; }

        public InOut()
        {
            FromDate = DateTime.Now;
        }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }

        [ForeignKey("CustomerId")]
        public virtual Customer Customer { get; set; }

        [ForeignKey("BookId")]
        public virtual Book Book { get; set; }
    }

    public class InOutComplex
    {

        public int Id { get; set; }

        public int UserId { get; set; }

        public string Username { get; set; }

        public int CustomerId { get; set; }

        public string CustomerName { get; set; }

        public int BookId { get; set; }

        public string BookName { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime? ToDate { get; set; }
    }
}
