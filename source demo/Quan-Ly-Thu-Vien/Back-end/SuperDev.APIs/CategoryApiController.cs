using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpGet]
        [Route("api/getCategory/{id}")]
        public IHttpActionResult GetCategory(int id)
        {
            var categoryService = new CategoryService();
            return Ok(categoryService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveCategory")]
        public IHttpActionResult SaveCategory([FromBody]Category category)
        {
            var categoryService = new CategoryService();
            return Ok(categoryService.Persist(category));
        }        

        [HttpPost]
        [Route("api/getCategories")]
        public IHttpActionResult GetCategories()
        {
            var categoryService = new CategoryService();
            return Ok(categoryService.GetList());
        }

        [HttpDelete]
        [Route("api/deleteCategory")]
        public IHttpActionResult DeleteCategory(int id)
        {
            var categoryService = new CategoryService();
            categoryService.Delete(id);
            return Ok();
        }
    }
}
