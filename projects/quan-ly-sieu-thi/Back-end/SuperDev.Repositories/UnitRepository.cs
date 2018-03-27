using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;

namespace SuperDev.Repositories
{
    public class UnitRepository
    {
        public Unit Create(Unit unit)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Units.Add(unit);
                context.SaveChanges();
                context.Entry(unit).Reload();
                return unit;
            }
        }

        public Unit Update(Unit unit)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Units.Find(unit.Id);
                context.CloneObject(entity, unit);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<Unit> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Units.ToList();
            }
        }

        public Unit GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Units.Find(id);
            }
        }
    }
}
