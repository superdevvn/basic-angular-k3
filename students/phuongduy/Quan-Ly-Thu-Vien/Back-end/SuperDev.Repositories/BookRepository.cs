using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;
using System.Collections;

namespace SuperDev.Repositories
{
    public class BookRepository
    {
        public Book Create(Book book)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Books.Add(book);
                context.SaveChanges();
                context.Entry(book).Reload();
                return book;
            }
        }

        public Book Update(Book book)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Books.Find(book.Id);
                context.CloneObject(entity, book);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public void Delete(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                var book = context.Books.Find(id);
                context.Books.Remove(book);
                context.SaveChanges();
            }
        }

        public IEnumerable GetList()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Books.Select(e => new
                {
                    Id = e.Id,
                    CategoryId = e.CategoryId,
                    CategoryName = e.Category.Name,
                    Code = e.Code,
                    Name = e.Name,
                    IsActived = e.IsActived,
                    Description = e.Description
                }).ToList();
            }
        }

        public Book GetById(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Books.Find(id);
            }
        }
    }
}
