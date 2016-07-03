using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using WebApi.Models;

namespace WebApi.Service
{
    public class PartySvc
    {
        private readonly bvcMobSvc_dbEntities _db = new bvcMobSvc_dbEntities();

        public PartyResult CreateNewParty(party newParty)
        {
            try
            {
                if (newParty == null)
                    return new PartyResult(PartyStatus.NoPartyPresent);

                party party = new party
                {
                    id = Guid.NewGuid().ToString(),
                    firstName = newParty.firstName,
                    lastName = newParty.lastName,
                    name = newParty.name,
                    pantryId = Guid.NewGuid().ToString()
                };

                _db.party.Add(party);
                _db.SaveChanges();

                return new PartyResult(party);

            }
            catch (Exception ex)
            {
                return new PartyResult(PartyStatus.Error);
            }
        }
    }

    public enum PartyStatus
    {
        Undefined = 0,
        Ok = 1,
        NoPartyPresent = 2,
        Error = 3
    }

    public class PartyResult
    {
        [JsonProperty("party")]
        private party Party { get; set; }

        [JsonProperty("status")]
        private PartyStatus Status { get; set; }

        [JsonProperty("statusMessage")]
        private string StatusMessage { get; set; }

        public PartyResult(PartyStatus status)
        {
            Status = status;
            StatusMessage = status.ToString();
        }

        public PartyResult(party party)
        {
            Party = party;
            Status = PartyStatus.Ok;
            StatusMessage = Status.ToString();
        }
    }
}