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

        public IEnumerable GetList()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOuts.Select(e => new InOutComplex
                {
                    Id = e.Id,
                    UserId = e.UserId,
                    Username = e.User.Username,
                    BookId = e.BookId,
                    BookName = e.Book.Name,
                    CustomerId = e.CustomerId,
                    CustomerName = e.Customer.FirstName + " "+ e.Customer.LastName,
                    FromDate = e.FromDate,
                    ToDate = e.ToDate
                }).ToList();
            }
        }

        public InOut GetById(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOuts.Find(id);
            }
        }
    }
}
