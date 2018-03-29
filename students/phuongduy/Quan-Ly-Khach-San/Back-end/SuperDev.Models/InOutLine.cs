using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<InOutLine> InOutLines { get; set; }
    }

    public class InOutLine
    {

        public int Id { get; set; }

        public int InOutId { get; set; }

        public string Name { get; set; }

        public int Cost { get; set; }

        public int Quantity { get; set; }

        [ForeignKey("InOutId")]
        public virtual InOut InOut { get; set; }
    }
}
