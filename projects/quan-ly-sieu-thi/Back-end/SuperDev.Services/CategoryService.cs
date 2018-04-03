using System.Collections;
using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class CategoryService
    {
        CategoryRepository categoryRepository = new CategoryRepository();
        public Category Persist(Category category)
        {
            if (category.Id > 0) return categoryRepository.Update(category);
            return categoryRepository.Create(category);
        }

        public void Delete(int id)
        {
            categoryRepository.Delete(id);
        }

        public IEnumerable GetList()
        {
            return categoryRepository.GetList();
        }

        public Category GetById(int id)
        {
            return categoryRepository.GetEntity(id);
        }
    }
}
