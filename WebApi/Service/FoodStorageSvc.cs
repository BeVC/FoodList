using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Service
{
    public class FoodStorageSvc
    {
        //public var Db = new bvcMobSvc_dbEntities();
        private bvcMobSvc_dbEntities db = new bvcMobSvc_dbEntities();

        public List<foodStorage> Get()
        {
            return db.foodStorage.ToList();
        }
    }
}