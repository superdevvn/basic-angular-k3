using System.Collections;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class RoleService
    {
        public Role Persist(Role role)
        {
            var roleRepository = new RoleRepository();
            if (role.Id > 0) return roleRepository.Update(role);
            return roleRepository.Create(role);
        }

        public void Delete(int id)
        {
            var roleRepository = new RoleRepository();
            roleRepository.Delete(id);
        }

        public IEnumerable GetList()
        {
            var roleRepository = new RoleRepository();
            return roleRepository.GetEntities();
        }

        public Role GetById(int id)
        {
            var roleRepository = new RoleRepository();
            return roleRepository.GetEntity(id);
        }
    }
}
