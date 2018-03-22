using SuperDev.Models;
using SuperDev.Utilities;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

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
                Utility.CloneObject(entity, inOut);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<InOut> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOuts.ToList();
            }
        }

        public InOut GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOuts.Where(e => e.Id == id)
                    .Include(e => e.InOutLines)
                    .FirstOrDefault();
            }
        }
    }
}
