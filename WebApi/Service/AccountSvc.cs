using System;
using System.Collections.Generic;
using System.Data.Entity;
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
            try
            {
                if (string.IsNullOrWhiteSpace(request.Provider) || string.IsNullOrWhiteSpace(request.Token))
                    return new AccountResult(AccountStatus.ErrorInRequest);

                //get account based on provider and token

                var accountDb = _db.account.FirstOrDefault(a => a.provider == request.Provider && a.token == request.Token);

                //get party linked to account (if any).

                return new AccountResult(accountDb);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public AccountResult CreateAccount(account newAccount)
        {
            try
            {
                if (newAccount == null)
                    return new AccountResult(AccountStatus.ErrorInRequest);

                account account = new account
                {
                    id = Guid.NewGuid().ToString(),
                    provider = newAccount.provider,
                    token = newAccount.token,
                    userName = newAccount.userName,
                    jsonUserInfo = newAccount.jsonUserInfo
                };

                _db.account.Add(account);
                _db.SaveChanges();

                return new AccountResult(account);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public AccountResult UpdateAccount(account account)
        {
            try
            {
                if (account == null)
                    return new AccountResult(AccountStatus.ErrorInRequest);

                var accountDb = _db.account.FirstOrDefault(a => a.id == account.id);

                if (accountDb != null)
                {
                    accountDb.partyId = account.partyId;

                    _db.Entry(accountDb).State = EntityState.Modified;
                    _db.SaveChanges();

                    return new AccountResult(accountDb);
                }else
                    return new AccountResult(AccountStatus.Error);
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

        [JsonProperty("status")]
        private AccountStatus Status { get; set; }

        [JsonProperty("statusMessage")]
        private string StatusMessage { get; set; }

        public AccountResult(AccountStatus status)
        {
            Status = status;
            StatusMessage = Status.ToString();
        }

        public AccountResult(account account)
        {
            Account = account;
            Status = AccountStatus.Success;
            StatusMessage = Status.ToString();
        }
    }
}