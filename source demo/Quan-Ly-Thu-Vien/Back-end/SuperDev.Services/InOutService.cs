using System.Collections;
using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class InOutService
    {
        public InOut PersistInOut(InOut inOut)
        {
            var inOutRepository = new InOutRepository();
            if (inOut.Id > 0) return inOutRepository.Update(inOut);
            return inOutRepository.Create(inOut);
        }

        public IEnumerable GetList()
        {
            var inOutRepository = new InOutRepository();
            return inOutRepository.GetList();
        }

        public InOut GetById(int id)
        {
            var inOutRepository = new InOutRepository();
            return inOutRepository.GetById(id);
        }
    }
}
