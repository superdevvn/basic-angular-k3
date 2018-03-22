using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpPost]
        [Route("api/getRooms")]
        public IHttpActionResult GetRooms()
        {
            var roomService = new RoomService();
            return Ok(roomService.GetList());
        }

        [HttpGet]
        [Route("api/getRoom/{id}")]
        public IHttpActionResult GetRoom(int id)
        {
            var roomService = new RoomService();
            return Ok(roomService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveRoom")]
        public IHttpActionResult SaveRoom([FromBody]Room room)
        {
            var roomService = new RoomService();
            return Ok(roomService.Persist(room));
        }

        [HttpDelete]
        [Route("api/deleteRoom")]
        public IHttpActionResult DeleteRoom(int id)
        {
            var roomService = new RoomService();
            roomService.Delete(id);
            return Ok();
        }
    }
}
