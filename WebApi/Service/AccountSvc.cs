using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using WebApi.Models;

namespace WebApi.Service
{
    public class AccountSvc
    {
        private readonly bvcMobSvc_dbEntities _db = new bvcMobSvc_dbEntities();

        public AccountResult GetAccount(AccountRequest request)
        {
            account accountDb = null;
            try
            {
                if (string.IsNullOrWhiteSpace(request.Provider)||string.IsNullOrWhiteSpace(request.Token))
                    return new AccountResult(AccountStatus.ErrorInRequest);

                //get account based on provider and token

                accountDb = _db.account.FirstOrDefault(a => a.provider == request.Provider && a.token == request.Token);

                //get party linked to account (if any).

                return new AccountResult(accountDb, AccountStatus.Success);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }

    public enum AccountStatus
    {
        Undefined = 0,
        Success = 1,
        Error = 2,
        ErrorInRequest = 3
    }

    public class AccountRequest
    {
        public string Provider { get; set; }

        public string Token { get; set; }
    }

    public class AccountResult
    {
        [JsonProperty("account")]
        private account Account { get; set; }

        private AccountStatus Status { get; set; }

        public AccountResult(AccountStatus status)
        {
            Status = status;
            //Status.ToString();
        }

        public AccountResult(account account, AccountStatus status)
        {
            Account = account;
            Status = status;
            //Status.ToString();
        }
    }
}