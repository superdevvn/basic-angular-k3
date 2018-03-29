using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpGet]
        [Route("api/getInOut/{id}")]
        public IHttpActionResult GetInOut(int id)
        {
            var inOutService = new InOutService();
            return Ok(inOutService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveInOut")]
        public IHttpActionResult SaveInOut([FromBody]InOut inOut)
        {
            var inOutService = new InOutService();
            return Ok(inOutService.PersistInOut(inOut));
        }        

        [HttpPost]
        [Route("api/getInOuts")]
        public IHttpActionResult GetInOuts()
        {
            var inOutService = new InOutService();
            return Ok(inOutService.GetList());
        }
    }
}
