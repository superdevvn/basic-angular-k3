using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpPost]
        [Route("api/getManufacturers")]
        public IHttpActionResult GetManufacturers()
        {
            var manufacturerService = new ManufacturerService();
            return Ok(manufacturerService.GetList());
        }

        [HttpGet]
        [Route("api/getManufacturer/{id}")]
        public IHttpActionResult GetManufacturer(int id)
        {
            var manufacturerService = new ManufacturerService();
            return Ok(manufacturerService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveManufacturer")]
        public IHttpActionResult SaveManufacturer([FromBody]Manufacturer manufacturer)
        {
            var manufacturerService = new ManufacturerService();
            return Ok(manufacturerService.PersistManufacturer(manufacturer));
        }
    }
}
