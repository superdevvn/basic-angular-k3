using SuperDev.Models;
using SuperDev.Repositories;
using SuperDev.Utilities;
using System;
using System.Collections.Generic;
using System.Web;

namespace SuperDev.Services
{
    public class UserService
    {
        public User Persist(User user)
        {
            var userRepository = new UserRepository();
            if (user.Id > 0)
            {
                var entity = userRepository.GetEntity(user.Id);
                if(!string.Equals(entity.Password,user.Password)) user.Password = Utility.HashMD5(user.Password);
                user.CreatedDate = entity.CreatedDate;
                user.CreatedBy = entity.CreatedBy;
                return userRepository.Update(user);
            } else
            {
                user.Password = Utility.HashMD5(user.Password);
                user.CreatedDate = DateTime.Now;
                user.CreatedBy = GetCurrentUser().Id;
                return userRepository.Create(user);
            }
        }

        public IEnumerable<UserComplex> GetList()
        {
            var userRepository = new UserRepository();
            return userRepository.GetEntities();
        }

        public User GetById(int id)
        {
            var userRepository = new UserRepository();
            return userRepository.GetEntity(id);
        }

        public User Login(string username, string password)
        {
            var userRepository = new UserRepository();
            var user = userRepository.GetEntity(username, Utility.HashMD5(password));
            if (user == null) throw new Exception("Sai tên đăng nhập hoặc mật khẩu");
            return user;
        }

        public string Encrypt(User user)
        {
            var token = Utility.Encrypt(user.Username + "~" + user.Password);
            return token;
        }

        public User Decrypt(string token)
        {
            token = Utility.Decrypt(token);
            var userRepository = new UserRepository();
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
