using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;
using System.Linq;

namespace SuperDev.Services
{
    public class InOutService
    {
        public InOut Persist(InOut inOut)
        {
            var inOutRepository = new InOutRepository();
            var inOutLineRepository = new InOutLineRepository();
            if (inOut.Id > 0)
            {
                var entity = inOutRepository.GetEntity(inOut.Id);
                foreach(var inOutLine in inOut.InOutLines)
                {
                    if (inOutLine.Id == 0) inOutLineRepository.Create(inOutLine);
                    else inOutLineRepository.Update(inOutLine);
                }

                foreach (var inOutLine in entity.InOutLines)
                    if(!inOut.InOutLines.Any(e=> e.Id == inOutLine.Id)) inOutLineRepository.Delete(inOutLine.Id);

                inOut.InOutLines = null;
                return inOutRepository.Update(inOut);
            }
            return inOutRepository.Create(inOut);
        }

        public IEnumerable<InOut> GetList()
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
