using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;

namespace SuperDev.Repositories
{
    public class ManufacturerRepository
    {
        public Manufacturer Create(Manufacturer manufacturer)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Manufacturers.Add(manufacturer);
                context.SaveChanges();
                context.Entry(manufacturer).Reload();
                return manufacturer;
            }
        }

        public Manufacturer Update(Manufacturer manufacturer)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Manufacturers.Find(manufacturer.Id);
                context.CloneObject(entity, manufacturer);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<Manufacturer> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Manufacturers.ToList();
            }
        }

        public Manufacturer GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Manufacturers.Find(id);
            }
        }
    }
}
