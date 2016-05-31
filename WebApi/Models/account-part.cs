using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace WebApi.Models
{
    public partial class account
    {
        [JsonIgnore]
        public virtual ICollection<party> Party { get; set; }
    }
}