using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using SuperDev.Services;

namespace SuperDev.APIs
{
    class AuthorizeFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            try
            {
                //var token = actionContext.Request.Headers.FirstOrDefault(header => header.Key == "Auth-SuperDev").Value.ToString();
                var userService = new UserService();
                if (userService.GetCurrentUser() != null)
                    base.OnActionExecuting(actionContext);
            }
            catch
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.Unauthorized));
            }

        }
    }
}
