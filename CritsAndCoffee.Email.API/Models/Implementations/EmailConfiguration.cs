using System;
using CritsAndCoffee.Email.API.Models.Interface;

namespace CritsAndCoffee.Email.API.Models.Implementations
{
    public class EmailConfiguration: IEmailConfiguration
    {
        public string TokenVerificationUri { get; set; }
        public string[] RequiredScopes { get; set; }
        public string ApiKey { get; set; }
        public string ApiBaseUri { get; set; }
        public string From { get; set; }
        public string[] AdminAddresses { get; set; }
        
        public EmailConfiguration()
        {
            this.AdminAddresses = Environment.GetEnvironmentVariable("EMAILCONFIGURATION__AdminAddresses")?.Split(',');
            this.RequiredScopes = Environment.GetEnvironmentVariable("EMAILCONFIGURATION__RequiredScopes")?.Split(',');
        }
    }
}