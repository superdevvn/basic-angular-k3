using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<User> Users { get; set; }
    }

    public class User
    {

        public int Id { get; set; }

        public int RoleId { get; set; }

        [Index("IX_UserName", IsUnique = true)]
        [MaxLength(50)]
        public string Username { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Description { get; set; }

        public bool IsActived { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public User()
        {
            CreatedDate = DateTime.Now;
        }

        [ForeignKey("RoleId")]
        public virtual Role Role { get; set; }
    }

    public class UserComplex
    {
        public int Id { get; set; }

        public int RoleId { get; set; }

        public string RoleName { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Description { get; set; }

        public bool IsActived { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime CreatedDate { get; set; }

        public int? CreatedBy { get; set; }
    }
}
