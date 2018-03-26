using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class RoleService
    {
        public Role PersistRole(Role role)
        {
            var roleRepository = new RoleRepository();
            if (role.Id > 0) return roleRepository.Update(role);
            return roleRepository.Create(role);
        }

        public IEnumerable<Role> GetList()
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
