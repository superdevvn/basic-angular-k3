using System;
using System.Collections;
using System.Web;
using SuperDev.Models;
using SuperDev.Repositories;
using SuperDev.Utilities;

namespace SuperDev.Services
{
    public class UserService
    {
        private UserRepository userRepository = new UserRepository();
        public User Persist(User user)
        {
            if (user.Id > 0)
            {
                var entity = userRepository.GetEntity(user.Id);
                if(user.Password != entity.Password) user.Password = Utility.HashMD5(user.Password);
                user.CreatedDate = entity.CreatedDate;
                user.CreatedBy = entity.CreatedBy;
                return userRepository.Update(user);
            }
            else
            {
                user.Password = Utility.HashMD5(user.Password);
                user.CreatedDate = DateTime.Now;
                user.CreatedBy = GetCurrentUser().Id;
                return userRepository.Create(user);
            }
        }

        public void Delete(int id)
        {
            userRepository.Delete(id);
        }

        public IEnumerable GetList()
        {
            return userRepository.GetEntities();
        }

        public User GetById(int id)
        {
            return userRepository.GetEntity(id);
        }

        public User Login(string username, string password)
        {
            var user = userRepository.GetEntity(username, Utility.HashMD5(password));
            if (user == null) throw new Exception("Sai tên đăng nhập hoặc mật khẩu");
            if (!user.IsActived) throw new Exception("Tài khoản bị khóa");
            return user;
        }

        public string Encrypt(User user)
        {
            return Utility.Encrypt(user.Username + "~" + user.Password);
        }

        public User Decrypt(string token)
        {
            token = Utility.Decrypt(token);
            string username = token.Split('~')[0];
            string password = token.Split('~')[1];
            return userRepository.GetEntity(username, password);
        }

        public User GetCurrentUser()
        {
            var token = HttpContext.Current.Request.Headers.Get("Auth-SuperDev").ToString();
            return Decrypt(token);
        }
    }
}
