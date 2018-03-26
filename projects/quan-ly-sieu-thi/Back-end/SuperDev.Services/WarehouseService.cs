using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class WarehouseService
    {
        public Warehouse PersistWarehouse(Warehouse warehouse)
        {
            var warehouseRepository = new WarehouseRepository();
            if (warehouse.Id > 0) return warehouseRepository.Update(warehouse);
            return warehouseRepository.Create(warehouse);
        }

        public IEnumerable<Warehouse> GetList()
        {
            var warehouseRepository = new WarehouseRepository();
            return warehouseRepository.GetEntities();
        }

        public Warehouse GetById(int id)
        {
            var warehouseRepository = new WarehouseRepository();
            return warehouseRepository.GetEntity(id);
        }
    }
}
