using System.Collections;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class InOutService
    {
        public InOut Persist(InOut inOut)
        {
            var inOutRepository = new InOutRepository();
            if (inOut.Id > 0) return inOutRepository.Update(inOut);
            return inOutRepository.Create(inOut);
        }

        public IEnumerable GetList()
        {
            var inOutRepository = new InOutRepository();
            return inOutRepository.GetEntities();
        }

        public InOut GetById(int id)
        {
            var inOutRepository = new InOutRepository();
            return inOutRepository.GetEntity(id);
        }
    }
}
