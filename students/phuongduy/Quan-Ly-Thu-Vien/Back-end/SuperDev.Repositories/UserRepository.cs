using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;
using System.Collections;

namespace SuperDev.Repositories
{
    public class UserRepository
    {
        public User Create(User user)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Users.Add(user);
                context.SaveChanges();
                context.Entry(user).Reload();
                return user;
            }
        }

        public User Update(User user)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Users.Find(user.Id);
                context.CloneObject(entity, user);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public void Delete(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                var user = context.Users.Find(id);
                context.Users.Remove(user);
                context.SaveChanges();
            }
        }

        public IEnumerable GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Users.Select(entity => new UserComplex
                {
                    Id = entity.Id,
                    RoleId = entity.RoleId,
                    RoleName = entity.Role.Name,
                    FirstName = entity.FirstName,
                    LastName = entity.LastName,
                    Username = entity.Username,
                    Password = entity.Password,
                    Description = entity.Description,
                    IsActived = entity.IsActived,
                    IsDeleted = entity.IsDeleted,
                    CreatedDate = entity.CreatedDate,
                    CreatedBy = entity.CreatedBy
                }).ToList();
            }
        }

        public User GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Users.Find(id);
            }
        }

        public User GetEntity(string username, string password)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Users.Where(entity => entity.Username == username && entity.Password == password).FirstOrDefault();
            }
        }
    }
}
