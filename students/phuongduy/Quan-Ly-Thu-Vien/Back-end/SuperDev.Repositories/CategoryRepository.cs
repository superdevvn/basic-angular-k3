using System.Collections;
using System.Linq;
using SuperDev.Models;

namespace SuperDev.Repositories
{
    public class CategoryRepository
    {
        public Category Create(Category category)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Categories.Add(category);
                context.SaveChanges();
                context.Entry(category).Reload();
                return category;
            }
        }

        public Category Update(Category category)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Categories.Find(category.Id);
                context.CloneObject(entity, category);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public void Delete(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                var category = context.Categories.Find(id);
                context.Categories.Remove(category);
                context.SaveChanges();
            }
        }

        public IEnumerable GetList()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Categories.ToList();
            }
        }

        public Category GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Categories.Find(id);
            }
        }
    }
}
