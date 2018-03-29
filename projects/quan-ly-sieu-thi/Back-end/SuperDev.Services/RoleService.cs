using System.Collections;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class RoleService
    {
        private RoleRepository roleRepository = new RoleRepository();
        public Role Persist(Role role)
        {
            if (role.Id > 0) return roleRepository.Update(role);
            return roleRepository.Create(role);
        }

        public void Delete(int id)
        {
            roleRepository.Delete(id);
        }

        public IEnumerable GetList()
        {
            return roleRepository.GetEntities();
        }

        public Role GetById(int id)
        {
            return roleRepository.GetEntity(id);
        }
    }
}
