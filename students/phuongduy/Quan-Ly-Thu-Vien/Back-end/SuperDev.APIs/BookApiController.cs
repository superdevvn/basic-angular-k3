using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpGet]
        [Route("api/getBook/{id}")]
        public IHttpActionResult GetBook(int id)
        {
            var bookService = new BookService();
            return Ok(bookService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveBook")]
        public IHttpActionResult SaveBook([FromBody]Book book)
        {
            var bookService = new BookService();
            return Ok(bookService.PersistBook(book));
        }        

        [HttpPost]
        [Route("api/getBooks")]
        public IHttpActionResult GetBooks()
        {
            var bookService = new BookService();
            return Ok(bookService.GetList());
        }

        [HttpDelete]
        [Route("api/deleteBook")]
        public IHttpActionResult DeleteBook(int id)
        {
            var bookService = new BookService();
            bookService.Delete(id);
            return Ok();
        }
    }
}
