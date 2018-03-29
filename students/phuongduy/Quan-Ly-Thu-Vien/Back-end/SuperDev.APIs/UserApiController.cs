using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpPost]
        [Route("api/getUsers")]
        public IHttpActionResult GetUsers()
        {
            var userService = new UserService();
            return Ok(userService.GetList());
        }

        [HttpGet]
        [Route("api/getUser/{id}")]
        public IHttpActionResult GetUser(int id)
        {
            var userService = new UserService();
            return Ok(userService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveUser")]
        public IHttpActionResult SaveUser([FromBody]User user)
        {
            var userService = new UserService();
            return Ok(userService.Persist(user));
        }

        [HttpDelete]
        [Route("api/deleteUser")]
        public IHttpActionResult DeleteUser(int id)
        {
            var userService = new UserService();
            userService.Delete(id);
            return Ok();
        }
    }
}
