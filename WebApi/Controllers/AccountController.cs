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
    public class AccountController : ApiController
    {
        public HttpResponseMessage Get([FromUri]AccountRequest request)
        {
            AccountSvc svc = new AccountSvc();

            var result = svc.GetAccount(request);

            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        public HttpResponseMessage Put(account newAccount)
        {
            AccountSvc svc = new AccountSvc();

            var result = svc.CreateAccount(newAccount);

            return Request.CreateResponse(HttpStatusCode.OK, result);
        }
    }
}
