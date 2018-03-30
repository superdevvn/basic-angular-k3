using SuperDev.Models;
using SuperDev.Utilities;
using System.Collections.Generic;
using System.Linq;

namespace SuperDev.Repositories
{
    public class RoomRepository
    {
        public Room Create(Room room)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Rooms.Add(room);
                context.SaveChanges();
                context.Entry(room).Reload();
                return room;
            }
        }

        public Room Update(Room room)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Rooms.Find(room.Id);
                Utility.CloneObject(entity, room);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public void Delete(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                var room = context.Rooms.Find(id);
                context.Rooms.Remove(room);
                context.SaveChanges();
            }
        }

        public IEnumerable<Room> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Rooms.ToList();
            }
        }

        public Room GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Rooms.Find(id);
            }
        }
    }
}
