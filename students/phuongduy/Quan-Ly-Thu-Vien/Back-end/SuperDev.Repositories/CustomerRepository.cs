using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;

namespace SuperDev.Repositories
{
    public class CustomerRepository
    {
        public Customer Create(Customer customer)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Customers.Add(customer);
                context.SaveChanges();
                context.Entry(customer).Reload();
                return customer;
            }
        }

        public Customer Update(Customer customer)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Customers.Find(customer.Id);
                context.CloneObject(entity, customer);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<Customer> GetList()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Customers.ToList();
            }
        }

        public Customer GetById(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Customers.Find(id);
            }
        }
    }
}
