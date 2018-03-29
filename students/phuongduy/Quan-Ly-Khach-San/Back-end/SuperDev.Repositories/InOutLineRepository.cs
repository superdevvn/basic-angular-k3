using SuperDev.Models;
using SuperDev.Utilities;
using System.Collections.Generic;
using System.Linq;

namespace SuperDev.Repositories
{
    public class InOutLineRepository
    {
        public InOutLine Create(InOutLine inOutLine)
        {
            using (var context = new SuperDevDbContext())
            {
                context.InOutLines.Add(inOutLine);
                context.SaveChanges();
                context.Entry(inOutLine).Reload();
                return inOutLine;
            }
        }

        public InOutLine Update(InOutLine inOutLine)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.InOutLines.Find(inOutLine.Id);
                Utility.CloneObject(entity, inOutLine);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public void Delete(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.InOutLines.Find(id);
                context.InOutLines.Remove(entity);
                context.SaveChanges();
            }
        }

        public IEnumerable<InOutLine> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOutLines.ToList();
            }
        }

        public InOutLine GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOutLines.Find(id);
            }
        }
    }
}
