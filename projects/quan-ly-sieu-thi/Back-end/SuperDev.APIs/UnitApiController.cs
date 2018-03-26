using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpPost]
        [Route("api/getUnits")]
        public IHttpActionResult GetUnits()
        {
            var unitService = new UnitService();
            return Ok(unitService.GetList());
        }

        [HttpGet]
        [Route("api/getUnit/{id}")]
        public IHttpActionResult GetUnit(int id)
        {
            var unitService = new UnitService();
            return Ok(unitService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveUnit")]
        public IHttpActionResult SaveUnit([FromBody]Unit unit)
        {
            var unitService = new UnitService();
            return Ok(unitService.Persist(unit));
        }
    }
}
