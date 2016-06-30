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
    public class PartyController : ApiController
    {
        public HttpResponseMessage Put(party newParty)
        {
            PartySvc svc = new PartySvc();

            var result = svc.CreateNewParty(newParty);

            return Request.CreateResponse(HttpStatusCode.OK, result);
        }
    }
}
