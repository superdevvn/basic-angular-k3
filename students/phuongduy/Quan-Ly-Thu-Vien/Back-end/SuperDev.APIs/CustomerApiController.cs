using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpGet]
        [Route("api/getCustomer/{id}")]
        public IHttpActionResult GetCustomer(int id)
        {
            var customerService = new CustomerService();
            return Ok(customerService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveCustomer")]
        public IHttpActionResult SaveCustomer([FromBody]Customer customer)
        {
            var customerService = new CustomerService();
            return Ok(customerService.PersistCustomer(customer));
        }        

        [HttpPost]
        [Route("api/getCustomers")]
        public IHttpActionResult GetCustomers()
        {
            var customerService = new CustomerService();
            return Ok(customerService.GetList());
        }
    }
}
