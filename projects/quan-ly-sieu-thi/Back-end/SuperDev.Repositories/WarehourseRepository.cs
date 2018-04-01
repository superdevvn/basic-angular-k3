using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;
using System.Collections;

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

        public IEnumerable GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Warehouses.Select(e => new WarehouseComplex
                {
                    Id = e.Id,
                    ManagerId = e.ManagerId,
                    ManagerName = e.Manager.LastName + " " + e.Manager.FirstName,
                    Name = e.Name,
                    Address = e.Address,
                    Phone = e.Phone,
                    Description = e.Description
                }).ToList();
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
