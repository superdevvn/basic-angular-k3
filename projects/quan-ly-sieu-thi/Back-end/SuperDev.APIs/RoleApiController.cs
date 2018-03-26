using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpPost]
        [Route("api/getRoles")]
        public IHttpActionResult GetRoles()
        {
            var roleService = new RoleService();
            return Ok(roleService.GetList());
        }

        [HttpGet]
        [Route("api/getRole/{id}")]
        public IHttpActionResult GetRole(int id)
        {
            var roleService = new RoleService();
            return Ok(roleService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveRole")]
        public IHttpActionResult SaveRole([FromBody]Role role)
        {
            var roleService = new RoleService();
            return Ok(roleService.PersistRole(role));
        }
    }
}
