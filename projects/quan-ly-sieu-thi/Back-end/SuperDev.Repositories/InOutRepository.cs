using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;
using System.Collections;

namespace SuperDev.Repositories
{
    public class InOutRepository
    {
        public InOut Create(InOut inOut)
        {
            using (var context = new SuperDevDbContext())
            {
                context.InOuts.Add(inOut);
                context.SaveChanges();
                context.Entry(inOut).Reload();
                return inOut;
            }
        }

        public InOut Update(InOut inOut)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.InOuts.Find(inOut.Id);
                context.CloneObject(entity, inOut);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOuts.Select(entity => new InOutComplex
                {
                    Id = entity.Id,
                    ProductId = entity.ProductId,
                    ProductName = entity.Product.Name,
                    WarehouseId = entity.WarehouseId,
                    WarehouseName = entity.Warehouse.Name,
                    UserId = entity.UserId,
                    FullName = entity.User.FirstName + " " + entity.User.LastName,
                    Type = entity.Type,
                    Price = entity.Price,
                    Quantity = entity.Quantity,
                    Date = entity.Date
                }).ToList();
            }
        }

        public InOut GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOuts.Find(id);
            }
        }
    }
}
