using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Indemnify> Indemnifies { get; set; }
    }

    public class Indemnify
    {

        public int Id { get; set; }

        public int UserId { get; set; }

        public int CustomerId { get; set; }

        public int BookId { get; set; }

        public string Description { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }

        [ForeignKey("CustomerId")]
        public virtual Customer Customer { get; set; }

        [ForeignKey("BookId")]
        public virtual Book Book { get; set; }
    }
}
