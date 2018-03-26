using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class ManufacturerService
    {
        public Manufacturer PersistManufacturer(Manufacturer manufacturer)
        {
            var manufacturerRepository = new ManufacturerRepository();
            if (manufacturer.Id > 0) return manufacturerRepository.Update(manufacturer);
            return manufacturerRepository.Create(manufacturer);
        }

        public IEnumerable<Manufacturer> GetList()
        {
            var manufacturerRepository = new ManufacturerRepository();
            return manufacturerRepository.GetEntities();
        }

        public Manufacturer GetById(int id)
        {
            var manufacturerRepository = new ManufacturerRepository();
            return manufacturerRepository.GetEntity(id);
        }
    }
}
