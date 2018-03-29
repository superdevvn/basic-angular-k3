using System.Web.Http;

namespace SuperDev.APIs
{
    [AuthorizeFilter]
    public partial class SuperDevApiController : ApiController
    {
    }
}
