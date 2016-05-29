using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using WebApi.Models;

namespace WebApi.Service
{
    public class FoodStorageSvc
    {
        //public var Db = new bvcMobSvc_dbEntities();
        private readonly bvcMobSvc_dbEntities _db = new bvcMobSvc_dbEntities();

        public FoodStorageList Get()
        {
            try
            {
                List<foodStorage> foodStorageList = _db.foodStorage.ToList();

                return new FoodStorageList(foodStorageList, FoodStorageStatus.Success);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }

    public enum FoodStorageStatus
    {
        Undefined = 0,
        Success = 1,
        Error = 2
    }

    public class FoodStorageList
    {
        [JsonProperty("foodStorage")]
        private List<foodStorage> FoodStorage { get; set; }

        private FoodStorageStatus Status { get; set; }

        public FoodStorageList(FoodStorageStatus status)
        {
            Status = status;

            //Status.ToString();
        }

        public FoodStorageList(List<foodStorage> foodStorage, FoodStorageStatus status)
        {
            FoodStorage = foodStorage;
            Status = status;

            //Status.ToString();
        }

    }
}