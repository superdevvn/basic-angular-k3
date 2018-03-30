using System.Collections;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class BookService
    {

        BookRepository bookRepository = new BookRepository();
        public Book PersistBook(Book book)
        {
            if (book.Id > 0) return bookRepository.Update(book);
            return bookRepository.Create(book);
        }

        public void Delete(int id)
        {
            bookRepository.Delete(id);
        }

        public IEnumerable GetList()
        {
            return bookRepository.GetList();
        }

        public Book GetById(int id)
        {
            return bookRepository.GetById(id);
        }
    }
}
