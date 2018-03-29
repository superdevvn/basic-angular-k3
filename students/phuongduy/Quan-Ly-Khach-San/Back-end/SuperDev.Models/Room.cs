using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Room> Rooms { get; set; }
    }

    public class Room
    {

        public int Id { get; set; }

        [StringLength(15)]
        [Index("IX_Code", 0, IsUnique = true)]
        public string Code { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(15)]
        public string Size { get; set; }

        [StringLength(15)]
        public string Type { get; set; }

        public decimal PricePerHour { get; set; }

        public decimal PricePerDay { get; set; }

        public string Description { get; set; }

        public Room()
        {
            Size = RoomSize.One.ToString();
            Type = RoomType.Standard.ToString();
        }
        
    }

    public enum RoomSize
    {
        One,
        Two,
        Three,
        Four,
        Five
    }

    public enum RoomType
    {
        Standard,
        VIP
    }
}
