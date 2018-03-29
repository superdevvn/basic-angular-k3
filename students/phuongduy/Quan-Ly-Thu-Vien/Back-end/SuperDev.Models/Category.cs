using System.Collections.Generic;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Category> Categories { get; set; }
    }

    public class Category
    {

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public virtual List<Book> Books { get; set; }
    }
}
