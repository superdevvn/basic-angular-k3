using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SuperDev.Models
{
    public abstract class GenericRepository
    {
        private int _pageCount;

        private int _pageNumber;

        protected GenericRepository()
        {
            KeyName = "Id";
        }

        protected GenericRepository(string keyName)
        {
            KeyName = keyName;
        }

        public static int DefaultPageSize = 10;

        public string KeyName { get; set; }

        public int TotalItemCount { get; set; }

        public int TotalItemOnPage { get; set; }

        public int PageSize
        {
            get { return DefaultPageSize; }
        }

        public int PageCount
        {
            get { return _pageCount; }
            set
            {
                _pageCount = value;
                CalcPageList();
            }
        }

        public int PageNumber
        {
            get { return _pageNumber; }
            set
            {
                _pageNumber = value;
                CalcPageList();
            }
        }

        public List<string> PageList { get; set; }

        public void CalcPageList()
        {
            PageList = new List<string>();
            int i = _pageNumber - 2 > 0 ? _pageNumber - 2 : 1;
            for (; i <= _pageNumber + 2 && i <= _pageCount; i++)
            {
                PageList.Add(i.ToString());
            }
        }
    }
}
