using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;
using WebApi.Service;

namespace WebApi.Controllers
{
    public class FoodStorageController : ApiController
    {
        public HttpResponseMessage Get()
        {
            FoodStorageSvc svc = new FoodStorageSvc();

            var result = svc.Get();

            return Request.CreateResponse(HttpStatusCode.OK, result);
        }
    }
}
