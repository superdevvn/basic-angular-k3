using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class UnitService
    {
        public Unit Persist(Unit unit)
        {
            var unitRepository = new UnitRepository();
            if (unit.Id > 0) return unitRepository.Update(unit);
            return unitRepository.Create(unit);
        }

        public IEnumerable<Unit> GetList()
        {
            var unitRepository = new UnitRepository();
            return unitRepository.GetEntities();
        }

        public Unit GetById(int id)
        {
            var unitRepository = new UnitRepository();
            return unitRepository.GetEntity(id);
        }
    }
}
