using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace WebApi.Models
{
    public partial class account
    {
        //[JsonProperty("party")]
        //[JsonIgnore]
        public virtual party party { get; set; }
    }
}