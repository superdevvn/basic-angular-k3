using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class CustomerService
    {
        public Customer PersistCustomer(Customer customer)
        {
            var customerRepository = new CustomerRepository();
            if (customer.Id > 0) return customerRepository.Update(customer);
            return customerRepository.Create(customer);
        }

        public IEnumerable<Customer> GetList()
        {
            var customerRepository = new CustomerRepository();
            return customerRepository.GetList();
        }

        public Customer GetById(int id)
        {
            var customerRepository = new CustomerRepository();
            return customerRepository.GetById(id);
        }
    }
}
