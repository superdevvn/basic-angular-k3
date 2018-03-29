using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class RoomService
    {
        public Room Persist(Room room)
        {
            var roomRepository = new RoomRepository();
            if (room.Id > 0) return roomRepository.Update(room);
            return roomRepository.Create(room);
        }

        public void Delete(int id)
        {
            var roomRepository = new RoomRepository();
            roomRepository.Delete(id);
        }

        public IEnumerable<Room> GetList()
        {
            var roomRepository = new RoomRepository();
            return roomRepository.GetEntities();
        }

        public Room GetById(int id)
        {
            var roomRepository = new RoomRepository();
            return roomRepository.GetEntity(id);
        }
    }
}
