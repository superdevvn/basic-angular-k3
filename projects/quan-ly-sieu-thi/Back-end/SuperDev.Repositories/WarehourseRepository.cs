using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;

namespace SuperDev.Repositories
{
    public class WarehouseRepository
    {
        public Warehouse Create(Warehouse warehouse)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Warehouses.Add(warehouse);
                context.SaveChanges();
                context.Entry(warehouse).Reload();
                return warehouse;
            }
        }

        public Warehouse Update(Warehouse warehouse)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Warehouses.Find(warehouse.Id);
                context.CloneObject(entity, warehouse);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<Warehouse> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Warehouses.ToList();
            }
        }

        public Warehouse GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Warehouses.Find(id);
            }
        }
    }
}
