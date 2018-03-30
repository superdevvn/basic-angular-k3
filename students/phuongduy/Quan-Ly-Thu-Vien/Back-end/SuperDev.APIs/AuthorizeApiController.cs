using System.Net.Http;
using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class AuthorizeApiController : ApiController
    {
        [HttpPost]
        [Route("api/login")]
        public IHttpActionResult Login([FromBody]User user)
        {
            var loginResponse = new HttpResponseMessage();
            var userService = new UserService();
            var currentUser = userService.Login(user.Username, user.Password);
            return Ok(userService.Encrypt(currentUser));
        }

        [HttpGet]
        [Route("api/authorize")]
        public IHttpActionResult Authorize()
        {
            var response = new HttpResponseMessage();
            var userService = new UserService();
            return Ok(userService.GetCurrentUser());
        }
    }
}
