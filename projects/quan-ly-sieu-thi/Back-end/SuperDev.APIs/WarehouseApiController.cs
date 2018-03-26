using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpPost]
        [Route("api/getWarehouses")]
        public IHttpActionResult GetWarehouses()
        {
            var warehouseService = new WarehouseService();
            return Ok(warehouseService.GetList());
        }

        [HttpGet]
        [Route("api/getWarehouse/{id}")]
        public IHttpActionResult GetWarehouse(int id)
        {
            var warehouseService = new WarehouseService();
            return Ok(warehouseService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveWarehouse")]
        public IHttpActionResult SaveWarehouse([FromBody]Warehouse warehouse)
        {
            var warehouseService = new WarehouseService();
            return Ok(warehouseService.PersistWarehouse(warehouse));
        }
    }
}
