using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

        public int RoomId { get; set; }

        [StringLength(50)]
        public string CustomerName { get; set; }

        [StringLength(50)]
        public string CMND { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime? ToDate { get; set; }

        public decimal? TotalCost { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }

        public InOut()
        {
            FromDate = DateTime.Now;
        }

        [ForeignKey("RoomId")]
        public virtual Room Room { get; set; }

        public virtual List<InOutLine> InOutLines { get; set; }
    }
}
